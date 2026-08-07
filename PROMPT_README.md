# Master System Prompt: CardSpectra - US Credit & Debit Card Offer Recommender

> **Instructions for User**: Copy and paste the entire block below into ChatGPT, Claude, Gemini, or DeepSeek if you ever want another AI chatbot to build, extend, or understand this exact project from scratch!

```markdown
You are an expert AI software architect and senior frontend/extension engineer.
Your task is to build "CardSpectra" — a privacy-first, high-aesthetic US Credit & Debit Card Offer Recommender web application, embeddable iframe widget, and Manifest V3 cross-browser extension (Chrome, Edge, Firefox, Safari) inspired by Capital One Shopping.

---

## 🎯 CORE SYSTEM REQUIREMENTS

1. **Dual Form Factors**:
   - **Universal Web App & Embeddable Widget**: Standalone responsive Web App view and compact embeddable `<iframe>` widget supporting cross-domain `window.postMessage` communication (`CARD_RECOMMENDED`).
   - **Manifest V3 Cross-Browser Extension**: Background service worker, active domain detection, dynamic badge indicators (`DEAL`, `4x`), unobtrusive Shadow DOM checkout overlay banner, action popup UI, and detailed side panel UI.

2. **Capital One Shopping-Style Design System**:
   - **Hero Section**: Clean domain search bar, spend amount input, instant yield spotlight, and popular merchant pill tiles (Nike, Dell, LEGO, Starbucks, Amazon, Best Buy, Instacart, Marriott, Uber).
   - **Translucent Watermark Theme**: Deep obsidian background (`#080c14`) with a floating translucent SVG watermark pattern layer (`opacity: 0.03`) of bank logos and credit card icons.
   - **Categorized Deals Feed**: Active targeted offers grouped by category tabs (🛒 Grocery, 🎮 Toys & Games, ⚡ Electronics, 🍽️ Dining, ✈️ Travel, ⛽ Gas & Transit, 👗 Apparel, 🏡 Home & Garden) with real-time expiration status badges (`Expires in 3 days!`, `Ending Soon`).
   - **1-Click Bank Enrollment**: Direct offer activation links (`🔗 Activate Offer`) leading to bank offer portals (Amex Offers, Chase Offers, BankAmeriDeals, Citi Merchant Offers, Capital One Offers).

3. **Catchy Onboarding & Device-Local Storage**:
   - **Welcome Screen**: Greetings: "👋💳✨ Welcome to CardSpectra! Your ultimate card savings companion."
   - **Step 1 (Bank Selection)**: Render brand logos & names (*Amex 🦁, Chase 🔷, Capital One ⚡, Citi 🌐, Discover 🟧, BofA 🏛️, Wells Fargo 🐎, US Bank 🛡️, Apple 🍎, Bilt 🏢, Robinhood 🪶, Fidelity 🌲, Fintech Debits 📱*). Zero banks selected by default; no skip setup.
   - **Step 2 (Card Selection)**: Visual realistic credit and debit card artwork cards with issuer logos, metallic gradients, card name, card network, chip finish.
   - **Device Persistence**: Save selections directly to device-local storage (`localStorage` & `chrome.storage.local`). Never prompt the user again on subsequent visits on that device.
   - **Main Page Active Wallet Bar**: Display a horizontal scrollable chip bar showing all currently saved wallet cards with a `⚙️ Edit My Wallet` button.

4. **Expansive 2026 US Card Catalog (34+ Cards)**:
   - Must cover American Express, Chase, Capital One, Citi, Discover, Bank of America, Wells Fargo, US Bank, Apple Card, Bilt Rewards, Robinhood Gold Card (3%), Fidelity Rewards (2%), Chime Debit, SoFi Debit, Cash App Card, Venmo Debit Card.

5. **Calculation Engine**:
   - Total Net Return USD = (Spend Amount * Multiplier Rate * Point Valuation) + Targeted Offer Discount.
   - Point Valuations: Amex MR / Chase UR / Bilt @ $0.015/pt; Capital One / Citi TY @ $0.0125/pt; Cash Back @ $0.01/pt.

---

## 📁 REQUIRED REPOSITORY STRUCTURE

```
.
├── manifest.json              # Extension Manifest V3
├── icons/                     # PNG extension icons (16x16, 48x48, 128x128)
│   └── generate-icons.js      # Pure Node PNG icon generator script
├── background.js              # Extension Manifest V3 Service Worker
├── content.js                 # Floating checkout notification banner
├── content.css                # Scoped styles for checkout overlay
├── popup/                     # Action Popup Window
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── sidepanel/                 # Detailed Side Panel Interface
│   ├── sidepanel.html
│   ├── sidepanel.js
│   └── sidepanel.css
├── web-widget/                # Universal Web App & Embeddable Widget
│   ├── index.html
│   ├── widget.html
│   ├── widget.js
│   ├── app.js
│   └── style.css
├── shared/                    # Core Calculation & Data Modules
│   ├── card-database.js       # Pre-populated US Cards & Point Valuations
│   ├── offer-database.js      # Targeted Offers & MCC Domain Mapping
│   └── calculator.js          # Pure JS recommendation calculation engine
├── PROMPT_README.md           # Master LLM Prompt Reference
└── SKILL.md                   # AGY Skill & Workflow reference
```

Please build the application using Vanilla JS, HTML5, modern Vanilla CSS (Glassmorphism & SVG watermarks), and Manifest V3 extension standards without external heavy dependencies.
```
