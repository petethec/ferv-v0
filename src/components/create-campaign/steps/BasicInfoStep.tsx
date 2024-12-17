import React from 'react';
import { FormSection } from '../shared/FormSection';
import { BasicInfoFields } from '../forms/basics/BasicInfoFields';
import { MediaFields } from '../forms/basics/MediaFields';
import { StepNavigation } from '../shared/StepNavigation';

interface BasicInfoStepProps {
  data: {
    title: string;
    category: string;
    goal: string;
    duration: number;
    imageUrl: string;
    tagline: string;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: string | number) => void;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
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
        title="Essential Details"
        description="Basic information about your campaign"
      >
        <BasicInfoFields
          data={data}
          errors={errors}
          onChange={onChange}
        />
      </FormSection>

      <FormSection
        title="Campaign Media"
        description="Add visual elements to your campaign"
      >
        <MediaFields
          data={data}
          errors={errors}
          onChange={onChange}
        />
      </FormSection>

      <StepNavigation
        onNext={onNext}
        onBack={onBack}
        isFirstStep={true}
        isLastStep={false}
        isValid={isValid}
      />
    </div>
  );
};