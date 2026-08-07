import { calculateBestCardForDomain } from '../shared/calculator.js';

// Parse query params (domain & amount)
const urlParams = new URLSearchParams(window.location.search);
const domain = urlParams.get('domain') || 'nike.com';
const amount = parseFloat(urlParams.get('amount')) || 100;

document.getElementById('widget-domain').textContent = domain;

// Run calculation
const result = calculateBestCardForDomain({ domain, amount });

// Spotlight Top Card
const top = result.topRecommendation;
if (top) {
  document.getElementById('w-card-container').innerHTML = `
    <div class="card-visual" style="background: ${top.card.gradient}; padding: 12px; aspect-ratio: 2.2;">
      <div style="display: flex; justify-content: space-between;">
        <span class="card-issuer" style="font-size: 0.65rem;">${top.card.issuer}</span>
        <div class="card-chip" style="width: 24px; height: 16px;"></div>
      </div>
      <div class="card-title" style="font-size: 0.9rem;">${top.card.name}</div>
      <div class="card-network" style="font-size: 0.75rem;">${top.card.network}</div>
    </div>
  `;

  document.getElementById('w-yield').textContent = `+$${top.totalUSDYield.toFixed(2)}`;
  
  let details = `Multiplier: ${top.multiplier}x points (${top.effectiveRewardRatePercent.toFixed(1)}% back)`;
  if (top.activeOffer) {
    details += `<br><span style="color: var(--accent-emerald);">🔥 ${top.offerExplanation}</span>`;
  }
  document.getElementById('w-details').innerHTML = details;

  // Send message to parent host page via postMessage API
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({
      type: 'CARD_RECOMMENDED',
      domain: domain,
      topCardName: top.card.name,
      yieldUSD: top.totalUSDYield,
      hasOffer: !!top.activeOffer
    }, '*');
  }
}

// Render Top 3 Runner Ups
const runners = result.rankings.slice(1, 4);
document.getElementById('w-rankings').innerHTML = runners.map(item => `
  <div class="ranking-item" style="padding: 10px 12px;">
    <div class="card-info" style="margin: 0;">
      <div class="card-name-text" style="font-size: 0.85rem;">${item.card.name}</div>
      <div style="font-size: 0.75rem; color: var(--text-muted);">${item.multiplier}x points</div>
    </div>
    <div class="yield-badge">
      <div class="yield-val" style="font-size: 0.9rem;">+$${item.totalUSDYield.toFixed(2)}</div>
    </div>
  </div>
`).join('');
