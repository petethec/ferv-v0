import React from 'react';
import { useConsequenceStats } from '../hooks/useConsequenceStats';
import type { Consequence } from '../../../types/accountability';

interface VotingDistributionChartProps {
  consequence: Consequence;
  className?: string;
}

export const VotingDistributionChart: React.FC<VotingDistributionChartProps> = ({
  consequence,
  className = ''
}) => {
  const stats = useConsequenceStats(consequence);

  // Mock distribution data
  const distribution = [
    { range: '0-50', count: Math.floor(consequence.votes * 0.3) },
    { range: '51-100', count: Math.floor(consequence.votes * 0.4) },
    { range: '101-500', count: Math.floor(consequence.votes * 0.2) },
    { range: '501+', count: Math.floor(consequence.votes * 0.1) }
  ];

  const maxCount = Math.max(...distribution.map(d => d.count));

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900">Vote Distribution</h3>
      
      <div className="space-y-3">
        {distribution.map((range) => (
          <div key={range.range} className="space-y-1">
            <div className="flex justify-between text-sm text-gray-600">
              <span>${range.range}</span>
              <span>{range.count} votes</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(range.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
        <div>
          <span className="block text-gray-500">Average Vote</span>
          <span className="font-medium">${stats.averageVoteSize.toFixed(2)}</span>
        </div>
        <div>
          <span className="block text-gray-500">Largest Vote</span>
          <span className="font-medium">${stats.largestVote.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};