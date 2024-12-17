import { Consequence } from '../../../types/accountability';

export const formatConsequenceTitle = (consequence: Consequence): string => {
  const { type, tier } = consequence;
  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
  return `Tier ${tier} ${typeLabel} Consequence`;
};

export const formatProgress = (current: number, goal: number): string => {
  const percentage = (current / goal) * 100;
  return `${percentage.toFixed(1)}%`;
};

export const formatDeadline = (deadline: Date): string => {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  
  if (days <= 0) return 'Deadline passed';
  if (days === 1) return '1 day left';
  return `${days} days left`;
};