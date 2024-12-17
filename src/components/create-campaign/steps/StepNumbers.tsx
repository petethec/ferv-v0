import React from 'react';
import { type Step } from './types';

interface StepNumbersProps {
  steps: Array<{ id: string; label: string }>;
  currentStep: Step;
}

export const StepNumbers: React.FC<StepNumbersProps> = ({ steps, currentStep }) => {
  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className="flex justify-between items-center max-w-2xl mx-auto mb-12">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-colors ${
                isCompleted
                  ? 'bg-orange-600 text-white'
                  : isCurrent
                  ? 'bg-orange-100 text-orange-600'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {index + 1}
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
  );
};