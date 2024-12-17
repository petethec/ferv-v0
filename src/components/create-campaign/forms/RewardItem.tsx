import React from 'react';
import { X } from 'lucide-react';
import type { Reward } from '../../../types';

interface RewardItemProps {
  reward: Reward;
  onRemove: () => void;
}

export const RewardItem: React.FC<RewardItemProps> = ({ reward, onRemove }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 relative">
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium text-gray-900">{reward.title}</h4>
          <p className="text-sm text-gray-600">{reward.description}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-orange-600">
            ${reward.amount}
          </div>
          <div className="text-sm text-gray-500">
            {reward.shippingLocation}
          </div>
        </div>
      </div>
    </div>
  );
};