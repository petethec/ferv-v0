import React from 'react';
import { Users } from 'lucide-react';

interface ContributorsProgressProps {
  totalAmount: number;
  currentAmount: number;
  maxContributors: number;
}

export const ContributorsProgress: React.FC<ContributorsProgressProps> = ({
  totalAmount,
  currentAmount,
  maxContributors
}) => {
  const progress = (currentAmount / totalAmount) * 100;
  const remainingAmount = totalAmount - currentAmount;

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h4 className="font-medium text-gray-900 mb-4">Contribution Summary</h4>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>${currentAmount} of ${totalAmount}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>Up to {maxContributors - 1} more contributors</span>
          </div>
          <span className="font-medium text-gray-900">
            ~${Math.ceil(remainingAmount / (maxContributors - 1))} each
          </span>
        </div>

        <div className="text-xs text-gray-500">
          * Final amount per contributor may vary based on individual pledges
        </div>
      </div>
    </div>
  );
};