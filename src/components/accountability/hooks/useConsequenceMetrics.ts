import { useState, useEffect } from 'react';
import type { Consequence, AccountabilityMetrics } from '../../../types/accountability';
import { calculateAccountabilityMetrics } from '../../../utils/accountabilityCalculations';

export const useConsequenceMetrics = (consequences: Consequence[]) => {
  const [metrics, setMetrics] = useState<AccountabilityMetrics>({
    totalPledged: 0,
    voterCount: 0,
    executionProgress: 0,
    deadlineProximity: 0
  });

  const [trendData, setTrendData] = useState<{
    daily: Array<{ date: string; amount: number }>;
    weekly: Array<{ week: string; amount: number }>;
  }>({
    daily: [],
    weekly: []
  });

  useEffect(() => {
    const newMetrics = calculateAccountabilityMetrics(consequences);
    setMetrics(newMetrics);

    // Calculate trend data
    // This would typically come from an API with historical data
    const now = new Date();
    const daily = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      return {
        date: date.toISOString().split('T')[0],
        amount: Math.random() * 1000 // Mock data
      };
    }).reverse();

    setTrendData({
      daily,
      weekly: [] // Would be calculated from historical data
    });
  }, [consequences]);

  return {
    metrics,
    trendData,
    hasPositiveTrend: trendData.daily[6]?.amount > trendData.daily[0]?.amount
  };
};