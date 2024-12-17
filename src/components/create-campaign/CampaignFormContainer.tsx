import React, { useEffect } from 'react';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { useFormValidation } from '../../hooks/useFormValidation';
import { BasicInfoStep } from './steps/BasicInfoStep';
import { StoryStep } from './steps/StoryStep';
import { RewardsStep } from './steps/RewardsStep';
import { steps } from './steps/types';
import { saveDraft, loadDraft, clearDraft } from '../../utils/campaign/persistence';

const INITIAL_DATA = {
  basics: {
    title: '',
    category: '',
    goal: '',
    duration: 30,
    imageUrl: '',
    tagline: ''
  },
  story: {
    description: '',
    risks: '',
    timeline: ''
  },
  rewards: []
};

export const CampaignFormContainer: React.FC = () => {
  const [formData, setFormData] = React.useState(INITIAL_DATA);
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep } = useMultiStepForm(steps);
  const { errors, validateCurrentStep, clearErrors } = useFormValidation(currentStep);

  useEffect(() => {
    const savedData = loadDraft();
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleStepChange = (field: string, value: any) => {
    const updatedData = {
      ...formData,
      [currentStep]: {
        ...formData[currentStep as keyof typeof formData],
        [field]: value
      }
    };
    setFormData(updatedData);
    saveDraft(updatedData);
  };

  const handleNext = () => {
    const isValid = validateCurrentStep(formData[currentStep as keyof typeof formData]);
    if (isValid) {
      clearErrors();
      nextStep();
    }
  };

  const handleSubmit = async () => {
    const isValid = validateCurrentStep(formData[currentStep as keyof typeof formData]);
    if (isValid) {
      try {
        // TODO: Implement API call to submit campaign
        clearDraft();
        // Redirect to success page or dashboard
      } catch (error) {
        console.error('Failed to submit campaign:', error);
      }
    }
  };

  const renderStep = () => {
    const stepProps = {
      errors,
      onNext: isLastStep ? handleSubmit : handleNext,
      onBack: prevStep,
      isValid: Object.keys(errors).length === 0
    };

    switch (currentStep) {
      case 'basics':
        return (
          <BasicInfoStep
            {...stepProps}
            data={formData.basics}
            onChange={(field, value) => handleStepChange(field, value)}
          />
        );
      case 'story':
        return (
          <StoryStep
            {...stepProps}
            data={formData.story}
            onChange={(field, value) => handleStepChange(field, value)}
          />
        );
      case 'rewards':
        return (
          <RewardsStep
            {...stepProps}
            data={formData.rewards}
            onChange={(rewards) => handleStepChange('rewards', rewards)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {renderStep()}
    </div>
  );
};