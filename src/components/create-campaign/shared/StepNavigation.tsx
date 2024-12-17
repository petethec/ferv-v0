import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface StepNavigationProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isValid: boolean;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
  isValid
}) => {
  return (
    <div className="flex justify-between pt-6">
      <button
        type="button"
        onClick={onBack}
        disabled={isFirstStep}
        className={`flex items-center px-4 py-2 border border-gray-300 rounded-md ${
          isFirstStep
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      
      <button
        type="button"
        onClick={onNext}
        disabled={!isValid}
        className={`flex items-center px-4 py-2 rounded-md ${
          isValid
            ? 'bg-orange-600 text-white hover:bg-orange-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isLastStep ? 'Launch Campaign' : 'Continue'}
        {!isLastStep && <ArrowRight className="w-4 h-4 ml-2" />}
      </button>
    </div>
  );
};