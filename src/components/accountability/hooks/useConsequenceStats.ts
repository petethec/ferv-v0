import { useState, useEffect } from 'react';
import type { Consequence } from '../../../types/accountability';

interface ConsequenceStats {
  averageVoteSize: number;
  medianVoteSize: number;
  largestVote: number;
  uniqueVoters: number;
  votesLastDay: number;
  votesLastWeek: number;
  projectedCompletion: Date | null;
}

export const useConsequenceStats = (consequence: Consequence) => {
  const [stats, setStats] = useState<ConsequenceStats>({
    averageVoteSize: 0,
    medianVoteSize: 0,
    largestVote: 0,
    uniqueVoters: 0,
    votesLastDay: 0,
    votesLastWeek: 0,
    projectedCompletion: null
  });

  useEffect(() => {
    // Calculate stats
    const avgVote = consequence.currentAmount / consequence.votes;
    const dailyRate = consequence.currentAmount / consequence.votes * 7;
    const remainingAmount = consequence.fundingGoal - consequence.currentAmount;
    const daysToComplete = remainingAmount / (dailyRate / 7);

    const projectedDate = new Date();
    projectedDate.setDate(projectedDate.getDate() + daysToComplete);

    setStats({
      averageVoteSize: avgVote,
      medianVoteSize: avgVote, // Would need actual vote data
      largestVote: avgVote * 2, // Mock data
      uniqueVoters: Math.floor(consequence.votes * 0.8), // Mock data
      votesLastDay: Math.floor(consequence.votes / 30), // Mock data
      votesLastWeek: Math.floor(consequence.votes / 4), // Mock data
      projectedCompletion: daysToComplete > 0 ? projectedDate : null
    });
  }, [consequence]);

  return stats;
};