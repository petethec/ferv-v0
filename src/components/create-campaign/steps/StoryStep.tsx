import React from 'react';
import { FormSection } from '../shared/FormSection';
import { StoryFields } from '../forms/story/StoryFields';
import { StepNavigation } from '../shared/StepNavigation';

interface StoryStepProps {
  data: {
    description: string;
    risks: string;
    timeline: string;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
}

export const StoryStep: React.FC<StoryStepProps> = ({
  data,
  errors,
  onChange,
  onNext,
  onBack,
  isValid
}) => {
  return (
    <div className="space-y-6">
      <FormSection
        title="Campaign Story"
        description="Tell your story and explain your project"
      >
        <StoryFields
          data={data}
          errors={errors}
          onChange={onChange}
        />
      </FormSection>

      <StepNavigation
        onNext={onNext}
        onBack={onBack}
        isFirstStep={false}
        isLastStep={false}
        isValid={isValid}
      />
    </div>
  );
};