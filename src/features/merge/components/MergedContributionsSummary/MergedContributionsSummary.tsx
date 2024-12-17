import React from 'react';
import { Users, Target } from 'lucide-react';
import type { Project } from '../../../../types';

interface MergedContributionsSummaryProps {
  sourceProject: Project;
  targetProject: Project;
  sharedBackers: number;
  totalBackers: number;
}

export const MergedContributionsSummary: React.FC<MergedContributionsSummaryProps> = ({
  sourceProject,
  targetProject,
  sharedBackers,
  totalBackers
}) => {
  const combinedAmount = sourceProject.currentAmount + targetProject.currentAmount;
  const combinedGoal = sourceProject.goal + targetProject.goal;
  const progress = (combinedAmount / combinedGoal) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Combined Contributions</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">
            ${combinedAmount.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Raised</div>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">
            {totalBackers.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Backers</div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Combined Progress</span>
            <span>{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{sharedBackers} shared backers</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Target className="w-4 h-4 mr-1" />
            <span>${combinedGoal.toLocaleString()} combined goal</span>
          </div>
        </div>
      </div>
    </div>
  );
};