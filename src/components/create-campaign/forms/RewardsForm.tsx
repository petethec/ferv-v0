import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { RewardItem } from './RewardItem';
import { NewRewardForm } from './NewRewardForm';
import type { Reward } from '../../../types';

interface RewardsFormProps {
  rewards: Reward[];
  onUpdate: (rewards: Reward[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export const RewardsForm: React.FC<RewardsFormProps> = ({
  rewards,
  onUpdate,
  onNext,
  onBack
}) => {
  const [newReward, setNewReward] = useState<Omit<Reward, 'id'>>({
    title: '',
    description: '',
    amount: 0,
    estimatedDelivery: '',
    shippingLocation: 'Worldwide',
    itemsAvailable: undefined,
    itemsClaimed: 0
  });

  const handleAddReward = () => {
    const reward = {
      ...newReward,
      id: Date.now().toString()
    };
    onUpdate([...rewards, reward]);
    setNewReward({
      title: '',
      description: '',
      amount: 0,
      estimatedDelivery: '',
      shippingLocation: 'Worldwide',
      itemsAvailable: undefined,
      itemsClaimed: 0
    });
  };

  const handleRemoveReward = (id: string) => {
    onUpdate(rewards.filter(reward => reward.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Add Reward Tiers</h3>

        <div className="space-y-4">
          {rewards.map((reward) => (
            <RewardItem 
              key={reward.id} 
              reward={reward} 
              onRemove={() => handleRemoveReward(reward.id)} 
            />
          ))}
        </div>

        <NewRewardForm
          reward={newReward}
          onChange={setNewReward}
          onAdd={handleAddReward}
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};