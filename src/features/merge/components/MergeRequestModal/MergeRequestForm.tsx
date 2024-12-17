import React from 'react';
import { useForm } from 'react-hook-form';
import type { Project } from '../../../../types';

interface MergeRequestFormData {
  message: string;
  keepRewards: boolean;
  combinedGoal: number;
}

interface MergeRequestFormProps {
  sourceProject: Project;
  targetProject: Project;
  onSubmit: (data: MergeRequestFormData) => void;
}

export const MergeRequestForm: React.FC<MergeRequestFormProps> = ({
  sourceProject,
  targetProject,
  onSubmit
}) => {
  const { register, handleSubmit } = useForm<MergeRequestFormData>({
    defaultValues: {
      keepRewards: true,
      combinedGoal: sourceProject.goal + targetProject.goal
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message to Project Creator
        </label>
        <textarea
          {...register('message', { required: 'Please provide a message' })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          placeholder="Explain why you think these projects would work well together..."
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          {...register('keepRewards')}
          className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700">
          Keep both projects' reward tiers in the merged campaign
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Combined Funding Goal
        </label>
        <input
          type="number"
          {...register('combinedGoal', { min: Math.max(sourceProject.goal, targetProject.goal) })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
    </form>
  );
};