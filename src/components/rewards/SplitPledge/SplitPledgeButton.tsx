import React, { useState } from 'react';
import { Users, Share2, AlertCircle } from 'lucide-react';
import { SplitPledgeModal } from './SplitPledgeModal';
import type { Reward } from '../../../types';

interface SplitPledgeButtonProps {
  reward: Reward;
}

export const SplitPledgeButton: React.FC<SplitPledgeButtonProps> = ({ reward }) => {
  const [showModal, setShowModal] = useState(false);

  const isEligible = reward.amount >= 100; // Only allow splitting for rewards $100+

  if (!isEligible) return null;

  return (
    <>
      <div className="mt-4 border-t border-gray-100 pt-4">
        <button
          onClick={() => setShowModal(true)}
          className="w-full flex items-center justify-center px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-md hover:bg-orange-50 transition-colors group"
        >
          <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Split This Reward
        </button>
        
        <div className="mt-2 flex items-start space-x-2 text-xs text-gray-500">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <p>
            Share the cost with 2-10 backers. Each person must contribute at
            least 25% of the total reward value.
          </p>
        </div>
      </div>

      {showModal && (
        <SplitPledgeModal
          reward={reward}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};