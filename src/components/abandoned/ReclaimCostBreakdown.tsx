import React from 'react';
import { ReclaimCostBreakdown as ReclaimCostBreakdownType } from '../../types/abandoned';

interface ReclaimCostBreakdownProps {
  breakdown: ReclaimCostBreakdownType;
}

export const ReclaimCostBreakdown: React.FC<ReclaimCostBreakdownProps> = ({
  breakdown
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="font-medium text-gray-900 mb-3">Reclaim Cost Breakdown</h4>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Base Platform Fee</span>
          <span className="text-gray-900">${breakdown.baseFee}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Time Multiplier</span>
          <span className="text-gray-900">{breakdown.timeMultiplier}x</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Creator Compensation</span>
          <span className="text-gray-900">${breakdown.creatorCompensation}</span>
        </div>
        {breakdown.outstandingObligations > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Outstanding Obligations</span>
            <span className="text-gray-900">${breakdown.outstandingObligations}</span>
          </div>
        )}
        <div className="flex justify-between pt-2 border-t border-gray-200 font-medium">
          <span className="text-gray-900">Total Cost</span>
          <span className="text-orange-600">${breakdown.total}</span>
        </div>
      </div>
    </div>
  );
};