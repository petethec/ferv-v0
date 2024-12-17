import React, { useState } from 'react';
import { X, Users, Target } from 'lucide-react';
import { CoFundingGroup } from '../../types';

interface JoinGroupModalProps {
  group: CoFundingGroup;
  onClose: () => void;
  onJoin: (amount: number) => void;
}

export const JoinGroupModal: React.FC<JoinGroupModalProps> = ({
  group,
  onClose,
  onJoin,
}) => {
  const [amount, setAmount] = useState<string>('');
  const remainingAmount = group.targetAmount - group.currentAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onJoin(Number(amount));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Join Co-Funding Group</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-gray-900 mb-2">{group.name}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{group.members.length} members</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-1" />
              <span>${remainingAmount.toLocaleString()} remaining</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Contribution ($)
            </label>
            <input
              type="number"
              min="1"
              max={remainingAmount}
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
          >
            Join Group
          </button>
        </form>
      </div>
    </div>
  );
};