---
name: card-offer-recommender
description: Comprehensive development guide, architecture standards, and workflows for building CardSpectra - US Credit & Debit Card Offer Recommender cross-browser extension and universal web widget.
---

# CardSpectra - US Credit & Debit Card Offer Recommender

A unified development reference and operational workflow for building **CardSpectra** (US Credit & Debit Card Offer Recommender). This system consists of an embeddable multi-browser web widget and a Cross-Browser Extension (Chrome, Firefox, Edge, Safari) that automatically matches and recommends optimal payment cards, merchant-specific targeted offers, and rotating rewards at e-commerce checkout.

---

## 1. Project Overview & Core Requirements

### Primary Objectives
1. **Universal Web Widget**: A lightweight, responsive web app & embeddable iframe widget accessible from any modern browser (desktop and mobile) allowing users to search merchant offers, view card reward multipliers, and manage their card portfolio.
2. **Cross-Browser Extension (Manifest V3)**: Unobtrusive browser extension for Chrome, Firefox, Edge, and Safari that detects the active merchant, calculates maximum cash back / point yield across user-owned cards, and alerts users to activated targeted offers (e.g., Amex Offers, Chase Offers, BankAmeriDeals, Citi Merchant Offers, Capital One Shopping/Offers).
3. **Privacy-First Architecture**: No storage or transmission of sensitive financial data (PANs, CVVs, credentials). Operations rely strictly on user-selected card product names (e.g., *Chase Sapphire Reserve*, *Amex Gold Card*, *Capital One SavorOne*).
