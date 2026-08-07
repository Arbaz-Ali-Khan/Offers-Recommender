// US Credit & Debit Card Offer Recommender - Content Script Overlay

(async function () {
  const currentDomain = window.location.hostname.replace(/^www\./, '');
  if (!currentDomain) return;

  // Ask background service worker for domain recommendation
  chrome.runtime.sendMessage(
    { type: 'GET_RECOMMENDATION', domain: currentDomain, amount: 100 },
    (response) => {
      if (!response || !response.success || !response.data) return;

      const result = response.data;
      const top = result.topRecommendation;

      // Only show banner if there is a targeted offer or >1x reward multiplier
      if (!top || (!top.activeOffer && top.multiplier <= 1)) return;

      injectCheckoutOverlay(currentDomain, top, result.availableTargetedOffersCount);
    }
  );
})();

function injectCheckoutOverlay(domain, top, offerCount) {
  let hostEl = document.getElementById('offer-recommender-root');
  if (hostEl) hostEl.remove();

  hostEl = document.createElement('div');
  hostEl.id = 'offer-recommender-root';

  const shadow = hostEl.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = `
    .banner {
      background: rgba(10, 14, 23, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(212, 175, 55, 0.4);
      border-radius: 14px;
      padding: 14px 18px;
      color: #f8fafc;
      width: 320px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212, 175, 55, 0.15);
      animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 13px;
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand {
      font-weight: 700;
      font-size: 12px;
      color: #d4af37;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .close-btn {
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 16px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }
    .close-btn:hover { color: #fff; }
    .card-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 4px 0;
    }
    .card-badge {
      padding: 6px 10px;
      border-radius: 6px;
      background: ${top.card.gradient};
      color: #fff;
      font-weight: 700;
      font-size: 11px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }
    .card-name {
      font-weight: 600;
      color: #fff;
      line-height: 1.2;
    }
    .offer-text {
      color: #10b981;
      font-weight: 600;
      font-size: 12px;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 4px;
      font-size: 11px;
      color: #94a3b8;
    }
    .view-btn {
      background: linear-gradient(135deg, #d4af37, #b8860b);
      border: none;
      color: #000;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 100px;
      cursor: pointer;
      font-size: 11px;
    }
  `;

  const banner = document.createElement('div');
  banner.className = 'banner';
  banner.innerHTML = `
    <div class="header">
      <div class="brand">💳 CARD OFFER RECOMMENDER</div>
      <button class="close-btn" id="close-overlay">×</button>
    </div>
    
    <div class="card-row">
      <div class="card-badge">${top.card.issuer}</div>
      <div>
        <div class="card-name">${top.card.name}</div>
        <div style="font-size: 11px; color: #cbd5e1;">Rate: ${top.multiplier}x points</div>
      </div>
    </div>

    ${top.activeOffer ? `<div class="offer-text">🔥 ${top.offerExplanation}</div>` : ''}

    <div class="footer">
      <span>+$${top.totalUSDYield.toFixed(2)} est. return</span>
      <button class="view-btn" id="open-panel-btn">View Details</button>
    </div>
  `;

  shadow.appendChild(style);
  shadow.appendChild(banner);
  document.body.appendChild(hostEl);

  shadow.getElementById('close-overlay').addEventListener('click', () => {
    hostEl.remove();
  });

  shadow.getElementById('open-panel-btn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'OPEN_SIDEPANEL' });
  });
}
