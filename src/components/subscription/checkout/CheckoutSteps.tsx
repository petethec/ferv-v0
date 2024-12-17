import React from 'react';
import { Check } from 'lucide-react';

export type CheckoutStep = 'plan' | 'details' | 'billing' | 'payment' | 'confirmation';

interface CheckoutStepsProps {
  currentStep: CheckoutStep;
}

export const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
  const steps: Array<{ id: CheckoutStep; label: string }> = [
    { id: 'plan', label: 'Plan Selection' },
    { id: 'details', label: 'Account Details' },
    { id: 'billing', label: 'Billing Address' },
    { id: 'payment', label: 'Payment Method' },
    { id: 'confirmation', label: 'Confirmation' }
  ];

  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  return (
    <div className="py-4">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between">
            {steps.map((step, index) => {
              const isCurrentStep = step.id === currentStep;
              const isCompleted = getCurrentStepIndex() > index;

              return (
                <li key={step.id} className="flex flex-col items-center">
                  <div className="flex items-center">
                    {isCompleted ? (
                      <span className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center">
                        <Check className="w-6 h-6 text-white" />
                      </span>
                    ) : isCurrentStep ? (
                      <span className="h-10 w-10 rounded-full border-2 border-orange-600 flex items-center justify-center">
                        <span className="h-3 w-3 rounded-full bg-orange-600" />
                      </span>
                    ) : (
                      <span className="h-10 w-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-500">{index + 1}</span>
                      </span>
                    )}
                  </div>
                  <span className="mt-3 text-sm font-medium text-gray-900">
                    {step.label}
                  </span>
                </li>
              )}
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
}