import React from 'react';
import { Calendar, Package } from 'lucide-react';
import { Reward } from '../../types';

interface RewardsListProps {
  rewards: Reward[];
}

export const RewardsList: React.FC<RewardsListProps> = ({ rewards }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Select a Reward</h2>
      <div className="space-y-4">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-orange-600 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-gray-900">{reward.title}</h3>
              <span className="text-xl font-bold text-orange-600">
                ${reward.amount}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{reward.description}</p>
            
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center">
                <Package className="w-4 h-4 mr-2" />
                {reward.itemsAvailable ? (
                  <span>
                    {reward.itemsAvailable - reward.itemsClaimed} of {reward.itemsAvailable} available
                  </span>
                ) : (
                  <span>Unlimited</span>
                )}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  Estimated delivery: {new Date(reward.estimatedDelivery).toLocaleDateString()}
                </span>
              </div>
            </div>

            {reward.itemsAvailable && reward.itemsAvailable <= reward.itemsClaimed ? (
              <button className="mt-4 w-full bg-gray-100 text-gray-500 py-2 px-4 rounded-md cursor-not-allowed">
                Sold Out
              </button>
            ) : (
              <button className="mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
                Select Reward
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};