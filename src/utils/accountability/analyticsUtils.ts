import type { Consequence, ConsequenceVote } from '../../types/accountability';

export const calculateVotingTrends = (votes: ConsequenceVote[]) => {
  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;

  const dailyVotes = votes.filter(v => 
    now.getTime() - v.timestamp.getTime() <= oneDay
  );

  const weeklyVotes = votes.filter(v =>
    now.getTime() - v.timestamp.getTime() <= oneWeek
  );

  return {
    dailyTotal: dailyVotes.reduce((sum, v) => sum + v.amount, 0),
    weeklyTotal: weeklyVotes.reduce((sum, v) => sum + v.amount, 0),
    dailyCount: dailyVotes.length,
    weeklyCount: weeklyVotes.length,
    averageDaily: weeklyVotes.length / 7
  };
};

export const predictCompletion = (consequence: Consequence): Date | null => {
  const { currentAmount, fundingGoal, votes } = consequence;
  if (votes === 0) return null;

  const averageVote = currentAmount / votes;
  const remainingAmount = fundingGoal - currentAmount;
  const remainingVotes = Math.ceil(remainingAmount / averageVote);
  const daysToComplete = remainingVotes / (votes / 30); // Assuming 30 days of history

  const projectedDate = new Date();
  projectedDate.setDate(projectedDate.getDate() + daysToComplete);

  return projectedDate;
};