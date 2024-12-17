import React, { useState } from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import type { Consequence } from '../../types/accountability';

interface ConsequenceTierCardProps {
  consequence: Consequence;
  onVote: (consequenceId: string, amount: number) => void;
}

export const ConsequenceTierCard: React.FC<ConsequenceTierCardProps> = ({
  consequence,
  onVote
}) => {
  const [pledgeAmount, setPledgeAmount] = useState<string>('');
  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;

  const handleVote = () => {
    const amount = Number(pledgeAmount);
    if (amount > 0) {
      onVote(consequence.id, amount);
      setPledgeAmount('');
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-orange-200 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              consequence.tier === 1 ? 'bg-yellow-100 text-yellow-800' :
              consequence.tier === 2 ? 'bg-orange-100 text-orange-800' :
              'bg-red-100 text-red-800'
            }`}>
              Tier {consequence.tier}
            </span>
            <span className="text-sm text-gray-500">
              {consequence.type.charAt(0).toUpperCase() + consequence.type.slice(1)}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mt-2">{consequence.title}</h3>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-orange-600">
            ${consequence.currentAmount.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">
            of ${consequence.fundingGoal.toLocaleString()}
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{consequence.description}</p>

      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>{consequence.votes} votes</span>
          <span>{progress.toFixed(1)}% funded</span>
        </div>
      </div>

      <div className="flex space-x-4">
        <input
          type="number"
          value={pledgeAmount}
          onChange={(e) => setPledgeAmount(e.target.value)}
          placeholder="Enter amount"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={handleVote}
          className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Vote & Pledge
        </button>
      </div>
    </div>
  );
};