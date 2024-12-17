import React from 'react';

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Campaign Story
        </label>
        <textarea
          value={data.description}
          onChange={(e) => onUpdate({ ...data, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={8}
          placeholder="Tell your story. What are you creating? Why does it matter? How will you make it happen?"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Risks and Challenges
        </label>
        <textarea
          value={data.risks}
          onChange={(e) => onUpdate({ ...data, risks: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={4}
          placeholder="What are the potential risks and challenges? How will you overcome them?"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Timeline
        </label>
        <textarea
          value={data.timeline}
          onChange={(e) => onUpdate({ ...data, timeline: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={4}
          placeholder="What are the key milestones and when do you expect to achieve them?"
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};