import React from 'react';
import { Plus } from 'lucide-react';
import type { Reward } from '../../../types';

interface NewRewardFormProps {
  reward: Omit<Reward, 'id'>;
  onChange: (reward: Omit<Reward, 'id'>) => void;
  onAdd: () => void;
}

export const NewRewardForm: React.FC<NewRewardFormProps> = ({
  reward,
  onChange,
  onAdd
}) => {
  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reward Title
          </label>
          <input
            type="text"
            value={reward.title}
            onChange={(e) =>
              onChange({ ...reward, title: e.target.value })
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
            value={reward.amount}
            onChange={(e) =>
              onChange({ ...reward, amount: Number(e.target.value) })
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
          value={reward.description}
          onChange={(e) =>
            onChange({ ...reward, description: e.target.value })
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
            value={reward.estimatedDelivery}
            onChange={(e) =>
              onChange({
                ...reward,
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
            value={reward.shippingLocation}
            onChange={(e) =>
              onChange({
                ...reward,
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
        onClick={onAdd}
        className="mt-4 w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add Reward
      </button>
    </div>
  );
};