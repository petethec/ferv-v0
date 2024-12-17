import React from 'react';
import { ArrowRight, Users, Target, Zap } from 'lucide-react';
import type { Project } from '../../types';

interface MergeSuggestionCardProps {
  sourceProject: Project;
  targetProject: Project;
  similarityScore: number;
  onRequestMerge: () => void;
}

export const MergeSuggestionCard: React.FC<MergeSuggestionCardProps> = ({
  sourceProject,
  targetProject,
  similarityScore,
  onRequestMerge
}) => {
  const combinedGoal = sourceProject.goal + targetProject.goal;
  const combinedBackers = sourceProject.backers + targetProject.backers;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">{targetProject.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{targetProject.description}</p>
        </div>
        <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {similarityScore}% Match
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            ${combinedGoal.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Combined Goal</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {combinedBackers.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Total Backers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {targetProject.category}
          </div>
          <div className="text-sm text-gray-500">Category</div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <Target className="w-4 h-4 mr-2" />
          <span>Similar funding goals and timeline</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span>Overlapping backer demographics</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Zap className="w-4 h-4 mr-2" />
          <span>Complementary reward structures</span>
        </div>
      </div>

      <button
        onClick={onRequestMerge}
        className="w-full flex items-center justify-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
      >
        Request Merge
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};