import { calculateBestCardForDomain } from '../shared/calculator.js';

let activeDomain = 'nike.com';

document.addEventListener('DOMContentLoaded', async () => {
  // Query active tab URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab && tab.url && tab.url.startsWith('http')) {
    const url = new URL(tab.url);
    activeDomain = url.hostname.replace(/^www\./, '');
  }

  document.getElementById('sp-domain-tag').textContent = activeDomain;

  renderSidePanel();

  document.getElementById('sp-amount-input').addEventListener('input', renderSidePanel);
});

async function renderSidePanel() {
  const amount = parseFloat(document.getElementById('sp-amount-input').value) || 100;
  const { userCardIds = [] } = await chrome.storage.local.get('userCardIds');

  const result = calculateBestCardForDomain({ domain: activeDomain, amount, userCardIds });

  document.getElementById('sp-rankings-container').innerHTML = result.rankings.map((item, index) => `
    <div class="ranking-card ${index === 0 ? 'top-rank' : ''}">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        <div>
          <span style="font-size: 0.7rem; font-weight: 700; color: ${index === 0 ? 'var(--primary-gold)' : 'var(--text-muted)'};">#${index + 1} ${index === 0 ? 'TOP RECOMMENDATION' : ''}</span>
          <div style="font-weight: 700; font-size: 0.95rem;">${item.card.name}</div>
        </div>
        <div class="yield-text">+$${item.totalUSDYield.toFixed(2)}</div>
      </div>

      <div style="font-size: 0.8rem; color: var(--text-muted);">
        Multiplier: <strong>${item.multiplier}x</strong> • Base Yield: $${item.baseDollarsYield.toFixed(2)}
      </div>

      ${item.activeOffer ? `
        <div style="margin-top: 8px; font-size: 0.8rem; color: var(--accent-emerald); font-weight: 600; background: rgba(16, 185, 129, 0.1); padding: 6px 10px; border-radius: 6px;">
          🔥 ${item.offerExplanation}
        </div>
      ` : ''}
    </div>
  `).join('');
}
