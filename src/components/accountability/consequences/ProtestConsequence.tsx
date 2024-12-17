import React from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { StatusBadge } from '../status/StatusBadge';
import { ProgressBar } from '../progress/ProgressBar';
import { ProgressStats } from '../progress/ProgressStats';
import { VotingForm } from '../voting/VotingForm';

interface ProtestConsequenceProps {
  consequence: Consequence;
  onVote: (amount: number) => void;
}

export const ProtestConsequence: React.FC<ProtestConsequenceProps> = ({
  consequence,
  onVote,
}) => {
  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;
  const { location, duration, customParameters } = consequence.executionDetails;

  return (
    <div className="border border-red-100 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-5 h-5 text-red-600" />
            <StatusBadge status={consequence.status} tier={consequence.tier} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{consequence.title}</h3>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{consequence.description}</p>

      <div className="bg-red-50 rounded-lg p-4 mb-4">
        <h4 className="font-medium text-red-800 mb-2">Protest Details</h4>
        <div className="text-sm text-red-700 space-y-2">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Location: {location}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Duration: {duration} days
          </div>
          {customParameters?.participantGoal && (
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Target Participants: {customParameters.participantGoal}
            </div>
          )}
        </div>
      </div>

      <ProgressBar progress={progress} className="mb-2" />
      <ProgressStats votes={consequence.votes} progress={progress} className="mb-4" />
      
      <VotingForm onVote={onVote} />
    </div>
  );
};