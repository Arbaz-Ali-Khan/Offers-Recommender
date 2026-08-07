import { calculateBestCardForDomain } from '../shared/calculator.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Query active tab URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url || !tab.url.startsWith('http')) {
    document.getElementById('popup-domain').textContent = 'No Active Store';
    return;
  }

  const url = new URL(tab.url);
  const domain = url.hostname.replace(/^www\./, '');
  document.getElementById('popup-domain').textContent = domain;

  // Retrieve user cards
  const { userCardIds = [] } = await chrome.storage.local.get('userCardIds');
  const result = calculateBestCardForDomain({ domain, amount: 100, userCardIds });

  const top = result.topRecommendation;
  if (top) {
    document.getElementById('popup-card-visual').style.background = top.card.gradient;
    document.getElementById('popup-card-visual').innerHTML = `
      <div style="display:flex; justify-between; align-items:center;">
        <span style="font-size: 0.6rem; font-weight:700; text-transform:uppercase;">${top.card.issuer}</span>
        <div style="width:20px; height:14px; background:gold; border-radius:3px;"></div>
      </div>
      <div style="font-weight:700; font-size:0.85rem;">${top.card.name}</div>
      <div style="font-weight:800; font-size:0.75rem; align-self:flex-end;">${top.card.network}</div>
    `;

    document.getElementById('popup-yield').textContent = `+$${top.totalUSDYield.toFixed(2)}`;
    
    let sub = `Multiplier: ${top.multiplier}x points`;
    if (top.activeOffer) {
      sub += `<br><span style="color: var(--accent-emerald); font-weight:600;">🔥 ${top.offerExplanation}</span>`;
    }
    document.getElementById('popup-details').innerHTML = sub;
  }

  // Render runners
  const runners = result.rankings.slice(1, 4);
  document.getElementById('popup-rankings').innerHTML = runners.map(item => `
    <div class="ranking-item">
      <div>
        <div style="font-weight:600;">${item.card.name}</div>
        <div style="font-size:0.7rem; color: var(--text-muted);">${item.multiplier}x points</div>
      </div>
      <div style="font-weight:700; color: var(--accent-emerald);">+$${item.totalUSDYield.toFixed(2)}</div>
    </div>
  `).join('');

  document.getElementById('open-sidepanel-btn').addEventListener('click', async () => {
    await chrome.sidePanel.open({ windowId: tab.windowId });
    window.close();
  });
});
