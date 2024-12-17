import React, { useState } from 'react';
import { SubscriptionPlansGrid } from '../components/subscription/SubscriptionPlansGrid';
import { SubscriptionDetails } from '../components/subscription/SubscriptionDetails';
import { CheckoutFlow } from '../components/subscription/CheckoutFlow';
import { useSubscriptionStore } from '../store/useSubscriptionStore';
import { subscriptionPlans } from '../data/subscriptionPlans';
import type { BillingCycle } from '../types/subscription';

export const SubscriptionPage: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('premium');
  const [currentBillingCycle, setCurrentBillingCycle] = useState<BillingCycle>('monthly');
  const [showCheckout, setShowCheckout] = useState(false);
  
  const {
    currentSubscription,
    isLoading,
    error,
    pauseSubscription,
    resumeSubscription,
    cancelSubscription
  } = useSubscriptionStore();

  const currentPlan = subscriptionPlans.find(
    plan => plan.id === (currentSubscription?.planId || selectedPlanId)
  )!;

  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
    setShowCheckout(true);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error loading subscription data: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Subscription Management</h1>
        <p className="mt-2 text-gray-600">
          {currentSubscription 
            ? 'Manage your subscription settings and billing'
            : 'Choose the plan that best fits your needs'}
        </p>
      </div>

      {showCheckout ? (
        <CheckoutFlow
          plan={currentPlan}
          billingCycle={currentBillingCycle}
          onBack={() => setShowCheckout(false)}
        />
      ) : currentSubscription ? (
        <SubscriptionDetails
          subscription={currentSubscription}
          plan={currentPlan}
          onPause={pauseSubscription}
          onResume={resumeSubscription}
          onCancel={cancelSubscription}
        />
      ) : (
        <SubscriptionPlansGrid
          plans={subscriptionPlans}
          selectedPlanId={selectedPlanId}
          currentBillingCycle={currentBillingCycle}
          onSelectPlan={handlePlanSelect}
          onChangeBillingCycle={setCurrentBillingCycle}
        />
      )}
    </main>
  );
};