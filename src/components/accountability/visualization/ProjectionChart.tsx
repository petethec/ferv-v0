import React from 'react';
import { TrendingUp, Calendar } from 'lucide-react';
import { useConsequenceStats } from '../hooks/useConsequenceStats';
import type { Consequence } from '../../../types/accountability';

interface ProjectionChartProps {
  consequence: Consequence;
  className?: string;
}

export const ProjectionChart: React.FC<ProjectionChartProps> = ({
  consequence,
  className = ''
}) => {
  const stats = useConsequenceStats(consequence);
  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;

  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">Funding Projection</h3>
        {stats.projectedCompletion && (
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            Projected completion: {stats.projectedCompletion.toLocaleDateString()}
          </div>
        )}
      </div>

      <div className="relative pt-2">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-orange-600">
              {progress.toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-600 transition-all duration-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 rounded p-3">
          <div className="text-sm text-gray-500">Last 24 Hours</div>
          <div className="font-medium">{stats.votesLastDay} votes</div>
        </div>
        <div className="bg-gray-50 rounded p-3">
          <div className="text-sm text-gray-500">Last 7 Days</div>
          <div className="font-medium">{stats.votesLastWeek} votes</div>
        </div>
      </div>
    </div>
  );
};