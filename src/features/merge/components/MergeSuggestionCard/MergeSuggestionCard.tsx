import React from 'react';
import { GitMerge, Users, Target, ArrowRight } from 'lucide-react';
import type { Project } from '../../../../types';
import { useMergeAnalysis } from '../../hooks/useMergeAnalysis';

interface MergeSuggestionCardProps {
  sourceProject: Project;
  targetProject: Project;
  onRequestMerge: () => void;
}

export const MergeSuggestionCard: React.FC<MergeSuggestionCardProps> = ({
  sourceProject,
  targetProject,
  onRequestMerge
}) => {
  const { similarityScore, reasons, sharedBackers, combinedGoal } = useMergeAnalysis(
    sourceProject,
    targetProject
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:border-orange-200 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{targetProject.title}</h3>
          <div className="flex items-center mt-1 space-x-4 text-sm text-gray-600">
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
              {similarityScore}% Match
            </span>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{sharedBackers} shared backers</span>
            </div>
          </div>
        </div>
        <button
          onClick={onRequestMerge}
          className="flex items-center px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
        >
          <GitMerge className="w-4 h-4 mr-2" />
          Request Merge
        </button>
      </div>

      <div className="space-y-4 mb-6">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
            {reason}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-600">
          <Target className="w-4 h-4 mr-1" />
          <span>Combined Goal: ${combinedGoal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};