import React from 'react';
import { Shield, AlertTriangle, Users } from 'lucide-react';
import { VotingProgress } from './VotingProgress';
import { VotingForm } from './VotingForm';
import { VoteHistory } from './VoteHistory';
import type { Consequence } from '../../../types/accountability';
import { useConsequenceVoting } from '../hooks/useConsequenceVoting';

interface VotingDashboardProps {
  consequence: Consequence;
}

export const VotingDashboard: React.FC<VotingDashboardProps> = ({ consequence }) => {
  const { isVoting, voteAmount, error, handleVote } = useConsequenceVoting(consequence);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Vote on Consequence</h2>
          <p className="text-gray-600 mt-1">Support this consequence with your vote</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          consequence.tier === 1 ? 'bg-yellow-100 text-yellow-800' :
          consequence.tier === 2 ? 'bg-orange-100 text-orange-800' :
          'bg-red-100 text-red-800'
        }`}>
          Tier {consequence.tier}
        </div>
      </div>

      <VotingProgress consequence={consequence} />
      <VotingForm onVote={handleVote} isLoading={isVoting} error={error} />
      <VoteHistory consequence={consequence} />
    </div>
  );
};