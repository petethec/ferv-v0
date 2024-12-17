import React from 'react';
import { DollarSign, ExternalLink } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { StatusBadge } from '../status/StatusBadge';
import { ProgressBar } from '../progress/ProgressBar';
import { ProgressStats } from '../progress/ProgressStats';
import { VotingForm } from '../voting/VotingForm';

interface DonationConsequenceProps {
  consequence: Consequence;
  onVote: (amount: number) => void;
}

export const DonationConsequence: React.FC<DonationConsequenceProps> = ({
  consequence,
  onVote,
}) => {
  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;

  return (
    <div className="border border-green-100 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <StatusBadge status={consequence.status} tier={consequence.tier} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{consequence.title}</h3>
        </div>
        
        <a
          href={`https://example.com/org/${consequence.executionDetails.targetEntity}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-green-600 hover:text-green-700"
        >
          View Organization <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>

      <p className="text-gray-600 mb-4">{consequence.description}</p>

      <div className="bg-green-50 rounded-lg p-4 mb-4">
        <h4 className="font-medium text-green-800 mb-2">Donation Details</h4>
        <div className="text-sm text-green-700">
          <p>Target Organization: {consequence.executionDetails.targetEntity}</p>
          <p>Purpose: {consequence.executionDetails.customParameters?.donationPurpose}</p>
        </div>
      </div>

      <ProgressBar progress={progress} className="mb-2" />
      <ProgressStats votes={consequence.votes} progress={progress} className="mb-4" />
      
      <VotingForm onVote={onVote} />
    </div>
  );
};