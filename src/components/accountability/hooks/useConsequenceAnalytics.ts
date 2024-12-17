import { useState, useEffect } from 'react';
import type { Consequence } from '../../../types/accountability';

interface ConsequenceAnalytics {
  averageVoteAmount: number;
  topVoters: Array<{ userId: string; totalAmount: number }>;
  dailyVoteTrend: Array<{ date: string; amount: number }>;
  projectedCompletion: Date | null;
}

export const useConsequenceAnalytics = (consequence: Consequence) => {
  const [analytics, setAnalytics] = useState<ConsequenceAnalytics>({
    averageVoteAmount: 0,
    topVoters: [],
    dailyVoteTrend: [],
    projectedCompletion: null
  });

  useEffect(() => {
    // Calculate analytics
    const avgAmount = consequence.currentAmount / consequence.votes;
    const remainingAmount = consequence.fundingGoal - consequence.currentAmount;
    const dailyRate = consequence.currentAmount / consequence.votes * 7; // Weekly average
    
    const projectedDays = remainingAmount / dailyRate;
    const projectedDate = new Date();
    projectedDate.setDate(projectedDate.getDate() + projectedDays);

    setAnalytics({
      averageVoteAmount: avgAmount,
      topVoters: [], // Would be populated from actual vote data
      dailyVoteTrend: [], // Would be calculated from vote history
      projectedCompletion: projectedDays > 0 ? projectedDate : null
    });
  }, [consequence]);

  return analytics;
};