import React from 'react';
import { Clock } from 'lucide-react';
import type { ConsequenceVote } from '../../../types/accountability';

interface VoteHistoryListProps {
  votes: ConsequenceVote[];
  className?: string;
}

export const VoteHistoryList: React.FC<VoteHistoryListProps> = ({
  votes,
  className = ''
}) => {
  const sortedVotes = [...votes].sort((a, b) => 
    b.timestamp.getTime() - a.timestamp.getTime()
  );

  return (
    <div className={className}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Vote History</h3>
      
      <div className="space-y-4">
        {sortedVotes.map((vote) => (
          <div
            key={vote.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <div className="font-medium text-gray-900">
                ${vote.amount.toLocaleString()}
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                {vote.timestamp.toLocaleDateString()}
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              Vote ID: {vote.id.slice(0, 8)}
            </div>
          </div>
        ))}

        {votes.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No votes yet
          </div>
        )}
      </div>
    </div>
  );
};