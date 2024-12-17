import React from 'react';
import { formatCurrency } from '../../../utils/formatting';
import type { ScheduleType } from './types';

interface RewardHeaderProps {
  title: string;
  amount: number;
  scheduleType: ScheduleType;
  splitAmount: number;
}

export const RewardHeader: React.FC<RewardHeaderProps> = ({
  title,
  amount,
  scheduleType,
  splitAmount
}) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <div className="text-right">
        <div className="text-xl font-bold text-orange-600">
          {formatCurrency(amount)}
        </div>
        {scheduleType !== 'full' && (
          <div className="text-sm text-gray-600">
            {formatCurrency(splitAmount)} / {scheduleType}
          </div>
        )}
      </div>
    </div>
  );
};