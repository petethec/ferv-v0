import React from 'react';
import { formatDistanceToNow } from '../../utils/formatting';
import type { Contribution } from '../../types/flames';

interface RecentContributionsProps {
  contributions: Contribution[];
}

export const RecentContributions: React.FC<RecentContributionsProps> = ({
  contributions
}) => {
  const sortedContributions = [...contributions]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      {sortedContributions.map((contribution) => (
        <div
          key={contribution.id}
          className="flex items-center justify-between py-2"
        >
          <div className="flex items-center space-x-3">
            <img
              src={`https://api.dicebear.com/7.x/personas/svg?seed=${contribution.backerName}`}
              alt={contribution.backerName}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-medium text-gray-900">
                {contribution.backerName}
              </div>
              <div className="text-sm text-gray-500">
                {formatDistanceToNow(contribution.timestamp)}
              </div>
            </div>
          </div>
          <div className="text-lg font-semibold text-orange-600">
            ${contribution.amount.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};