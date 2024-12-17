import React from 'react';
import { formatCurrency } from '../../../utils/formatting';
import type { Reward } from '../../../types';
import type { ScheduleType } from './types';

interface RewardActionsProps {
  reward: Reward;
  scheduleType: ScheduleType;
  splitAmount: number;
  onPledge: (amount: number) => void;
}

export const RewardActions: React.FC<RewardActionsProps> = ({
  reward,
  scheduleType,
  splitAmount,
  onPledge
}) => {
  const isSoldOut = reward.itemsAvailable && 
    reward.itemsAvailable <= reward.itemsClaimed;

  return (
    <div className="space-y-4">
      {scheduleType !== 'full' && (
        <div className="text-sm text-gray-600">
          Total pledge amount: {formatCurrency(reward.amount)}
        </div>
      )}

      {isSoldOut ? (
        <button
          disabled
          className="w-full bg-gray-100 text-gray-500 py-2 px-4 rounded-md cursor-not-allowed"
        >
          Sold Out
        </button>
      ) : (
        <button
          onClick={() => onPledge(reward.amount)}
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
        >
          {scheduleType === 'full' ? 'Pledge' : `Pledge ${formatCurrency(splitAmount)} ${scheduleType}`}
        </button>
      )}
    </div>
  );
};