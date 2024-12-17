import React from 'react';
import { Megaphone, Share2 } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { StatusBadge } from '../status/StatusBadge';
import { ProgressBar } from '../progress/ProgressBar';
import { ProgressStats } from '../progress/ProgressStats';
import { VotingForm } from '../voting/VotingForm';

interface CampaignConsequenceProps {
  consequence: Consequence;
  onVote: (amount: number) => void;
}

export const CampaignConsequence: React.FC<CampaignConsequenceProps> = ({
  consequence,
  onVote,
}) => {
  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;
  const platforms = consequence.executionDetails.customParameters?.platforms || [];

  return (
    <div className="border border-blue-100 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Megaphone className="w-5 h-5 text-blue-600" />
            <StatusBadge status={consequence.status} tier={consequence.tier} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{consequence.title}</h3>
        </div>
        
        <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
          Share Campaign <Share2 className="w-4 h-4 ml-1" />
        </button>
      </div>

      <p className="text-gray-600 mb-4">{consequence.description}</p>

      <div className="bg-blue-50 rounded-lg p-4 mb-4">
        <h4 className="font-medium text-blue-800 mb-2">Campaign Details</h4>
        <div className="text-sm text-blue-700">
          <p>Duration: {consequence.executionDetails.duration} days</p>
          <div className="flex items-center mt-1">
            <span className="mr-2">Platforms:</span>
            <div className="flex space-x-2">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProgressBar progress={progress} className="mb-2" />
      <ProgressStats votes={consequence.votes} progress={progress} className="mb-4" />
      
      <VotingForm onVote={onVote} />
    </div>
  );
};