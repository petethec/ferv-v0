import React from 'react';
import { Calendar } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatting';
import type { ScheduleType } from './types';

interface PaymentScheduleSelectorProps {
  amount: number;
  scheduleType: ScheduleType;
  onScheduleChange: (type: ScheduleType) => void;
  splitAmount: number;
  totalPayments: number;
}

export const PaymentScheduleSelector: React.FC<PaymentScheduleSelectorProps> = ({
  amount,
  scheduleType,
  onScheduleChange,
  splitAmount,
  totalPayments
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Payment Schedule
      </label>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onScheduleChange('full')}
          className={`flex flex-col items-center p-3 border rounded-lg ${
            scheduleType === 'full'
              ? 'border-orange-600 bg-orange-50'
              : 'border-gray-200 hover:border-orange-200'
          }`}
        >
          <span className="font-medium text-gray-900">
            {formatCurrency(amount)}
          </span>
          <span className="text-sm text-gray-500">Pay in full</span>
        </button>

        {['monthly', 'quarterly', 'annual'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onScheduleChange(type as ScheduleType)}
            className={`flex flex-col items-center p-3 border rounded-lg ${
              scheduleType === type
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200 hover:border-orange-200'
            }`}
          >
            <span className="font-medium text-gray-900">
              {formatCurrency(splitAmount)}
            </span>
            <span className="text-sm text-gray-500">
              {type === 'monthly' ? 'Monthly' : type === 'quarterly' ? 'Quarterly' : 'Annual'}
              {totalPayments > 1 && ` × ${totalPayments}`}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};