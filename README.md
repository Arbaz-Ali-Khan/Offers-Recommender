# CardSpectra - US Credit & Debit Card Offer Recommender

A privacy-first, high-aesthetic **US Credit & Debit Card Offer Recommender** available as an embeddable web widget, standalone web app, and Manifest V3 cross-browser extension (Chrome, Edge, Firefox, Safari).

Automatically calculates maximum financial yield per e-commerce transaction across user-owned credit/debit cards by combining **MCC Base Category Multipliers** (e.g. 4x Dining/Grocery, 3x Travel) and **Targeted Merchant Offers** (Amex Offers, Chase Offers, BankAmeriDeals, Citi Merchant Offers).

---

## 🌟 Key Features

1. **CardSpectra Web App & Embeddable Widget (`web-widget/`)**:
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

## 🌐 Live Output & Deployment URLs

- 🔗 **Public Web App & Widget**: [https://arbazalikhan450.github.io/Offers-Recommender/](https://arbazalikhan450.github.io/Offers-Recommender/)
- 🔗 **Direct Recommender Page**: [https://arbazalikhan450.github.io/Offers-Recommender/web-widget/index.html](https://arbazalikhan450.github.io/Offers-Recommender/web-widget/index.html)
- 💻 **Local Development Server**: [http://localhost:8080/web-widget/index.html](http://localhost:8080/web-widget/index.html)
