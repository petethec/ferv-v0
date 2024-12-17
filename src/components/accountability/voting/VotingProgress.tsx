import React from 'react';
import { Target, Clock } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { useConsequenceProgress } from '../hooks/useConsequenceProgress';
import { useConsequenceDeadline } from '../hooks/useConsequenceDeadline';

interface VotingProgressProps {
  consequence: Consequence;
}

export const VotingProgress: React.FC<VotingProgressProps> = ({ consequence }) => {
  const { progress, remainingAmount, formattedProgress } = useConsequenceProgress(consequence);
  const { daysLeft, urgencyLevel } = useConsequenceDeadline(consequence);

  return (
    <div className="space-y-4 mb-6">
      <div>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{formattedProgress}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center text-sm text-gray-600">
          <Target className="w-4 h-4 mr-2" />
          <span>${remainingAmount.toLocaleString()} needed</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{daysLeft} days left</span>
        </div>
      </div>
    </div>
  );
};