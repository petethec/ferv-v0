import type { SubscriptionPlan, BillingCycle } from '../types/subscription';

export const calculateSubscriptionPrice = (
  plan: SubscriptionPlan,
  cycle: BillingCycle
): number => {
  const basePrice = plan.price[cycle];
  switch (cycle) {
    case 'monthly':
      return basePrice;
    case 'quarterly':
      return basePrice * 3;
    case 'annual':
      return basePrice * 12;
  }
};

export const calculateSavings = (
  plan: SubscriptionPlan,
  cycle: BillingCycle
): number => {
  if (!plan?.price) return 0;
  
  const monthlyTotal = plan.price.monthly * (
    cycle === 'monthly' ? 1 : cycle === 'quarterly' ? 3 : 12
  );
  const actualPrice = calculateSubscriptionPrice(plan, cycle);
  return Math.max(0, monthlyTotal - actualPrice);
};

export const formatSubscriptionDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const getRenewalDate = (
  currentPeriodStart: Date,
  cycle: BillingCycle
): Date => {
  const renewalDate = new Date(currentPeriodStart);
  switch (cycle) {
    case 'monthly':
      renewalDate.setMonth(renewalDate.getMonth() + 1);
      break;
    case 'quarterly':
      renewalDate.setMonth(renewalDate.getMonth() + 3);
      break;
    case 'annual':
      renewalDate.setFullYear(renewalDate.getFullYear() + 1);
      break;
  }
  return renewalDate;
};