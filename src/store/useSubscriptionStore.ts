import { create } from 'zustand';
import type { SubscriptionPlan, Subscription, BillingCycle } from '../types/subscription';

interface SubscriptionState {
  currentSubscription: Subscription | null;
  availablePlans: SubscriptionPlan[];
  isLoading: boolean;
  error: string | null;
  setSubscription: (subscription: Subscription | null) => void;
  setPlans: (plans: SubscriptionPlan[]) => void;
  updateSubscription: (updates: Partial<Subscription>) => void;
  changeBillingCycle: (cycle: BillingCycle) => void;
  pauseSubscription: () => void;
  resumeSubscription: () => void;
  cancelSubscription: () => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  currentSubscription: null,
  availablePlans: [],
  isLoading: false,
  error: null,
  
  setSubscription: (subscription) => set({ currentSubscription: subscription }),
  setPlans: (plans) => set({ availablePlans: plans }),
  
  updateSubscription: (updates) => set((state) => ({
    currentSubscription: state.currentSubscription
      ? { ...state.currentSubscription, ...updates }
      : null
  })),
  
  changeBillingCycle: (cycle) => set((state) => ({
    currentSubscription: state.currentSubscription
      ? { ...state.currentSubscription, billingCycle: cycle }
      : null
  })),
  
  pauseSubscription: () => set((state) => ({
    currentSubscription: state.currentSubscription
      ? {
          ...state.currentSubscription,
          status: 'paused',
          pausedAt: new Date()
        }
      : null
  })),
  
  resumeSubscription: () => set((state) => ({
    currentSubscription: state.currentSubscription
      ? {
          ...state.currentSubscription,
          status: 'active',
          pausedAt: undefined
        }
      : null
  })),
  
  cancelSubscription: () => set((state) => ({
    currentSubscription: state.currentSubscription
      ? {
          ...state.currentSubscription,
          status: 'cancelled',
          cancelledAt: new Date(),
          cancelAtPeriodEnd: true
        }
      : null
  }))
}));