import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Reward {
  id: string;
  title: string;
  description: string;
  amount: number;
  estimatedDelivery: string;
  shippingLocation: string;
  itemsAvailable?: number;
}

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
  const [newReward, setNewReward] = useState<Reward>({
    id: '',
    title: '',
    description: '',
    amount: 0,
    estimatedDelivery: '',
    shippingLocation: 'Worldwide'
  });

  const handleAddReward = () => {
    const reward = {
      ...newReward,
      id: Date.now().toString()
    };
    onUpdate([...rewards, reward]);
    setNewReward({
      id: '',
      title: '',
      description: '',
      amount: 0,
      estimatedDelivery: '',
      shippingLocation: 'Worldwide'
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
            <div
              key={reward.id}
              className="border border-gray-200 rounded-lg p-4 relative"
            >
              <button
                type="button"
                onClick={() => handleRemoveReward(reward.id)}
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
          ))}
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reward Title
              </label>
              <input
                type="text"
                value={newReward.title}
                onChange={(e) =>
                  setNewReward({ ...newReward, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount ($)
              </label>
              <input
                type="number"
                min="1"
                value={newReward.amount}
                onChange={(e) =>
                  setNewReward({ ...newReward, amount: Number(e.target.value) })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={newReward.description}
              onChange={(e) =>
                setNewReward({ ...newReward, description: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estimated Delivery
              </label>
              <input
                type="date"
                value={newReward.estimatedDelivery}
                onChange={(e) =>
                  setNewReward({
                    ...newReward,
                    estimatedDelivery: e.target.value
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shipping Location
              </label>
              <select
                value={newReward.shippingLocation}
                onChange={(e) =>
                  setNewReward({
                    ...newReward,
                    shippingLocation: e.target.value
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Worldwide">Worldwide</option>
                <option value="US Only">US Only</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddReward}
            className="mt-4 w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Reward
          </button>
        </div>
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