import { Consequence } from '../../types/accountability';

export const calculateProgress = (current: number, goal: number): number => {
  return (current / goal) * 100;
};

export const calculateTotalProgress = (consequences: Consequence[]): number => {
  const executedCount = consequences.filter(c => c.status === 'executed').length;
  return (executedCount / consequences.length) * 100;
};

export const isConsequenceReady = (consequence: Consequence): boolean => {
  const progress = calculateProgress(consequence.currentAmount, consequence.fundingGoal);
  return progress >= 100;
};