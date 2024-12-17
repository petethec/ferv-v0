import React from 'react';
import { FormField } from '../../shared/FormField';

interface StoryFieldsProps {
  data: {
    description: string;
    risks: string;
    timeline: string;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export const StoryFields: React.FC<StoryFieldsProps> = ({
  data,
  errors,
  onChange
}) => {
  return (
    <>
      <FormField
        label="Campaign Story"
        required
        error={errors.description}
        tooltip="Tell your story and explain what you're creating"
      >
        <textarea
          value={data.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          rows={6}
          placeholder="Tell your story..."
        />
      </FormField>

      <FormField
        label="Risks & Challenges"
        required
        error={errors.risks}
        tooltip="Explain potential challenges and how you'll handle them"
      >
        <textarea
          value={data.risks}
          onChange={(e) => onChange('risks', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          rows={4}
          placeholder="Describe potential risks..."
        />
      </FormField>

      <FormField
        label="Project Timeline"
        required
        error={errors.timeline}
        tooltip="Outline your execution plan and milestones"
      >
        <textarea
          value={data.timeline}
          onChange={(e) => onChange('timeline', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          rows={4}
          placeholder="Outline your timeline..."
        />
      </FormField>
    </>
  );
};