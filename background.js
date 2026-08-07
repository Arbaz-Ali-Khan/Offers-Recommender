import { calculateBestCardForDomain } from './shared/calculator.js';
import { CARD_DATABASE } from './shared/card-database.js';

// Side panel behavior setup
chrome.sidePanel
  ?.setPanelBehavior({ openPanelOnActionClick: false })
  .catch(() => {});

// Listen for tab URL updates to compute active domain recommendations and set action badge
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete' || !tab.url || !tab.url.startsWith('http')) return;

  try {
    const url = new URL(tab.url);
    const domain = url.hostname.replace(/^www\./, '');

    const { userCardIds = [] } = await chrome.storage.local.get('userCardIds');
    const effectiveCards = userCardIds.length > 0 ? userCardIds : CARD_DATABASE.map(c => c.id);

    const result = calculateBestCardForDomain({ domain, amount: 100, userCardIds: effectiveCards });

    if (result.topRecommendation) {
      const top = result.topRecommendation;
      if (top.activeOffer) {
        // High priority deal available!
        await chrome.action.setBadgeText({ tabId, text: 'DEAL' });
        await chrome.action.setBadgeBackgroundColor({ tabId, color: '#D4AF37' });
      } else if (top.multiplier > 1) {
        await chrome.action.setBadgeText({ tabId, text: `${top.multiplier}x` });
        await chrome.action.setBadgeBackgroundColor({ tabId, color: '#0F52BA' });
      } else {
        await chrome.action.setBadgeText({ tabId, text: '' });
      }
    }
  } catch (err) {
    console.error('Error calculating domain recommendation:', err);
  }
});

// Handle incoming messages from popup, side panel, and content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    try {
      if (message.type === 'GET_RECOMMENDATION') {
        const { domain, amount = 100 } = message;
        const { userCardIds = [] } = await chrome.storage.local.get('userCardIds');
        const result = calculateBestCardForDomain({ domain, amount, userCardIds });
        sendResponse({ success: true, data: result });
      } else if (message.type === 'GET_USER_CARDS') {
        const { userCardIds = [] } = await chrome.storage.local.get('userCardIds');
        sendResponse({ success: true, userCardIds });
      } else if (message.type === 'SAVE_USER_CARDS') {
        await chrome.storage.local.set({ userCardIds: message.userCardIds });
        sendResponse({ success: true });
      } else if (message.type === 'OPEN_SIDEPANEL') {
        if (sender.tab?.windowId) {
          await chrome.sidePanel.open({ windowId: sender.tab.windowId });
          sendResponse({ success: true });
        }
      }
    } catch (error) {
      sendResponse({ success: false, error: error.message });
    }
  })();
  return true; // Keep channel open for async response
});
