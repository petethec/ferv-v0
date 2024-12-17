import React from 'react';
import { Scale, FileText } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { StatusBadge } from '../status/StatusBadge';
import { ProgressBar } from '../progress/ProgressBar';
import { ProgressStats } from '../progress/ProgressStats';
import { VotingForm } from '../voting/VotingForm';

interface LegalConsequenceProps {
  consequence: Consequence;
  onVote: (amount: number) => void;
}

export const LegalConsequence: React.FC<LegalConsequenceProps> = ({
  consequence,
  onVote,
}) => {
  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;

  return (
    <div className="border border-purple-100 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Scale className="w-5 h-5 text-purple-600" />
            <StatusBadge status={consequence.status} tier={consequence.tier} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{consequence.title}</h3>
        </div>
        
        <button className="flex items-center text-sm text-purple-600 hover:text-purple-700">
          View Documents <FileText className="w-4 h-4 ml-1" />
        </button>
      </div>

      <p className="text-gray-600 mb-4">{consequence.description}</p>

      <div className="bg-purple-50 rounded-lg p-4 mb-4">
        <h4 className="font-medium text-purple-800 mb-2">Legal Strategy</h4>
        <div className="text-sm text-purple-700">
          <p>Type: {consequence.executionDetails.customParameters?.legalStrategy}</p>
          <p>Jurisdiction: {consequence.executionDetails.customParameters?.jurisdiction}</p>
        </div>
      </div>

      <ProgressBar progress={progress} className="mb-2" />
      <ProgressStats votes={consequence.votes} progress={progress} className="mb-4" />
      
      <VotingForm onVote={onVote} />
    </div>
  );
};