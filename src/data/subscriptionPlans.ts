import type { SubscriptionPlan } from '../types/subscription';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    tier: 'basic',
    name: 'Basic',
    description: 'Perfect for getting started with crowdfunding',
    price: {
      monthly: 9.99,
      quarterly: 8.99,
      annual: 7.99
    },
    features: [
      'Create up to 2 campaigns',
      'Basic analytics',
      'Standard support',
      'Basic reward tiers'
    ],
    creatorLimit: 2,
    rewardLimit: 5,
    analyticsAccess: false,
    bulkMessaging: false,
    customBranding: false
  },
  {
    id: 'premium',
    tier: 'premium',
    name: 'Premium',
    description: 'For serious creators with multiple campaigns',
    price: {
      monthly: 24.99,
      quarterly: 22.99,
      annual: 19.99
    },
    features: [
      'Create up to 5 campaigns',
      'Advanced analytics',
      'Priority support',
      'Unlimited reward tiers',
      'Bulk messaging'
    ],
    creatorLimit: 5,
    rewardLimit: -1,
    analyticsAccess: true,
    bulkMessaging: true,
    customBranding: false
  },
  {
    id: 'elite',
    tier: 'elite',
    name: 'Elite',
    description: 'Full platform access with premium features',
    price: {
      monthly: 49.99,
      quarterly: 44.99,
      annual: 39.99
    },
    features: [
      'Unlimited campaigns',
      'Enterprise analytics',
      'Dedicated support',
      'Custom branding',
      'API access',
      'White-label options'
    ],
    creatorLimit: -1,
    rewardLimit: -1,
    analyticsAccess: true,
    bulkMessaging: true,
    customBranding: true
  }
];