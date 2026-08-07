/**
 * Recommendation Calculator Engine
 * Calculates net financial yield for user cards given a merchant domain and transaction amount.
 */

import { CARD_DATABASE, POINT_VALUATIONS } from './card-database.js';
import { getDomainInfo, getTargetedOffersForDomain } from './offer-database.js';

/**
 * Main calculation function.
 * @param {Object} options
 * @param {string} options.domain - e.g. "nike.com"
 * @param {number} options.amount - spend amount in USD (default 100)
 * @param {Array<string>} options.userCardIds - list of card IDs owned by user (defaults to all if empty)
 * @returns {Object} Structured recommendation with sorted rankings
 */
export function calculateBestCardForDomain({ domain, amount = 100, userCardIds = [] }) {
  const domainInfo = getDomainInfo(domain);
  const targetedOffers = getTargetedOffersForDomain(domainInfo.domain);

  // Filter cards to user owned list, or default to all catalog cards if none specified
  const eligibleCards = (userCardIds && userCardIds.length > 0)
    ? CARD_DATABASE.filter(c => userCardIds.includes(c.id))
    : CARD_DATABASE;

  const rankings = eligibleCards.map(card => {
    // 1. Calculate Base Multiplier & Base Dollar Value
    let multiplier = card.baseMultipliers[domainInfo.category] || card.baseMultipliers['other'] || 1;
    
    // Check rotating or portal overrides
    if (card.baseMultipliers.rotating && (domainInfo.category === 'online_retail' || domainInfo.category === 'grocery')) {
      multiplier = Math.max(multiplier, card.baseMultipliers.rotating);
    }
    if (card.baseMultipliers.chosen_category && domainInfo.category === 'online_retail') {
      multiplier = Math.max(multiplier, card.baseMultipliers.chosen_category);
    }

    const pointValueRate = POINT_VALUATIONS[card.rewardType] || 0.01;
    const basePointsEarned = amount * multiplier;
    let baseDollarsYield = basePointsEarned * pointValueRate;

    // 2. Check for Targeted Merchant Offers matching this card & domain
    const activeOffer = targetedOffers.find(o => o.cardId === card.id);
    let targetedDiscountUSD = 0;
    let offerExplanation = null;

    if (activeOffer) {
      if (!activeOffer.minSpend || amount >= activeOffer.minSpend) {
        if (activeOffer.type === 'fixed_discount') {
          targetedDiscountUSD = activeOffer.value;
          offerExplanation = `Targeted Offer: $${activeOffer.value} back on $${activeOffer.minSpend}+ spend`;
        } else if (activeOffer.type === 'percent_discount') {
          let calculated = (amount * activeOffer.valuePercent) / 100;
          if (activeOffer.maxDiscount && calculated > activeOffer.maxDiscount) {
            calculated = activeOffer.maxDiscount;
          }
          targetedDiscountUSD = calculated;
          offerExplanation = `Targeted Offer: ${activeOffer.valuePercent}% cash back (+$${calculated.toFixed(2)})`;
        } else if (activeOffer.type === 'bonus_points') {
          const extraPoints = amount * activeOffer.bonusMultiplier;
          const extraDollarValue = extraPoints * pointValueRate;
          targetedDiscountUSD = extraDollarValue;
          offerExplanation = `Targeted Offer: +${activeOffer.bonusMultiplier}x extra points (+$${extraDollarValue.toFixed(2)} value)`;
        }
      } else {
        offerExplanation = `Offer available: Spend $${activeOffer.minSpend}+ to get $${activeOffer.value || activeOffer.valuePercent + '%'}`;
      }
    }

    const totalUSDYield = baseDollarsYield + targetedDiscountUSD;
    const effectiveRewardRatePercent = amount > 0 ? (totalUSDYield / amount) * 100 : 0;

    return {
      card,
      multiplier,
      basePointsEarned,
      baseDollarsYield,
      activeOffer,
      targetedDiscountUSD,
      offerExplanation,
      totalUSDYield,
      effectiveRewardRatePercent
    };
  });

  // Sort descending by total USD yield
  rankings.sort((a, b) => b.totalUSDYield - a.totalUSDYield);

  return {
    domainInfo,
    amount,
    topRecommendation: rankings[0] || null,
    rankings,
    availableTargetedOffersCount: targetedOffers.length
  };
}
