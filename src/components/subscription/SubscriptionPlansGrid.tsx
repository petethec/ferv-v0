import React from 'react';
import { Check } from 'lucide-react';
import { SubscriptionPlan, BillingCycle } from '../../types/subscription';
import { calculateSubscriptionPrice, calculateSavings } from '../../utils/subscriptionCalculations';
import { PlanCard } from './PlanCard';

interface SubscriptionPlansGridProps {
  plans: SubscriptionPlan[];
  selectedPlanId?: string;
  currentBillingCycle: BillingCycle;
  onSelectPlan: (planId: string) => void;
  onChangeBillingCycle: (cycle: BillingCycle) => void;
}

export const SubscriptionPlansGrid: React.FC<SubscriptionPlansGridProps> = ({
  plans,
  selectedPlanId,
  currentBillingCycle,
  onSelectPlan,
  onChangeBillingCycle
}) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          <button
            onClick={() => onChangeBillingCycle('monthly')}
            className={`px-4 py-2 text-sm rounded-md ${
              currentBillingCycle === 'monthly'
                ? 'bg-orange-600 text-white'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => onChangeBillingCycle('quarterly')}
            className={`px-4 py-2 text-sm rounded-md ${
              currentBillingCycle === 'quarterly'
                ? 'bg-orange-600 text-white'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            Quarterly
            <span className="ml-1 text-xs text-green-500">Save 10%</span>
          </button>
          <button
            onClick={() => onChangeBillingCycle('annual')}
            className={`px-4 py-2 text-sm rounded-md ${
              currentBillingCycle === 'annual'
                ? 'bg-orange-600 text-white'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            Annual
            <span className="ml-1 text-xs text-green-500">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={plan.id === selectedPlanId}
            billingCycle={currentBillingCycle}
            onSelect={() => onSelectPlan(plan.id)}
          />
        ))}
      </div>
    </div>
  );
};