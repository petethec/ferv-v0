import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../../../../types';

interface MergePreviewProps {
  sourceProject: Project;
  targetProject: Project;
  combinedGoal: number;
}

export const MergePreview: React.FC<MergePreviewProps> = ({
  sourceProject,
  targetProject,
  combinedGoal
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-medium text-gray-900 mb-4">Merge Preview</h3>
      
      <div className="flex items-center justify-between space-x-4">
        <div className="flex-1 p-4 bg-white rounded border border-gray-200">
          <h4 className="font-medium text-sm">{sourceProject.title}</h4>
          <p className="text-sm text-gray-500 mt-1">${sourceProject.goal.toLocaleString()} goal</p>
        </div>

        <ArrowRight className="flex-shrink-0 w-5 h-5 text-gray-400" />

        <div className="flex-1 p-4 bg-white rounded border border-gray-200">
          <h4 className="font-medium text-sm">{targetProject.title}</h4>
          <p className="text-sm text-gray-500 mt-1">${targetProject.goal.toLocaleString()} goal</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-orange-50 rounded border border-orange-200">
        <h4 className="font-medium text-orange-900">Combined Campaign</h4>
        <p className="text-sm text-orange-800 mt-1">
          New Funding Goal: ${combinedGoal.toLocaleString()}
        </p>
      </div>
    </div>
  );
};