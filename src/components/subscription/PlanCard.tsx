import React from 'react';
import { Check } from 'lucide-react';
import type { SubscriptionPlan, BillingCycle } from '../../types/subscription';
import { calculateSubscriptionPrice, calculateSavings } from '../../utils/subscriptionCalculations';
import { Link } from 'react-router-dom';

interface PlanCardProps {
  plan: SubscriptionPlan;
  isSelected: boolean;
  billingCycle: BillingCycle;
  onSelect: () => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  isSelected,
  billingCycle,
  onSelect
}) => {
  const price = calculateSubscriptionPrice(plan, billingCycle);
  const savings = calculateSavings(plan, billingCycle);

  return (
    <div
      className={`relative rounded-lg border-2 p-6 transition-all ${
        isSelected
          ? 'border-orange-600 shadow-lg'
          : 'border-gray-200 hover:border-orange-200'
      }`}
    >
      {plan.tier === 'premium' && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
      </div>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-900">
          ${price}
          <span className="text-base font-normal text-gray-500">
            /{billingCycle}
          </span>
        </div>
        {savings > 0 && (
          <div className="text-sm text-green-600 mt-1">
            Save ${savings} per year
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={`/subscription/checkout/${plan.id}`}
        onClick={onSelect}
        className={`w-full py-2 px-4 rounded-md text-center transition-colors ${
          isSelected
            ? 'bg-orange-600 text-white hover:bg-orange-700'
            : 'border border-orange-600 text-orange-600 hover:bg-orange-50'
        }`}
      >
        {isSelected ? 'Current Plan' : 'Select Plan'}
      </Link>
    </div>
  );
};