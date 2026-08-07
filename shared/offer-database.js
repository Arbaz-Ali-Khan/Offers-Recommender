/**
 * Targeted Merchant Offers & MCC Domain Mappings
 * Database of targeted offers (Amex Offers, Chase Offers, BankAmeriDeals, Citi Merchant Offers, CapOne Offers)
 * and domain-to-category mappings.
 */

export const DOMAIN_MCC_MAP = {
  'nike.com': { category: 'apparel', mcc: '5651', name: 'Nike' },
  'dell.com': { category: 'electronics', mcc: '5732', name: 'Dell' },
  'starbucks.com': { category: 'dining', mcc: '5814', name: 'Starbucks' },
  'amazon.com': { category: 'online_retail', mcc: '5311', name: 'Amazon' },
  'target.com': { category: 'online_retail', mcc: '5310', name: 'Target' },
  'homedepot.com': { category: 'home_improvement', mcc: '5200', name: 'The Home Depot' },
  'bestbuy.com': { category: 'electronics', mcc: '5732', name: 'Best Buy' },
  'uber.com': { category: 'transit', mcc: '4121', name: 'Uber' },
  'marriott.com': { category: 'hotels', mcc: '7011', name: 'Marriott' },
  'united.com': { category: 'flights', mcc: '4511', name: 'United Airlines' },
  'instacart.com': { category: 'grocery', mcc: '5411', name: 'Instacart' },
  'door-dash.com': { category: 'dining', mcc: '5812', name: 'DoorDash' },
  'doordash.com': { category: 'dining', mcc: '5812', name: 'DoorDash' },
  'chewy.com': { category: 'pets', mcc: '5995', name: 'Chewy' },
  'walmart.com': { category: 'online_retail', mcc: '5311', name: 'Walmart' },
  'wholefoodsmarket.com': { category: 'grocery', mcc: '5411', name: 'Whole Foods Market' },
  'netflix.com': { category: 'streaming', mcc: '4899', name: 'Netflix' },
  'shell.com': { category: 'gas', mcc: '5541', name: 'Shell Gas' }
};

export const TARGETED_OFFERS = [
  {
    id: 'offer-dell-amex-25off100',
    cardId: 'amex-gold',
    issuer: 'American Express',
    program: 'Amex Offers',
    domain: 'dell.com',
    merchantName: 'Dell Technologies',
    type: 'fixed_discount', // 'fixed_discount' | 'percent_discount' | 'bonus_points'
    value: 25,              // $25 off
    minSpend: 100,          // min $100 spend
    expires: '2026-12-31',
    description: 'Get $25 statement credit by using your enrolled Card to spend $100+ at Dell.',
    terms: 'Valid online at dell.com only.'
  },
  {
    id: 'offer-dell-plat-200credits',
    cardId: 'amex-platinum',
    issuer: 'American Express',
    program: 'Amex Offers / Perks',
    domain: 'dell.com',
    merchantName: 'Dell Technologies',
    type: 'fixed_discount',
    value: 100,
    minSpend: 100,
    expires: '2026-12-31',
    description: '$100 semi-annual statement credit at Dell Technologies.',
    terms: 'Requires activation prior to purchase.'
  },
  {
    id: 'offer-nike-amex-5xpts',
    cardId: 'amex-gold',
    issuer: 'American Express',
    program: 'Amex Offers',
    domain: 'nike.com',
    merchantName: 'Nike',
    type: 'bonus_points',
    bonusMultiplier: 5,     // +5x MR points
    minSpend: 0,
    expires: '2026-10-31',
    description: 'Get 5 additional Membership Rewards® points per dollar spent at Nike.com.',
    terms: 'Up to 5,000 extra MR points.'
  },
  {
    id: 'offer-starbucks-chase-10percent',
    cardId: 'chase-sapphire-reserve',
    issuer: 'Chase',
    program: 'Chase Offers',
    domain: 'starbucks.com',
    merchantName: 'Starbucks',
    type: 'percent_discount',
    valuePercent: 10,       // 10% back
    maxDiscount: 3,         // max $3 back
    minSpend: 0,
    expires: '2026-09-30',
    description: 'Earn 10% cash back on your Starbucks purchase (up to $3.00 max credit).',
    terms: 'Single purchase only.'
  },
  {
    id: 'offer-starbucks-chase-pref-10percent',
    cardId: 'chase-sapphire-preferred',
    issuer: 'Chase',
    program: 'Chase Offers',
    domain: 'starbucks.com',
    merchantName: 'Starbucks',
    type: 'percent_discount',
    valuePercent: 10,
    maxDiscount: 3,
    minSpend: 0,
    expires: '2026-09-30',
    description: 'Earn 10% cash back on your Starbucks purchase (up to $3.00 max credit).',
    terms: 'Single purchase only.'
  },
  {
    id: 'offer-amazon-freedom-5percent',
    cardId: 'chase-freedom-flex',
    issuer: 'Chase',
    program: 'Q3 5% Rotating Category',
    domain: 'amazon.com',
    merchantName: 'Amazon',
    type: 'percent_discount',
    valuePercent: 5,
    maxDiscount: 75,
    minSpend: 0,
    expires: '2026-09-30',
    description: 'Earn 5% total cash back (or 5x points) on up to $1,500 in combined purchases.',
    terms: 'Activation required.'
  },
  {
    id: 'offer-bestbuy-citi-15off150',
    cardId: 'citi-double-cash',
    issuer: 'Citi',
    program: 'Citi Merchant Offers',
    domain: 'bestbuy.com',
    merchantName: 'Best Buy',
    type: 'fixed_discount',
    value: 15,
    minSpend: 150,
    expires: '2026-11-15',
    description: 'Get $15 statement credit on purchases of $150 or more at Best Buy.',
    terms: 'Online or in-store.'
  },
  {
    id: 'offer-marriott-amex-50off200',
    cardId: 'amex-platinum',
    issuer: 'American Express',
    program: 'Amex Offers',
    domain: 'marriott.com',
    merchantName: 'Marriott Bonvoy',
    type: 'fixed_discount',
    value: 50,
    minSpend: 200,
    expires: '2026-12-15',
    description: 'Get $50 back when spending $200+ at participating Marriott Bonvoy properties.',
    terms: 'Must book directly on marriott.com.'
  },
  {
    id: 'offer-instacart-capone-10percent',
    cardId: 'capital-one-savor-one',
    issuer: 'Capital One',
    program: 'Capital One Offers',
    domain: 'instacart.com',
    merchantName: 'Instacart',
    type: 'percent_discount',
    valuePercent: 10,
    maxDiscount: 15,
    minSpend: 0,
    expires: '2026-10-15',
    description: '10% cash back on Instacart grocery delivery.',
    terms: 'Click through Capital One portal.'
  },
  {
    id: 'offer-uber-wells-15percent',
    cardId: 'wells-fargo-autograph',
    issuer: 'Wells Fargo',
    program: 'My Wells Fargo Deals',
    domain: 'uber.com',
    merchantName: 'Uber & Uber Eats',
    type: 'percent_discount',
    valuePercent: 15,
    maxDiscount: 10,
    minSpend: 0,
    expires: '2026-11-30',
    description: 'Earn 15% cash back on your next Uber ride or Uber Eats order (up to $10).',
    terms: 'Valid via app or online.'
  }
];

export function getDomainInfo(hostname) {
  if (!hostname) return null;
  const cleanHost = hostname.toLowerCase().replace(/^www\./, '');
  if (DOMAIN_MCC_MAP[cleanHost]) {
    return { domain: cleanHost, ...DOMAIN_MCC_MAP[cleanHost] };
  }
  // Try matching parent domain (e.g. store.nike.com -> nike.com)
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
