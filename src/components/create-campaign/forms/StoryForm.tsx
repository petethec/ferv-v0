import React from 'react';
import { FormSection } from './components/FormSection';
import { FormField } from './components/FormField';

interface StoryFormData {
  description: string;
  risks: string;
  timeline: string;
}

interface StoryFormProps {
  data: StoryFormData;
  onUpdate: (data: StoryFormData) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StoryForm: React.FC<StoryFormProps> = ({
  data,
  onUpdate,
  onNext,
  onBack
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormSection
        title="Campaign Story"
        description="Tell your story and explain your project"
      >
        <FormField
          label="Full Description"
          required
          tooltip="Explain what you're creating and why it matters"
        >
          <textarea
            value={data.description}
            onChange={(e) => onUpdate({ ...data, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
            rows={6}
            placeholder="Tell your story..."
          />
        </FormField>
      </FormSection>

      <div className="grid grid-cols-2 gap-4">
        <FormSection
          title="Risks & Challenges"
          description="Address potential concerns"
        >
          <FormField
            label="Potential Risks"
            required
            tooltip="Explain how you'll handle potential challenges"
          >
            <textarea
              value={data.risks}
              onChange={(e) => onUpdate({ ...data, risks: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
              rows={4}
              placeholder="Describe potential risks..."
            />
          </FormField>
        </FormSection>

        <FormSection
          title="Project Timeline"
          description="Share your execution plan"
        >
          <FormField
            label="Timeline"
            required
            tooltip="Outline key milestones and dates"
          >
            <textarea
              value={data.timeline}
              onChange={(e) => onUpdate({ ...data, timeline: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
              rows={4}
              placeholder="Outline your timeline..."
            />
          </FormField>
        </FormSection>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
        >
          Continue
        </button>
      </div>
    </form>
  );
};