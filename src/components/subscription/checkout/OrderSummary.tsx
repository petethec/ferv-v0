import React from 'react';
import { Check } from 'lucide-react';
import type { SubscriptionPlan, BillingCycle } from '../../../types/subscription';
import { calculateSubscriptionPrice, calculateSavings } from '../../../utils/subscriptionCalculations';

interface OrderSummaryProps {
  plan: SubscriptionPlan;
  billingCycle: BillingCycle;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  plan,
  billingCycle
}) => {
  const price = calculateSubscriptionPrice(plan, billingCycle);
  const savings = calculateSavings(plan, billingCycle);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-gray-900">{plan.name}</p>
            <p className="text-sm text-gray-500">Billed {billingCycle}</p>
          </div>
          <p className="font-medium text-gray-900">${price}</p>
        </div>

        {savings > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <p>Savings</p>
            <p>${savings}</p>
          </div>
        )}

        <div className="pt-4">
          <div className="flex justify-between font-medium text-gray-900">
            <p>Total</p>
            <p>${price}</p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="font-medium text-gray-900 mb-2">Plan Features</h4>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};