import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: string;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200">
        <div
          className="absolute top-0 left-0 h-full bg-orange-600 transition-all duration-500"
          style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
        />
      </div>

      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                  isCompleted
                    ? 'bg-orange-600 border-orange-600 text-white'
                    : isCurrent
                    ? 'border-orange-600 text-orange-600'
                    : 'border-gray-300 text-gray-300'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  isCurrent ? 'text-orange-600' : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};