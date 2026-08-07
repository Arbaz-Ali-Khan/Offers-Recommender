/**
 * US Credit & Debit Card Catalog
 * Catalog of top US cards with base reward categories and point valuations.
 */

export const POINT_VALUATIONS = {
  AMEX_MR: 0.015,       // American Express Membership Rewards (1.5 cents/pt)
  CHASE_UR: 0.015,      // Chase Ultimate Rewards (1.5 cents/pt)
  CAPITAL_ONE: 0.0125,  // Capital One Miles (1.25 cents/pt)
  CITI_TY: 0.0125,      // Citi ThankYou Points (1.25 cents/pt)
  CASH_BACK: 0.01,      // Standard Cash Back (1.0 cent/pt or $)
  DISCOVER: 0.01        // Discover Cashback / Cashback Match
};

export const CARD_DATABASE = [
  {
    id: 'amex-gold',
    name: 'American Express® Gold Card',
    issuer: 'American Express',
    network: 'Amex',
    type: 'credit',
    rewardType: 'AMEX_MR',
    color: 'gold',
    gradient: 'linear-gradient(135deg, #d4af37 0%, #fffdd0 50%, #aa7c11 100%)',
    baseMultipliers: {
      dining: 4,
      grocery: 4,      // up to $25k/yr
      flights: 3,
      other: 1
    }
  },
  {
    id: 'amex-platinum',
    name: 'The Platinum Card® from American Express',
    issuer: 'American Express',
    network: 'Amex',
    type: 'credit',
    rewardType: 'AMEX_MR',
    color: 'platinum',
    gradient: 'linear-gradient(135deg, #e5e4e2 0%, #ffffff 50%, #708090 100%)',
    baseMultipliers: {
      flights: 5,
      hotels: 5,
      other: 1
    }
  },
  {
    id: 'amex-blue-cash-pref',
    name: 'Blue Cash Preferred® Card from American Express',
    issuer: 'American Express',
    network: 'Amex',
    type: 'credit',
    rewardType: 'CASH_BACK',
    color: 'blue',
    gradient: 'linear-gradient(135deg, #0052cc 0%, #172b4d 100%)',
    baseMultipliers: {
      grocery: 6,      // up to $6k/yr
      streaming: 6,
      transit: 3,
      gas: 3,
      other: 1
    }
  },
  {
    id: 'chase-sapphire-reserve',
    name: 'Chase Sapphire Reserve®',
    issuer: 'Chase',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CHASE_UR',
    color: 'sapphire',
    gradient: 'linear-gradient(135deg, #0f52ba 0%, #002147 100%)',
    baseMultipliers: {
      travel: 3,
      dining: 3,
      other: 1
    }
  },
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred® Card',
    issuer: 'Chase',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CHASE_UR',
    color: 'sapphire-light',
    gradient: 'linear-gradient(135deg, #1e90ff 0%, #003366 100%)',
    baseMultipliers: {
      dining: 3,
      streaming: 3,
      online_grocery: 3,
      travel: 2,
      other: 1
    }
  },
  {
    id: 'chase-freedom-flex',
    name: 'Chase Freedom Flex℠',
    issuer: 'Chase',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CHASE_UR',
    color: 'red',
    gradient: 'linear-gradient(135deg, #e53935 0%, #8e0000 100%)',
    baseMultipliers: {
      rotating: 5,     // 5% quarterly rotating (Amazon, Wholesale, Target, etc.)
      drugstores: 3,
      dining: 3,
      travel_portal: 5,
      other: 1
    }
  },
  {
    id: 'chase-freedom-unlimited',
    name: 'Chase Freedom Unlimited®',
    issuer: 'Chase',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CHASE_UR',
    color: 'emerald',
    gradient: 'linear-gradient(135deg, #2e7d32 0%, #005005 100%)',
    baseMultipliers: {
      travel_portal: 5,
      dining: 3,
      drugstores: 3,
      other: 1.5
    }
  },
  {
    id: 'capital-one-venture-x',
    name: 'Capital One Venture X Rewards Credit Card',
    issuer: 'Capital One',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CAPITAL_ONE',
    color: 'dark-silver',
    gradient: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
    baseMultipliers: {
      hotels_rental_portal: 10,
      flights_portal: 5,
      other: 2
    }
  },
  {
    id: 'capital-one-savor-one',
    name: 'Capital One SavorOne Cash Rewards Credit Card',
    issuer: 'Capital One',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CASH_BACK',
    color: 'orange',
    gradient: 'linear-gradient(135deg, #ff6d00 0%, #b23c00 100%)',
    baseMultipliers: {
      dining: 3,
      entertainment: 3,
      streaming: 3,
      grocery: 3,
      other: 1
    }
  },
  {
    id: 'citi-double-cash',
    name: 'Citi® Double Cash Card',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CITI_TY',
    color: 'citi-blue',
    gradient: 'linear-gradient(135deg, #002d72 0%, #0099ff 100%)',
    baseMultipliers: {
      other: 2 // 1% when buy, 1% when pay
    }
  },
  {
    id: 'citi-custom-cash',
    name: 'Citi Custom Cash® Card',
    issuer: 'Citi',
    network: 'Mastercard',
    type: 'credit',
    rewardType: 'CITI_TY',
    color: 'citi-cyan',
    gradient: 'linear-gradient(135deg, #00838f 0%, #005662 100%)',
    baseMultipliers: {
      top_category: 5, // 5% on top eligible category up to $500/mo
      other: 1
    }
  },
  {
    id: 'discover-it-cashback',
    name: 'Discover it® Cash Back',
    issuer: 'Discover',
    network: 'Discover',
    type: 'credit',
    rewardType: 'DISCOVER',
    color: 'silver',
    gradient: 'linear-gradient(135deg, #ff6f00 0%, #cfd8dc 100%)',
    baseMultipliers: {
      rotating: 5, // 5% quarterly rotating categories
      other: 1
    }
  },
  {
    id: 'bofa-customized-cash',
    name: 'Bank of America® Customized Cash Rewards',
    issuer: 'Bank of America',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    color: 'bofa-red',
    gradient: 'linear-gradient(135deg, #d32f2f 0%, #002244 100%)',
    baseMultipliers: {
      chosen_category: 3, // Choice of Online Shopping, Gas, Dining, Travel, Drug Stores, Home Improvement
      grocery: 2,
      wholesale: 2,
      other: 1
    }
  },
  {
    id: 'wells-fargo-autograph',
    name: 'Wells Fargo Autograph℠ Card',
    issuer: 'Wells Fargo',
    network: 'Visa',
    type: 'credit',
    rewardType: 'CASH_BACK',
    color: 'wells-red',
    gradient: 'linear-gradient(135deg, #b71c1c 0%, #f57f17 100%)',
    baseMultipliers: {
      dining: 3,
      travel: 3,
      gas: 3,
      transit: 3,
      streaming: 3,
      phone_plans: 3,
      other: 1
    }
  }
];

export function getCardById(cardId) {
  return CARD_DATABASE.find(c => c.id === cardId) || null;
}
