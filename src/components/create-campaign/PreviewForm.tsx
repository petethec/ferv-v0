import React from 'react';
import { ProjectCard } from '../ProjectCard';

interface PreviewFormProps {
  data: any;
  onSubmit: () => void;
  onBack: () => void;
}

export const PreviewForm: React.FC<PreviewFormProps> = ({
  data,
  onSubmit,
  onBack
}) => {
  const previewProject = {
    id: 'preview',
    title: data.basics.title,
    description: data.basics.tagline,
    creator: 'You',
    goal: Number(data.basics.goal),
    currentAmount: 0,
    endDate: new Date(Date.now() + data.basics.duration * 24 * 60 * 60 * 1000),
    imageUrl: data.basics.imageUrl,
    category: data.basics.category,
    downvotes: 0,
    backers: 0,
    rewards: data.rewards,
    updates: [],
    communities: [],
    allowCoFunding: data.settings.allowCoFunding,
    liveSessions: [],
    feedbackThreads: []
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Preview Your Campaign</h3>

        <div className="max-w-md mx-auto">
          <ProjectCard project={previewProject} />
        </div>

        <div className="mt-8 p-4 bg-orange-50 rounded-lg">
          <h4 className="font-medium text-orange-800 mb-2">Ready to Launch?</h4>
          <p className="text-sm text-orange-600">
            Please review all details carefully. Once published, some information cannot
            be changed.
          </p>
        </div>
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
          type="button"
          onClick={onSubmit}
          className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Launch Campaign
        </button>
      </div>
    </div>
  );
};