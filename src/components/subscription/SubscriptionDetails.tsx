import React from 'react';
import { Calendar, CreditCard } from 'lucide-react';
import type { Subscription, SubscriptionPlan } from '../../types/subscription';
import { formatSubscriptionDate, getRenewalDate } from '../../utils/subscriptionCalculations';

interface SubscriptionDetailsProps {
  subscription: Subscription;
  plan: SubscriptionPlan;
  onPause: () => void;
  onResume: () => void;
  onCancel: () => void;
}

export const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = ({
  subscription,
  plan,
  onPause,
  onResume,
  onCancel
}) => {
  const renewalDate = getRenewalDate(subscription.currentPeriodStart, subscription.billingCycle);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Current Subscription</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your subscription settings and billing
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${
          subscription.status === 'active'
            ? 'bg-green-100 text-green-800'
            : subscription.status === 'paused'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">Plan</h3>
          <p className="text-lg font-semibold text-gray-900">{plan.name}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">Billing Cycle</h3>
          <p className="text-lg font-semibold text-gray-900">
            {subscription.billingCycle.charAt(0).toUpperCase() + 
             subscription.billingCycle.slice(1)}
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          Next billing date: {formatSubscriptionDate(renewalDate)}
        </div>
        {subscription.paymentMethodId && (
          <div className="flex items-center text-sm text-gray-600">
            <CreditCard className="w-4 h-4 mr-2" />
            Payment method ending in ****{subscription.paymentMethodId.slice(-4)}
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        {subscription.status === 'active' ? (
          <>
            <button
              onClick={onPause}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Pause Subscription
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50"
            >
              Cancel Subscription
            </button>
          </>
        ) : subscription.status === 'paused' ? (
          <button
            onClick={onResume}
            className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
          >
            Resume Subscription
          </button>
        ) : null}
      </div>
    </div>
  );
};