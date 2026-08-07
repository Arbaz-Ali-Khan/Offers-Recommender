import { CARD_DATABASE, ISSUERS, getCardById, getCardsByIssuer } from '../shared/card-database.js';
import { TARGETED_OFFERS, OFFER_CATEGORIES } from '../shared/offer-database.js';
import { calculateBestCardForDomain } from '../shared/calculator.js';

// Device Local Storage Keys
const STORAGE_KEY_CARDS = 'user_card_portfolio';
const STORAGE_KEY_FIRST_VISIT = 'user_has_visited_device';

let userCardIds = JSON.parse(localStorage.getItem(STORAGE_KEY_CARDS) || '[]');
let displayMode = 'simple'; // 'simple' | 'power'
let activeCategoryFilter = 'all';

function saveUserCards() {
  localStorage.setItem(STORAGE_KEY_CARDS, JSON.stringify(userCardIds));
  // Sync to chrome extension storage if available
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ userCardIds });
  }
}

// DOM Elements
const merchantInput = document.getElementById('merchant-input');
const amountInput = document.getElementById('amount-input');
const calculateBtn = document.getElementById('calculate-btn');
const quickPills = document.querySelectorAll('.merchant-pill');

const modeSimpleBtn = document.getElementById('mode-simple-btn');
const modePowerBtn = document.getElementById('mode-power-btn');
const editWalletBtn = document.getElementById('edit-wallet-btn');

const spotlightCardContainer = document.getElementById('spotlight-card-container');
const spotlightYield = document.getElementById('spotlight-yield');
const spotlightYieldLabel = document.getElementById('spotlight-yield-label');
const spotlightDetails = document.getElementById('spotlight-details');
const spotlightActionContainer = document.getElementById('spotlight-action-container');

const rankingsContainer = document.getElementById('rankings-container');
const matchingOffersCount = document.getElementById('matching-offers-count');

const portfolioGrid = document.getElementById('portfolio-grid');
const offersFeedContainer = document.getElementById('offers-feed-container');
const dealsCategoryPills = document.getElementById('deals-category-pills');

const onboardingModal = document.getElementById('onboarding-modal');
const welcomeLetsGoBtn = document.getElementById('welcome-lets-go-btn');
const stepWelcome = document.getElementById('onboarding-step-welcome');
const stepBanks = document.getElementById('onboarding-step-banks');
const stepCards = document.getElementById('onboarding-step-cards');
const wizardBanksGrid = document.getElementById('wizard-banks-grid');
const wizardCardsGrid = document.getElementById('wizard-cards-grid');

// Tab Navigation Listener
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    
    tab.classList.add('active');
    const targetId = tab.dataset.tab;
    const targetEl = document.getElementById(targetId);
    if (targetEl) targetEl.style.display = 'block';
  });
});

// Mode Switcher Listener
modeSimpleBtn.addEventListener('click', () => {
  modeSimpleBtn.classList.add('active');
  modePowerBtn.classList.remove('active');
  displayMode = 'simple';
  runRecommendation();
});

modePowerBtn.addEventListener('click', () => {
  modePowerBtn.classList.add('active');
  modeSimpleBtn.classList.remove('active');
  displayMode = 'power';
  runRecommendation();
});

// Calculate & Render Recommendation
function runRecommendation() {
  const domain = merchantInput.value.trim() || 'nike.com';
  const amount = parseFloat(amountInput.value) || 100;

  const result = calculateBestCardForDomain({ domain, amount, userCardIds });

  // Render Top Recommendation Spotlight
  const top = result.topRecommendation;
  if (top) {
    spotlightCardContainer.innerHTML = `
      <div class="card-visual" style="background: ${top.card.gradient}">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="card-issuer">${top.card.issuer}</span>
          <div class="card-chip"></div>
        </div>
        <div class="card-title">${top.card.name}</div>
        <div class="card-network">${top.card.network}</div>
      </div>
    `;

    if (displayMode === 'simple') {
      spotlightYieldLabel.textContent = 'Estimated Net Cash Return';
      spotlightYield.textContent = `+$${top.totalUSDYield.toFixed(2)}`;
      let subText = `Rate: <strong>${top.multiplier}x points</strong> (${top.effectiveRewardRatePercent.toFixed(1)}% total return)`;
      if (top.activeOffer) {
        subText += `<br><span style="color: var(--accent-emerald); font-weight: 700;">🔥 ${top.offerExplanation}</span>`;
      }
      spotlightDetails.innerHTML = subText;
    } else {
      spotlightYieldLabel.textContent = 'Points Earned & Net Value Yield';
      spotlightYield.textContent = `${Math.round(top.basePointsEarned)} pts ($${top.totalUSDYield.toFixed(2)})`;
      let subText = `Base Multiplier: <strong>${top.multiplier}x</strong> • Point Val: $${(top.card.rewardType === 'CASH_BACK' ? 0.01 : 0.015).toFixed(3)}/pt`;
      if (top.activeOffer) {
        subText += `<br><span style="color: var(--accent-emerald); font-weight: 700;">🔥 ${top.offerExplanation}</span>`;
      }
      spotlightDetails.innerHTML = subText;
    }

    if (top.activeOffer && top.activeOffer.activationUrl) {
      spotlightActionContainer.innerHTML = `
        <a href="${top.activeOffer.activationUrl}" target="_blank" rel="noopener" class="activate-btn">
          Activate ${top.activeOffer.program} Offer 🔗
        </a>
      `;
    } else {
      spotlightActionContainer.innerHTML = '';
    }
  }

  matchingOffersCount.textContent = `${result.availableTargetedOffersCount} Targeted Offer${result.availableTargetedOffersCount !== 1 ? 's' : ''} Available`;

  rankingsContainer.innerHTML = result.rankings.map((item, index) => {
    let yieldStr = `+$${item.totalUSDYield.toFixed(2)}`;
    let subStr = `${item.multiplier}x points • Base: $${item.baseDollarsYield.toFixed(2)}`;

    if (displayMode === 'power') {
      yieldStr = `${Math.round(item.basePointsEarned)} pts ($${item.totalUSDYield.toFixed(2)})`;
      subStr = `${item.multiplier}x multiplier • ${item.card.rewardType}`;
    }

    return `
      <div class="ranking-item rank-${index + 1}">
        <div class="rank-number">#${index + 1}</div>
        <div class="card-info">
          <div class="card-name-text">${item.card.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${subStr}</div>
          ${item.activeOffer ? `
            <div class="offer-tag">
              🔥 ${item.offerExplanation}
              ${item.activeOffer.activationUrl ? `<a href="${item.activeOffer.activationUrl}" target="_blank" style="color:var(--accent-emerald); margin-left:6px; font-weight:700;">[Activate 🔗]</a>` : ''}
            </div>
          ` : ''}
        </div>
        <div class="yield-badge">
          <div class="yield-val">${yieldStr}</div>
          <div class="yield-pct">${item.effectiveRewardRatePercent.toFixed(1)}% return</div>
        </div>
      </div>
    `;
  }).join('');

  const iframe = document.getElementById('live-widget-iframe');
  if (iframe) {
    iframe.src = `widget.html?domain=${encodeURIComponent(domain)}&amount=${amount}`;
  }
}

calculateBtn.addEventListener('click', runRecommendation);

quickPills.forEach(pill => {
  pill.addEventListener('click', () => {
    quickPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    merchantInput.value = pill.dataset.domain;
    runRecommendation();
  });
});

// Render Portfolio Manager Grid
function renderPortfolio() {
  portfolioGrid.innerHTML = CARD_DATABASE.map(card => {
    const isSelected = userCardIds.includes(card.id);
    return `
      <div class="card-selector-item ${isSelected ? 'selected' : ''}" data-id="${card.id}">
        <div class="check-icon">✓</div>
        <div class="card-visual" style="background: ${card.gradient}; height: 130px; padding: 14px; aspect-ratio: auto;">
          <div style="display: flex; justify-content: space-between;">
            <span class="card-issuer">${card.issuer}</span>
            <div class="card-chip" style="width: 28px; height: 20px;"></div>
          </div>
          <div class="card-title" style="font-size: 0.95rem;">${card.name}</div>
          <div class="card-network" style="font-size: 0.85rem;">${card.network}</div>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">
          Multipliers: ${Object.entries(card.baseMultipliers).slice(0, 3).map(([k, v]) => `${k}:${v}x`).join(', ')}
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('#portfolio-grid .card-selector-item').forEach(item => {
    item.addEventListener('click', () => {
      const cardId = item.dataset.id;
      if (userCardIds.includes(cardId)) {
        userCardIds = userCardIds.filter(id => id !== cardId);
      } else {
        userCardIds.push(cardId);
      }
      saveUserCards();
      renderPortfolio();
      runRecommendation();
    });
  });
}

document.getElementById('select-all-cards').addEventListener('click', () => {
  userCardIds = CARD_DATABASE.map(c => c.id);
  saveUserCards();
  renderPortfolio();
  runRecommendation();
});

document.getElementById('clear-all-cards').addEventListener('click', () => {
  userCardIds = [];
  saveUserCards();
  renderPortfolio();
  runRecommendation();
});

// Render Categorized Active Deals Feed
function renderDealsFeed() {
  // Render Category Pills
  dealsCategoryPills.innerHTML = OFFER_CATEGORIES.map(cat => `
    <button class="merchant-pill ${activeCategoryFilter === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  dealsCategoryPills.querySelectorAll('.merchant-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      activeCategoryFilter = pill.dataset.cat;
      renderDealsFeed();
    });
  });

  const filteredDeals = activeCategoryFilter === 'all'
    ? TARGETED_OFFERS
    : TARGETED_OFFERS.filter(o => o.category === activeCategoryFilter);

  offersFeedContainer.innerHTML = filteredDeals.length > 0 ? filteredDeals.map(offer => {
    const card = getCardById(offer.cardId);
    return `
      <div class="ranking-item">
        <div style="width: 44px; height: 44px; border-radius: 12px; background: ${card ? card.gradient : '#334155'}; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
          🛍️
        </div>
        <div class="card-info">
          <div class="card-name-text">${offer.merchantName} (${offer.domain})</div>
          <div style="font-size: 0.85rem; color: var(--primary-gold); font-weight: 700;">
            ${offer.program} • ${card ? card.name : offer.issuer}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
            ${offer.description}
          </div>
          ${offer.expiryStatus ? `
            <div style="display:inline-block; font-size:0.75rem; background:rgba(244,63,94,0.15); color:var(--accent-rose); padding:2px 8px; border-radius:100px; font-weight:700; margin-top:4px;">
              ⏱️ ${offer.expiryStatus}
            </div>
          ` : ''}
        </div>
        <div class="yield-badge">
          ${offer.activationUrl ? `
            <a href="${offer.activationUrl}" target="_blank" rel="noopener" class="activate-btn">Activate Deal 🔗</a>
          ` : `<div class="yield-val" style="color: var(--primary-gold); font-size: 0.85rem;">Expires ${offer.expires}</div>`}
        </div>
      </div>
    `;
  }).join('') : `<div style="text-align:center; color:var(--text-muted); padding:24px;">No active deals matching this category right now.</div>`;
}

// 2-Step Onboarding Wizard Logic
let selectedIssuers = [];
let selectedCards = [];

function openOnboardingWizard(startAtStep = 'welcome') {
  onboardingModal.style.display = 'flex';
  stepWelcome.style.display = startAtStep === 'welcome' ? 'block' : 'none';
  stepBanks.style.display = startAtStep === 'banks' ? 'block' : 'none';
  stepCards.style.display = 'none';
  
  if (startAtStep === 'banks') renderBanksStep();
}

welcomeLetsGoBtn.addEventListener('click', () => {
  stepWelcome.style.display = 'none';
  stepBanks.style.display = 'block';
  renderBanksStep();
});

editWalletBtn.addEventListener('click', () => {
  openOnboardingWizard('banks');
});

function renderBanksStep() {
  selectedIssuers = [...new Set(CARD_DATABASE.map(c => c.issuer))]; // Default select all

  wizardBanksGrid.innerHTML = ISSUERS.map(issuer => {
    const isSel = selectedIssuers.includes(issuer);
    return `
      <div class="merchant-pill ${isSel ? 'active' : ''}" data-issuer="${issuer}" style="padding: 10px 16px; font-weight:700;">
        ${isSel ? '✓ ' : ''}${issuer}
      </div>
    `;
  }).join('');

  wizardBanksGrid.querySelectorAll('.merchant-pill').forEach(el => {
    el.addEventListener('click', () => {
      const issuer = el.dataset.issuer;
      if (selectedIssuers.includes(issuer)) {
        selectedIssuers = selectedIssuers.filter(i => i !== issuer);
      } else {
        selectedIssuers.push(issuer);
      }
      renderBanksStep();
    });
  });
}

document.getElementById('wizard-next-cards-btn').addEventListener('click', () => {
  stepBanks.style.display = 'none';
  stepCards.style.display = 'block';
  renderCardsStep();
});

document.getElementById('wizard-back-banks-btn').addEventListener('click', () => {
  stepCards.style.display = 'none';
  stepBanks.style.display = 'block';
});

function renderCardsStep() {
  const eligibleCards = CARD_DATABASE.filter(c => selectedIssuers.includes(c.issuer));
  selectedCards = userCardIds.length > 0 ? [...userCardIds] : eligibleCards.map(c => c.id);

  wizardCardsGrid.innerHTML = eligibleCards.map(c => {
    const isSel = selectedCards.includes(c.id);
    return `
      <div class="merchant-pill ${isSel ? 'active' : ''}" data-cid="${c.id}" style="padding: 8px 12px; font-size: 0.8rem; font-weight:600;">
        ${isSel ? '✓ ' : ''}${c.name} (${c.type})
      </div>
    `;
  }).join('');

  wizardCardsGrid.querySelectorAll('.merchant-pill').forEach(el => {
    el.addEventListener('click', () => {
      const cid = el.dataset.cid;
      if (selectedCards.includes(cid)) {
        selectedCards = selectedCards.filter(id => id !== cid);
      } else {
        selectedCards.push(cid);
      }
      renderCardsStep();
    });
  });
}

document.getElementById('wizard-save-btn').addEventListener('click', () => {
  userCardIds = selectedCards;
  saveUserCards();
  localStorage.setItem(STORAGE_KEY_FIRST_VISIT, 'true');
  onboardingModal.style.display = 'none';
  renderPortfolio();
  runRecommendation();
});

document.getElementById('wizard-skip-btn').addEventListener('click', () => {
  if (userCardIds.length === 0) userCardIds = CARD_DATABASE.map(c => c.id);
  saveUserCards();
  localStorage.setItem(STORAGE_KEY_FIRST_VISIT, 'true');
  onboardingModal.style.display = 'none';
  renderPortfolio();
  runRecommendation();
});

// Copy Embed Code
document.getElementById('copy-code-btn')?.addEventListener('click', () => {
  const code = document.getElementById('embed-code-snippet').innerText;
  navigator.clipboard.writeText(code);
  const btn = document.getElementById('copy-code-btn');
  btn.textContent = 'Copied!';
  setTimeout(() => btn.textContent = 'Copy HTML', 2000);
});

// Initial Setup
const hasVisitedDevice = localStorage.getItem(STORAGE_KEY_FIRST_VISIT);
if (!hasVisitedDevice) {
  openOnboardingWizard('welcome');
} else {
  if (userCardIds.length === 0) userCardIds = CARD_DATABASE.map(c => c.id);
}

renderPortfolio();
renderDealsFeed();
runRecommendation();
