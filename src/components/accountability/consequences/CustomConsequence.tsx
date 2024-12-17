import React from 'react';
import { AlertCircle, Calendar } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { StatusBadge } from '../status/StatusBadge';
import { ProgressBar } from '../progress/ProgressBar';
import { ProgressStats } from '../progress/ProgressStats';
import { VotingForm } from '../voting/VotingForm';

interface CustomConsequenceProps {
  consequence: Consequence;
  onVote: (amount: number) => void;
}

export const CustomConsequence: React.FC<CustomConsequenceProps> = ({
  consequence,
  onVote
}) => {
  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;
  const { customParameters } = consequence.executionDetails;

  return (
    <div className="border border-indigo-100 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="w-5 h-5 text-indigo-600" />
            <StatusBadge status={consequence.status} tier={consequence.tier} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{consequence.title}</h3>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{consequence.description}</p>

      <div className="bg-indigo-50 rounded-lg p-4 mb-4">
        <h4 className="font-medium text-indigo-800 mb-2">Custom Action Details</h4>
        <div className="text-sm text-indigo-700 space-y-2">
          {Object.entries(customParameters || {}).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <span className="capitalize mr-2">{key.replace(/([A-Z])/g, ' $1')}:</span>
              <span>{value?.toString()}</span>
            </div>
          ))}
        </div>
      </div>

      <ProgressBar progress={progress} className="mb-2" />
      <ProgressStats votes={consequence.votes} progress={progress} className="mb-4" />
      
      <VotingForm onVote={onVote} />
    </div>
  );
};