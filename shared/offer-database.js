/**
 * Targeted Merchant Offers & MCC Domain Mappings (2026)
 * Categorized by: Grocery, Toys & Games, Electronics, Dining, Travel, Gas & Transit, Apparel, Home & Garden.
 */

export const OFFER_CATEGORIES = [
  { id: 'all', label: 'All Deals' },
  { id: 'grocery', label: '🛒 Grocery' },
  { id: 'toys', label: '🎮 Toys & Games' },
  { id: 'electronics', label: '⚡ Electronics' },
  { id: 'dining', label: '🍽️ Dining' },
  { id: 'travel', label: '✈️ Travel' },
  { id: 'gas', label: '⛽ Gas & Transit' },
  { id: 'apparel', label: '👗 Apparel' },
  { id: 'home_improvement', label: '🏡 Home & Garden' }
];

export const DOMAIN_MCC_MAP = {
  // Electronics
  'nike.com': { category: 'apparel', mcc: '5651', name: 'Nike' },
  'dell.com': { category: 'electronics', mcc: '5732', name: 'Dell' },
  'apple.com': { category: 'electronics', mcc: '5732', name: 'Apple Store' },
  'bestbuy.com': { category: 'electronics', mcc: '5732', name: 'Best Buy' },
  'bnhフォト.com': { category: 'electronics', mcc: '5732', name: 'B&H Photo' },
  'bhphotovideo.com': { category: 'electronics', mcc: '5732', name: 'B&H Photo' },

  // Toys & Games
  'lego.com': { category: 'toys', mcc: '5945', name: 'LEGO Shop' },
  'gamestop.com': { category: 'toys', mcc: '5945', name: 'GameStop' },
  'steampowered.com': { category: 'toys', mcc: '5816', name: 'Steam Games' },
  'playstation.com': { category: 'toys', mcc: '5816', name: 'PlayStation' },

  // Dining
  'starbucks.com': { category: 'dining', mcc: '5814', name: 'Starbucks' },
  'doordash.com': { category: 'dining', mcc: '5812', name: 'DoorDash' },
  'uber.com': { category: 'transit', mcc: '4121', name: 'Uber & Uber Eats' },
  'grubhub.com': { category: 'dining', mcc: '5812', name: 'Grubhub' },
  'chipotle.com': { category: 'dining', mcc: '5814', name: 'Chipotle' },

  // Grocery
  'instacart.com': { category: 'grocery', mcc: '5411', name: 'Instacart' },
  'wholefoodsmarket.com': { category: 'grocery', mcc: '5411', name: 'Whole Foods Market' },
  'traderjoes.com': { category: 'grocery', mcc: '5411', name: "Trader Joe's" },
  'kroger.com': { category: 'grocery', mcc: '5411', name: 'Kroger' },

  // Travel
  'marriott.com': { category: 'travel', mcc: '7011', name: 'Marriott Bonvoy' },
  'united.com': { category: 'travel', mcc: '4511', name: 'United Airlines' },
  'delta.com': { category: 'travel', mcc: '4511', name: 'Delta Air Lines' },
  'airbnb.com': { category: 'travel', mcc: '7011', name: 'Airbnb' },
  'expedia.com': { category: 'travel', mcc: '4722', name: 'Expedia' },

  // Gas & Transit
  'shell.com': { category: 'gas', mcc: '5541', name: 'Shell Gas' },
  'chevron.com': { category: 'gas', mcc: '5541', name: 'Chevron' },
  'bp.com': { category: 'gas', mcc: '5541', name: 'BP Gas' },

  // Apparel
  'nordstrom.com': { category: 'apparel', mcc: '5651', name: 'Nordstrom' },
  'lululemon.com': { category: 'apparel', mcc: '5651', name: 'lululemon' },
  'zara.com': { category: 'apparel', mcc: '5651', name: 'Zara' },

  // Home & Garden
  'homedepot.com': { category: 'home_improvement', mcc: '5200', name: 'The Home Depot' },
  'lowes.com': { category: 'home_improvement', mcc: '5200', name: "Lowe's" },
  'ikea.com': { category: 'home_improvement', mcc: '5712', name: 'IKEA' },

  // General Online Retail
  'amazon.com': { category: 'online_retail', mcc: '5311', name: 'Amazon' },
  'target.com': { category: 'online_retail', mcc: '5310', name: 'Target' },
  'walmart.com': { category: 'online_retail', mcc: '5311', name: 'Walmart' },
  'chewy.com': { category: 'pets', mcc: '5995', name: 'Chewy' }
};

export const TARGETED_OFFERS = [
  // --- ELECTRONICS ---
  {
    id: 'offer-dell-plat-200credits',
    cardId: 'amex-platinum',
    issuer: 'American Express',
    program: 'Amex Offers / Perks',
    domain: 'dell.com',
    merchantName: 'Dell Technologies',
    category: 'electronics',
    type: 'fixed_discount',
    value: 100,
    minSpend: 100,
    expires: '2026-08-15',
    expiryStatus: 'Expires in 8 days!',
    activationUrl: 'https://global.americanexpress.com/benefits',
    description: '$100 semi-annual statement credit at Dell Technologies.',
    terms: 'Requires activation prior to purchase.'
  },
  {
    id: 'offer-bestbuy-citi-15off150',
    cardId: 'citi-double-cash',
    issuer: 'Citi',
    program: 'Citi Merchant Offers',
    domain: 'bestbuy.com',
    merchantName: 'Best Buy',
    category: 'electronics',
    type: 'fixed_discount',
    value: 15,
    minSpend: 150,
    expires: '2026-08-10',
    expiryStatus: 'Expires in 3 days!',
    activationUrl: 'https://online.citi.com/US/ag/merchant-offers',
    description: 'Get $15 statement credit on purchases of $150 or more at Best Buy.',
    terms: 'Online or in-store.'
  },

  // --- TOYS & GAMES ---
  {
    id: 'offer-lego-amex-20off100',
    cardId: 'amex-gold',
    issuer: 'American Express',
    program: 'Amex Offers',
    domain: 'lego.com',
    merchantName: 'LEGO Shop',
    category: 'toys',
    type: 'fixed_discount',
    value: 20,
    minSpend: 100,
    expires: '2026-08-12',
    expiryStatus: 'Expires in 5 days!',
    activationUrl: 'https://global.americanexpress.com/offers/eligible',
    description: 'Get $20 statement credit on $100+ spend at LEGO.com.',
    terms: 'Valid on US orders.'
  },
  {
    id: 'offer-gamestop-chase-10percent',
    cardId: 'chase-freedom-flex',
    issuer: 'Chase',
    program: 'Chase Offers',
    domain: 'gamestop.com',
    merchantName: 'GameStop',
    category: 'toys',
    type: 'percent_discount',
    valuePercent: 10,
    maxDiscount: 15,
    minSpend: 0,
    expires: '2026-08-20',
    expiryStatus: 'Ending Soon',
    activationUrl: 'https://www.chase.com/personal/credit-cards/chase-offers',
    description: '10% cash back on GameStop collectibles & games (up to $15).',
    terms: 'Single purchase.'
  },

  // --- GROCERY ---
  {
    id: 'offer-instacart-capone-10percent',
    cardId: 'capital-one-savor-one',
    issuer: 'Capital One',
    program: 'Capital One Offers',
    domain: 'instacart.com',
    merchantName: 'Instacart',
    category: 'grocery',
    type: 'percent_discount',
    valuePercent: 10,
    maxDiscount: 15,
    minSpend: 0,
    expires: '2026-08-14',
    expiryStatus: 'Expires in 7 days!',
    activationUrl: 'https://capitalone.com/credit-cards/offers/',
    description: '10% cash back on Instacart grocery delivery.',
    terms: 'Click through Capital One portal.'
  },
  {
    id: 'offer-wholefoods-chase-5percent',
    cardId: 'chase-sapphire-preferred',
    issuer: 'Chase',
    program: 'Chase Offers',
    domain: 'wholefoodsmarket.com',
    merchantName: 'Whole Foods Market',
    category: 'grocery',
    type: 'percent_discount',
    valuePercent: 10,
    maxDiscount: 10,
    minSpend: 0,
    expires: '2026-08-18',
    expiryStatus: 'Ending Soon',
    activationUrl: 'https://www.chase.com/personal/credit-cards/chase-offers',
    description: '10% statement credit at Whole Foods Market (up to $10).',
    terms: 'In-store or online delivery.'
  },

  // --- DINING ---
  {
    id: 'offer-starbucks-chase-10percent',
    cardId: 'chase-sapphire-reserve',
    issuer: 'Chase',
    program: 'Chase Offers',
    domain: 'starbucks.com',
    merchantName: 'Starbucks',
    category: 'dining',
    type: 'percent_discount',
    valuePercent: 10,
    maxDiscount: 3,
    minSpend: 0,
    expires: '2026-08-09',
    expiryStatus: 'Expires in 2 days!',
    activationUrl: 'https://www.chase.com/personal/credit-cards/chase-offers',
    description: 'Earn 10% cash back on your Starbucks purchase (up to $3.00 max credit).',
    terms: 'Single purchase only.'
  },
  {
    id: 'offer-doordash-freedom-5off25',
    cardId: 'chase-freedom-unlimited',
    issuer: 'Chase',
    program: 'Chase Perks',
    domain: 'doordash.com',
    merchantName: 'DoorDash',
    category: 'dining',
    type: 'fixed_discount',
    value: 5,
    minSpend: 25,
    expires: '2026-08-31',
    expiryStatus: 'Active',
    activationUrl: 'https://www.doordash.com/dashpass',
    description: '$5 off DoorDash orders of $25+ with DashPass.',
    terms: 'Enrolled DashPass members.'
  },

  // --- TRAVEL ---
  {
    id: 'offer-marriott-amex-50off200',
    cardId: 'amex-platinum',
    issuer: 'American Express',
    program: 'Amex Offers',
    domain: 'marriott.com',
    merchantName: 'Marriott Bonvoy',
    category: 'travel',
    type: 'fixed_discount',
    value: 50,
    minSpend: 200,
    expires: '2026-08-25',
    expiryStatus: 'Ending Soon',
    activationUrl: 'https://global.americanexpress.com/offers/eligible',
    description: 'Get $50 back when spending $200+ at participating Marriott properties.',
    terms: 'Must book directly on marriott.com.'
  },

  // --- GAS & TRANSIT ---
  {
    id: 'offer-uber-wells-15percent',
    cardId: 'wells-fargo-autograph',
    issuer: 'Wells Fargo',
    program: 'My Wells Fargo Deals',
    domain: 'uber.com',
    merchantName: 'Uber & Uber Eats',
    category: 'gas',
    type: 'percent_discount',
    valuePercent: 15,
    maxDiscount: 10,
    minSpend: 0,
    expires: '2026-08-11',
    expiryStatus: 'Expires in 4 days!',
    activationUrl: 'https://www.wellsfargo.com/mobile/deals/',
    description: 'Earn 15% cash back on your next Uber ride or Uber Eats order (up to $10).',
    terms: 'Valid via app or online.'
  },

  // --- APPAREL ---
  {
    id: 'offer-nike-amex-5xpts',
    cardId: 'amex-gold',
    issuer: 'American Express',
    program: 'Amex Offers',
    domain: 'nike.com',
    merchantName: 'Nike',
    category: 'apparel',
    type: 'bonus_points',
    bonusMultiplier: 5,
    minSpend: 0,
    expires: '2026-08-16',
    expiryStatus: 'Expires in 9 days!',
    activationUrl: 'https://global.americanexpress.com/offers/eligible',
    description: 'Get 5 additional Membership Rewards® points per dollar spent at Nike.com.',
    terms: 'Up to 5,000 extra MR points.'
  },

  // --- HOME & GARDEN ---
  {
    id: 'offer-homedepot-bofa-15off100',
    cardId: 'bofa-customized-cash',
    issuer: 'Bank of America',
    program: 'BankAmeriDeals',
    domain: 'homedepot.com',
    merchantName: 'The Home Depot',
    category: 'home_improvement',
    type: 'fixed_discount',
    value: 15,
    minSpend: 100,
    expires: '2026-08-13',
    expiryStatus: 'Expires in 6 days!',
    activationUrl: 'https://www.bankofamerica.com/online-banking/bankamerideals/',
    description: '$15 cash back on $100+ Home Depot online purchase.',
    terms: 'Single transaction.'
  }
];

export function getDomainInfo(hostname) {
  if (!hostname) return null;
  const cleanHost = hostname.toLowerCase().replace(/^www\./, '');
  if (DOMAIN_MCC_MAP[cleanHost]) {
    return { domain: cleanHost, ...DOMAIN_MCC_MAP[cleanHost] };
  }
  const parts = cleanHost.split('.');
  if (parts.length > 2) {
    const parentDomain = parts.slice(-2).join('.');
    if (DOMAIN_MCC_MAP[parentDomain]) {
      return { domain: parentDomain, ...DOMAIN_MCC_MAP[parentDomain] };
    }
  }
  return { domain: cleanHost, category: 'other', mcc: '5999', name: cleanHost };
}

export function getTargetedOffersForDomain(domain) {
  if (!domain) return [];
  const cleanDomain = domain.toLowerCase().replace(/^www\./, '');
  return TARGETED_OFFERS.filter(o => o.domain === cleanDomain);
}
