// Types and interfaces for subscription system
export type SubscriptionTier = 'basic' | 'premium' | 'elite';
export type BillingCycle = 'monthly' | 'quarterly' | 'annual';

export interface SubscriptionPlan {
  id: string;
  tier: SubscriptionTier;
  name: string;
  description: string;
  price: {
    monthly: number;
    quarterly: number;
    annual: number;
  };
  features: string[];
  creatorLimit: number;
  rewardLimit: number;
  analyticsAccess: boolean;
  bulkMessaging: boolean;
  customBranding: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'paused' | 'cancelled';
  billingCycle: BillingCycle;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  pausedAt?: Date;
  cancelledAt?: Date;
  paymentMethodId?: string;
}

export interface SubscriptionPayment {
  id: string;
  subscriptionId: string;
  amount: number;
  status: 'pending' | 'succeeded' | 'failed';
  createdAt: Date;
  paidAt?: Date;
  failureReason?: string;
}