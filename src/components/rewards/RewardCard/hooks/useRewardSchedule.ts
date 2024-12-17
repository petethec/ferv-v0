import { useState, useMemo } from 'react';
import type { ScheduleType } from '../types';

export const useRewardSchedule = (totalAmount: number) => {
  const [scheduleType, setScheduleType] = useState<ScheduleType>('full');

  const { splitAmount, totalPayments } = useMemo(() => {
    switch (scheduleType) {
      case 'monthly':
        return {
          splitAmount: Math.ceil(totalAmount / 12),
          totalPayments: 12
        };
      case 'quarterly':
        return {
          splitAmount: Math.ceil(totalAmount / 4),
          totalPayments: 4
        };
      case 'annual':
        return {
          splitAmount: totalAmount,
          totalPayments: 1
        };
      default:
        return {
          splitAmount: totalAmount,
          totalPayments: 1
        };
    }
  }, [totalAmount, scheduleType]);

  return {
    scheduleType,
    splitAmount,
    totalPayments,
    setScheduleType
  };
};