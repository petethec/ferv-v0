import { useState } from 'react';
import { Step } from '../components/create-campaign/steps/types';

export const useMultiStepForm = (steps: Step[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => setCurrentStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const prevStep = () => setCurrentStepIndex((i) => Math.max(i - 1, 0));
  const goToStep = (index: number) => setCurrentStepIndex(index);

  return {
    currentStep: steps[currentStepIndex],
    nextStep,
    prevStep,
    goToStep,
    currentStepIndex,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1
  };
};