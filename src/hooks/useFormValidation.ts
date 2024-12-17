import { useState } from 'react';
import { Step } from '../components/create-campaign/steps/types';
import { validateStep } from '../utils/campaign/validation';

export const useFormValidation = (currentStep: Step) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateCurrentStep = (data: any) => {
    const validationErrors = validateStep(currentStep, data);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    errors,
    validateCurrentStep,
    clearErrors: () => setErrors({})
  };
};