---
name: card-offer-recommender
description: Comprehensive development guide, architecture standards, and workflows for building CardSpectra - US Credit & Debit Card Offer Recommender cross-browser extension and universal web widget.
---

# CardSpectra - US Credit & Debit Card Offer Recommender

A unified development reference and operational workflow for building **CardSpectra** (US Credit & Debit Card Offer Recommender). This system consists of an embeddable multi-browser web widget and a Manifest V3 Cross-Browser Extension (Chrome, Firefox, Edge, Safari) inspired by Capital One Shopping, designed to automatically match and recommend optimal payment cards, merchant-specific targeted offers, and category reward multipliers at e-commerce checkout.

---

## 1. Core Architecture & Design System

### A. Capital One Shopping-Style Experience
- **Hero Savings Engine**: Direct domain search, automatic domain detection on active browser tabs, and instant yield calculation.
- **Trending Merchant Deals Grid**: Visual tiles displaying merchant logos, cash back return rates (e.g., `Up to 10% back`, `$100 statement credit`), and 1-click bank offer activation links.
- **Device-Local Memory**: All user card selections are persisted in `localStorage` & `chrome.storage.local`. Zero remote server required for portfolio management.
- **2-Step Visual Onboarding**:
  - **Step 1**: Bank Selection with brand logos (*Amex 🦁, Chase 🔷, Capital One ⚡, Citi 🌐, Discover 🟧, BofA 🏛️, Wells Fargo 🐎, US Bank 🛡️, Apple 🍎, Bilt 🏢, Robinhood 🪶, Fidelity 🌲, Fintech Debits 📱*).
  - **Step 2**: Realistic Credit & Debit Card artwork selection.

---

## 2. Supported US Offer & Card Ecosystem (34+ Cards)

### Card Catalog (`shared/card-database.js`)
- **American Express**: Amex Gold, Amex Platinum, Blue Cash Preferred, Blue Cash Everyday, Amex Rewards Debit.
- **Chase**: Sapphire Reserve, Sapphire Preferred, Freedom Flex, Freedom Unlimited, Prime Visa (Amazon), Chase Total Checking Debit.
- **Capital One**: Venture X, SavorOne, Quicksilver, Capital One 360 Checking Debit.
- **Citi**: Double Cash, Custom Cash, Citi Banking Debit.
- **Discover**: Discover it Cash Back, Discover Cashback Debit.
- **Bank of America**: Customized Cash Rewards, BofA Visa Debit.
- **Wells Fargo**: Autograph, Active Cash, Wells Fargo Everyday Debit.
- **US Bank**: Cash+ Visa Signature.
- **Apple & Goldman Sachs**: Apple Card.
- **Bilt Rewards**: Bilt Mastercard.
- **Robinhood**: Robinhood Gold Card (3% flat cash back).
- **Fidelity**: Fidelity Rewards Visa Signature.
- **Fintech & Debits**: Chime Visa Debit, SoFi Money Debit, Cash App Card, Venmo Debit Card.

---

## 3. Targeted Offers & Domain Matching (`shared/offer-database.js`)

### Categorized Deals
- 🛒 **Grocery**: Instacart, Whole Foods, Kroger, Trader Joe's.
- 🎮 **Toys & Games**: LEGO Shop, GameStop, Steam, PlayStation.
- ⚡ **Electronics**: Dell Technologies, Best Buy, Apple Store, B&H Photo.
- 🍽️ **Dining**: Starbucks, DoorDash, Uber Eats, Chipotle.
- ✈️ **Travel**: Marriott Bonvoy, United Airlines, Delta, Airbnb.
- ⛽ **Gas & Transit**: Shell Gas, Chevron, BP, Uber.
- 👗 **Apparel**: Nike, Nordstrom, lululemon, Zara.
- 🏡 **Home & Garden**: The Home Depot, Lowe's, IKEA.

---

## 4. Yield Calculation Formula (`shared/calculator.js`)

$$\text{Net Return USD} = (\text{Spend Amount} \times \text{Multiplier Rate} \times \text{Point Valuation}) + \text{Targeted Offer Discount}$$

Where point valuations default to:
- **Amex MR / Chase UR / Bilt**: $0.015 / pt (1.5 cents)
- **Capital One / Citi TY**: $0.0125 / pt (1.25 cents)
- **Cash Back / Discover**: $0.01 / pt (1.0 cent)

---

## 5. Development Maintenance Rules

> [!IMPORTANT]
> **Mandatory Update Rule**: Whenever modifying card database schemas, offer activation links, extension manifest MV3 parameters, or widget iframe communication APIs, you MUST update this `SKILL.md` file and keep `PROMPT_README.md` synchronized.
