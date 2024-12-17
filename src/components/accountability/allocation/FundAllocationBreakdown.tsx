import React from 'react';
import { DollarSign, Target, AlertCircle } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { AllocationChart } from './AllocationChart';
import { AllocationTable } from './AllocationTable';

interface FundAllocationBreakdownProps {
  consequence: Consequence;
}

export const FundAllocationBreakdown: React.FC<FundAllocationBreakdownProps> = ({ consequence }) => {
  const allocations = [
    {
      category: 'Primary Action',
      amount: consequence.fundingGoal * 0.7,
      description: 'Main consequence execution'
    },
    {
      category: 'Legal & Admin',
      amount: consequence.fundingGoal * 0.15,
      description: 'Legal fees and administrative costs'
    },
    {
      category: 'Reserve',
      amount: consequence.fundingGoal * 0.1,
      description: 'Emergency fund and contingencies'
    },
    {
      category: 'Platform Fee',
      amount: consequence.fundingGoal * 0.05,
      description: 'Platform maintenance and support'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Fund Allocation</h2>
          <p className="text-gray-600 mt-1">Breakdown of consequence funding</p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Target className="w-4 h-4 mr-1" />
          <span>Goal: ${consequence.fundingGoal.toLocaleString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AllocationChart allocations={allocations} />
        <AllocationTable allocations={allocations} />
      </div>
    </div>
  );
};