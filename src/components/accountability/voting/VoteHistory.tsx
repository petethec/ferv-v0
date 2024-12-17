import React from 'react';
import { Clock } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { useConsequenceHistory } from '../hooks/useConsequenceHistory';
import { formatDistanceToNow } from '../../../utils/formatting';

interface VoteHistoryProps {
  consequence: Consequence;
}

export const VoteHistory: React.FC<VoteHistoryProps> = ({ consequence }) => {
  const { history, isLoading } = useConsequenceHistory(consequence);

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Votes</h3>
      <div className="space-y-4">
        {history.map((entry) => (
          <div key={entry.timestamp.getTime()} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={`https://api.dicebear.com/7.x/personas/svg?seed=${entry.description}`}
                alt="Voter"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{entry.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {formatDistanceToNow(entry.timestamp)}
                </div>
              </div>
            </div>
            {entry.type === 'vote' && entry.metadata?.amount && (
              <span className="text-sm font-medium text-orange-600">
                ${entry.metadata.amount.toLocaleString()}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};