import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';
import { useConsequenceAnalytics } from '../hooks/useConsequenceAnalytics';
import type { Consequence } from '../../../types/accountability';

interface AnalyticsDashboardProps {
  consequence: Consequence;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ consequence }) => {
  const analytics = useConsequenceAnalytics(consequence);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Analytics Overview</h3>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <DollarSign className="w-4 h-4 mr-1" />
            Average Vote
          </div>
          <div className="text-2xl font-bold text-gray-900">
            ${analytics.averageVoteAmount.toFixed(2)}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Users className="w-4 h-4 mr-1" />
            Total Voters
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {consequence.votes}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <TrendingUp className="w-4 h-4 mr-1" />
            Progress
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {((consequence.currentAmount / consequence.fundingGoal) * 100).toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Calendar className="w-4 h-4 mr-1" />
            Projected Completion
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {analytics.projectedCompletion
              ? analytics.projectedCompletion.toLocaleDateString()
              : 'N/A'}
          </div>
        </div>
      </div>

      {/* Add trend chart and other analytics visualizations here */}
    </div>
  );
};