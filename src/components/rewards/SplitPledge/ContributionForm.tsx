import React from 'react';
import { Users } from 'lucide-react';
import type { Reward } from '../../../types';

interface ContributionFormProps {
  reward: Reward;
  contribution: number;
  maxContributors: number;
  onContributionChange: (value: number) => void;
  onMaxContributorsChange: (value: number) => void;
}

export const ContributionForm: React.FC<ContributionFormProps> = ({
  reward,
  contribution,
  maxContributors,
  onContributionChange,
  onMaxContributorsChange
}) => {
  const minContribution = reward.amount * 0.25;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Contribution
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            min={minContribution}
            max={reward.amount}
            value={contribution}
            onChange={(e) => onContributionChange(Number(e.target.value))}
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Minimum contribution: ${minContribution}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Maximum Contributors
        </label>
        <select
          value={maxContributors}
          onChange={(e) => onMaxContributorsChange(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num} contributors
            </option>
          ))}
        </select>
        <p className="mt-1 text-sm text-gray-500">
          Choose how many people can join this split pledge
        </p>
      </div>
    </div>
  );
};