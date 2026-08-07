# US Credit & Debit Card Offer Recommender

A privacy-first, high-aesthetic **US Credit & Debit Card Offer Recommender** available as an embeddable web widget, standalone web app, and Manifest V3 cross-browser extension (Chrome, Edge, Firefox, Safari).

Automatically calculates maximum financial yield per e-commerce transaction across user-owned credit/debit cards by combining **MCC Base Category Multipliers** (e.g. 4x Dining/Grocery, 3x Travel) and **Targeted Merchant Offers** (Amex Offers, Chase Offers, BankAmeriDeals, Citi Merchant Offers).

---

## 🌟 Key Features

1. **Universal Web App & Embeddable Widget (`web-widget/`)**:
   - Access from any browser on desktop or mobile.
   - Interactive card portfolio builder to select cards you own.
   - Embeddable `<iframe>` widget with `postMessage` cross-domain API.
   - Active deals feed & instant yield breakdown.

2. **Cross-Browser Extension (Manifest V3)**:
   - **Active Domain Detection**: Automatically surfaces top cards for current shopping site (`nike.com`, `dell.com`, `starbucks.com`, `amazon.com`, `marriott.com`, etc.).
   - **Badge Indicators**: Extension badge highlights when targeted discounts or bonus multipliers are active.
   - **Checkout Floating Overlay**: Unobtrusive Shadow DOM badge on e-commerce sites alerting you to available savings.
   - **Popup & Side Panel UI**: Quick action popup and deep-dive side panel for transaction simulations.

3. **Privacy & Security First**:
   - No storage or collection of card numbers, CVVs, or bank credentials.
   - Operates strictly on user-selected card product names (e.g., *Chase Sapphire Reserve*, *Amex Gold*).

---

## 📁 Repository Structure

```
.
├── manifest.json              # Extension Manifest V3
├── icons/                     # Real PNG extension icons (16x16, 48x48, 128x128)
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
├── SKILL.md                   # AGY Skill & Workflow reference
└── README.md                  # Project documentation
```

---

## 🚀 How to Run Locally

### 1. Web Application & Embeddable Widget
Open [`web-widget/index.html`](file:///Users/arbazalikhan/Documents/Offer%20Recommender/web-widget/index.html) in any browser (or start a local web server like `npx http-server .` or VS Code Live Server).

### 2. Browser Extension (Chrome / Edge / Brave)
1. Open your browser and navigate to `chrome://extensions`.
2. Enable **Developer mode** in the top-right corner.
3. Click **Load unpacked** and select this project directory (`/Users/arbazalikhan/Documents/Offer Recommender`).
4. Navigate to `nike.com`, `dell.com`, `starbucks.com`, or `amazon.com` to see real-time card recommendations and badge alerts!

---

## 📤 Pushing to GitHub

To push this codebase to a new GitHub repository:

```bash
# 1. Initialize Git repository locally
git init

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "feat: initial release of US credit & debit card offer recommender web app & extension"

# 4. Link your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. Set main branch and push
git branch -M main
git push -u origin main
```
