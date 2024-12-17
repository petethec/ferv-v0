import type { Consequence, AccountabilityMetrics } from '../types/accountability';

export const calculateAccountabilityMetrics = (
  consequences: Consequence[]
): AccountabilityMetrics => {
  const totalPledged = consequences.reduce((sum, c) => sum + c.currentAmount, 0);
  const voterCount = new Set(consequences.flatMap(c => c.votes)).size;
  
  const executedConsequences = consequences.filter(c => c.status === 'executed');
  const executionProgress = (executedConsequences.length / consequences.length) * 100;

  const earliestDeadline = Math.min(
    ...consequences.map(c => new Date(c.deadline).getTime())
  );
  const totalDuration = earliestDeadline - Date.now();
  const deadlineProximity = (totalDuration / (30 * 24 * 60 * 60 * 1000)) * 100;

  return {
    totalPledged,
    voterCount,
    executionProgress,
    deadlineProximity: Math.max(0, Math.min(100, deadlineProximity))
  };
};

export const shouldExecuteConsequence = (consequence: Consequence): boolean => {
  const now = Date.now();
  const deadline = new Date(consequence.deadline).getTime();
  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;
  
  return now >= deadline && progress >= 100;
};