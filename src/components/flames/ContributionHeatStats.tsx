import React from 'react';
import { LineChart, Clock, TrendingUp } from 'lucide-react';
import { ContributionChart } from './ContributionChart';
import { RecentContributions } from './RecentContributions';
import type { Contribution } from '../../types/flames';

interface ContributionHeatStatsProps {
  projectId: string;
  contributions: Contribution[];
}

export const ContributionHeatStats: React.FC<ContributionHeatStatsProps> = ({
  contributions
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Contribution Activity</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Last 24 hours</span>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-700">Contribution Trend</h3>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+23% vs. previous day</span>
            </div>
          </div>
          <ContributionChart contributions={contributions} />
        </div>

        <div>
          <h3 className="font-medium text-gray-700 mb-4">Recent Activity</h3>
          <RecentContributions contributions={contributions} />
        </div>
      </div>
    </div>
  );
};