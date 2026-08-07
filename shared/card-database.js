/**
 * Comprehensive US Credit & Debit Card Catalog (2026)
 * Includes major US issuers, credit cards, and debit cards.
 */

export const POINT_VALUATIONS = {
  AMEX_MR: 0.015,       // American Express Membership Rewards (1.5 cents/pt)
  CHASE_UR: 0.015,      // Chase Ultimate Rewards (1.5 cents/pt)
  CAPITAL_ONE: 0.0125,  // Capital One Miles (1.25 cents/pt)
  CITI_TY: 0.0125,      // Citi ThankYou Points (1.25 cents/pt)
  BILT: 0.015,          // Bilt Rewards (1.5 cents/pt)
  CASH_BACK: 0.01,      // Standard Cash Back (1.0 cent/pt or $)
  DISCOVER: 0.01        // Discover Cashback
};

export const ISSUERS = [
  'American Express',
  'Chase',
  'Capital One',
  'Citi',
  'Discover',
  'Bank of America',
  'Wells Fargo',
  'US Bank',
  'Apple',
  'Bilt Rewards',
  'Robinhood',
  'Fidelity',
  'Fintech & Debit (Chime, SoFi, Cash App, Venmo)'
];

export const CARD_DATABASE = [
  // --- AMERICAN EXPRESS ---
  {
    id: 'amex-gold',
    name: 'American Express® Gold Card',
    issuer: 'American Express',
    network: 'Amex',
    type: 'credit',
    rewardType: 'AMEX_MR',
    gradient: 'linear-gradient(135deg, #d4af37 0%, #fffdd0 50%, #aa7c11 100%)',
    baseMultipliers: { dining: 4, grocery: 4, flights: 3, other: 1 }
  },
  {
    id: 'amex-platinum',
    name: 'The Platinum Card® from American Express',
    issuer: 'American Express',
    network: 'Amex',
    type: 'credit',
    rewardType: 'AMEX_MR',
    gradient: 'linear-gradient(135deg, #e5e4e2 0%, #ffffff 50%, #708090 100%)',
    baseMultipliers: { flights: 5, hotels: 5, other: 1 }
  },
  {
    id: 'amex-blue-cash-pref',
    name: 'Blue Cash Preferred® Card from Amex',
    issuer: 'American Express',
    network: 'Amex',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #0052cc 0%, #172b4d 100%)',
    baseMultipliers: { grocery: 6, streaming: 6, transit: 3, gas: 3, other: 1 }
  },
  {
    id: 'amex-blue-cash-everyday',
    name: 'Blue Cash Everyday® Card from Amex',
    issuer: 'American Express',
    network: 'Amex',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #42a5f5 0%, #0d47a1 100%)',
    baseMultipliers: { grocery: 3, online_retail: 3, gas: 3, other: 1 }
  },
  {
    id: 'amex-rewards-debit',
    name: 'American Express® Rewards Debit Card',
    issuer: 'American Express',
    network: 'Amex',
    type: 'debit',
    rewardType: 'AMEX_MR',
    gradient: 'linear-gradient(135deg, #78909c 0%, #37474f 100%)',
    baseMultipliers: { other: 0.5 }
  },

  // --- CHASE ---
  {
    id: 'chase-sapphire-reserve',
    name: 'Chase Sapphire Reserve®',
    issuer: 'Chase',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CHASE_UR',
    gradient: 'linear-gradient(135deg, #0f52ba 0%, #002147 100%)',
    baseMultipliers: { travel: 3, dining: 3, other: 1 }
  },
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred® Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CHASE_UR',
    gradient: 'linear-gradient(135deg, #1e90ff 0%, #003366 100%)',
    baseMultipliers: { dining: 3, streaming: 3, online_grocery: 3, travel: 2, other: 1 }
  },
  {
    id: 'chase-freedom-flex',
    name: 'Chase Freedom Flex℠',
    issuer: 'Chase',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CHASE_UR',
    gradient: 'linear-gradient(135deg, #e53935 0%, #8e0000 100%)',
    baseMultipliers: { rotating: 5, drugstores: 3, dining: 3, travel_portal: 5, other: 1 }
  },
  {
    id: 'chase-freedom-unlimited',
    name: 'Chase Freedom Unlimited®',
    issuer: 'Chase',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CHASE_UR',
    gradient: 'linear-gradient(135deg, #2e7d32 0%, #005005 100%)',
    baseMultipliers: { travel_portal: 5, dining: 3, drugstores: 3, other: 1.5 }
  },
  {
    id: 'chase-prime-visa',
    name: 'Prime Visa (Amazon)',
    issuer: 'Chase',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #232f3e 0%, #ff9900 100%)',
    baseMultipliers: { online_retail: 5, dining: 2, gas: 2, other: 1 }
  },
  {
    id: 'chase-debit',
    name: 'Chase Total Checking® Visa Debit Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
    baseMultipliers: { other: 1 }
  },

  // --- CAPITAL ONE ---
  {
    id: 'capital-one-venture-x',
    name: 'Capital One Venture X Rewards Card',
    issuer: 'Capital One',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CAPITAL_ONE',
    gradient: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
    baseMultipliers: { hotels_rental_portal: 10, flights_portal: 5, other: 2 }
  },
  {
    id: 'capital-one-savor-one',
    name: 'Capital One SavorOne Cash Rewards',
    issuer: 'Capital One',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #ff6d00 0%, #b23c00 100%)',
    baseMultipliers: { dining: 3, entertainment: 3, streaming: 3, grocery: 3, toys: 3, other: 1 }
  },
  {
    id: 'capital-one-quicksilver',
    name: 'Capital One Quicksilver Cash Rewards',
    issuer: 'Capital One',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #90a4ae 0%, #37474f 100%)',
    baseMultipliers: { other: 1.5 }
  },
  {
    id: 'capital-one-360-debit',
    name: 'Capital One 360 Checking Debit Card',
    issuer: 'Capital One',
    network: 'Mastercard',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #0288d1 0%, #01579b 100%)',
    baseMultipliers: { other: 1 }
  },

  // --- CITI ---
  {
    id: 'citi-double-cash',
    name: 'Citi® Double Cash Card',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CITI_TY',
    gradient: 'linear-gradient(135deg, #002d72 0%, #0099ff 100%)',
    baseMultipliers: { other: 2 }
  },
  {
    id: 'citi-custom-cash',
    name: 'Citi Custom Cash® Card',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CITI_TY',
    gradient: 'linear-gradient(135deg, #00838f 0%, #005662 100%)',
    baseMultipliers: { top_category: 5, other: 1 }
  },
  {
    id: 'citi-debit',
    name: 'Citi® Banking Mastercard Debit Card',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)',
    baseMultipliers: { other: 1 }
  },

  // --- DISCOVER ---
  {
    id: 'discover-it-cashback',
    name: 'Discover it® Cash Back',
    issuer: 'Discover',
    network: 'Discover',
    type: 'credit',
    rewardType: 'DISCOVER',
    gradient: 'linear-gradient(135deg, #ff6f00 0%, #cfd8dc 100%)',
    baseMultipliers: { rotating: 5, toys: 5, electronics: 5, grocery: 5, other: 1 }
  },
  {
    id: 'discover-debit',
    name: 'Discover Cashback Debit Card',
    issuer: 'Discover',
    network: 'Discover',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #f57c00 0%, #e65100 100%)',
    baseMultipliers: { other: 1 }
  },

  // --- BANK OF AMERICA ---
  {
    id: 'bofa-customized-cash',
    name: 'Bank of America® Customized Cash Rewards',
    issuer: 'Bank of America',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #d32f2f 0%, #002244 100%)',
    baseMultipliers: { chosen_category: 3, online_retail: 3, electronics: 3, grocery: 2, wholesale: 2, other: 1 }
  },
  {
    id: 'bofa-debit',
    name: 'Bank of America® Visa Debit Card',
    issuer: 'Bank of America',
    network: 'Visa',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #c62828 0%, #8e0000 100%)',
    baseMultipliers: { other: 1 }
  },

  // --- WELLS FARGO ---
  {
    id: 'wells-fargo-autograph',
    name: 'Wells Fargo Autograph℠ Card',
    issuer: 'Wells Fargo',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #b71c1c 0%, #f57f17 100%)',
    baseMultipliers: { dining: 3, travel: 3, gas: 3, transit: 3, streaming: 3, phone_plans: 3, other: 1 }
  },
  {
    id: 'wells-fargo-active-cash',
    name: 'Wells Fargo Active Cash® Card',
    issuer: 'Wells Fargo',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #c2185b 0%, #880e4f 100%)',
    baseMultipliers: { other: 2 }
  },
  {
    id: 'wells-fargo-debit',
    name: 'Wells Fargo Everyday Visa Debit Card',
    issuer: 'Wells Fargo',
    network: 'Visa',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
    baseMultipliers: { other: 1 }
  },

  // --- SPECIALTY & OTHER MAJOR CARDS (2026) ---
  {
    id: 'apple-card',
    name: 'Apple Card (Goldman Sachs)',
    issuer: 'Apple',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #f5f5f7 0%, #e0e0e0 50%, #9e9e9e 100%)',
    baseMultipliers: { apple_pay: 2, online_retail: 3, electronics: 3, other: 1 }
  },
  {
    id: 'bilt-card',
    name: 'Bilt Mastercard® (Rent & Dining)',
    issuer: 'Bilt Rewards',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'BILT',
    gradient: 'linear-gradient(135deg, #212121 0%, #000000 100%)',
    baseMultipliers: { rent: 1, dining: 3, travel: 2, other: 1 }
  },
  {
    id: 'robinhood-gold-card',
    name: 'Robinhood Gold Credit Card',
    issuer: 'Robinhood',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #00c805 0%, #004d02 100%)',
    baseMultipliers: { other: 3 } // 3% flat cash back on everything
  },
  {
    id: 'fidelity-rewards',
    name: 'Fidelity® Rewards Visa Signature®',
    issuer: 'Fidelity',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
    baseMultipliers: { other: 2 }
  },
  {
    id: 'usbank-cash-plus',
    name: 'U.S. Bank Cash+® Visa Signature®',
    issuer: 'US Bank',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
    baseMultipliers: { electronics: 5, home_improvement: 5, department_stores: 5, other: 1 }
  },

  // --- FINTECH & DEBIT CARDS ---
  {
    id: 'chime-debit',
    name: 'Chime Visa® Debit Card',
    issuer: 'Fintech & Debit (Chime, SoFi, Cash App, Venmo)',
    network: 'Visa',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #25c974 0%, #127943 100%)',
    baseMultipliers: { other: 1 }
  },
  {
    id: 'sofi-debit',
    name: 'SoFi Money® Mastercard Debit',
    issuer: 'Fintech & Debit (Chime, SoFi, Cash App, Venmo)',
    network: 'Mastercard',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #00b2e3 0%, #006885 100%)',
    baseMultipliers: { other: 1 }
  },
  {
    id: 'cashapp-card',
    name: 'Cash App Card (Block)',
    issuer: 'Fintech & Debit (Chime, SoFi, Cash App, Venmo)',
    network: 'Visa',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #00d632 0%, #000000 100%)',
    baseMultipliers: { boosts: 5, coffee: 10, grocery: 5, other: 1 }
  },
  {
    id: 'venmo-debit',
    name: 'Venmo Mastercard® Debit Card',
    issuer: 'Fintech & Debit (Chime, SoFi, Cash App, Venmo)',
    network: 'Mastercard',
    type: 'debit',
    rewardType: 'CASH_BACK',
    gradient: 'linear-gradient(135deg, #008cff 0%, #004b87 100%)',
    baseMultipliers: { other: 1 }
  }
];

export function getCardById(cardId) {
  return CARD_DATABASE.find(c => c.id === cardId) || null;
}

export function getCardsByIssuer(issuerName) {
  return CARD_DATABASE.filter(c => c.issuer === issuerName);
}
