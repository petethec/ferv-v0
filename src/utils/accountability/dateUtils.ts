import { Consequence } from '../../types/accountability';

export const getDaysUntilDeadline = (deadline: Date): number => {
  return Math.ceil(
    (new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );
};

export const getEarliestDeadline = (consequences: Consequence[]): Date => {
  return new Date(Math.min(
    ...consequences.map(c => new Date(c.deadline).getTime())
  ));
};

export const calculateDeadlineProximity = (deadline: Date): number => {
  const totalDuration = deadline.getTime() - Date.now();
  const proximityPercentage = (totalDuration / (30 * 24 * 60 * 60 * 1000)) * 100;
  return Math.max(0, Math.min(100, proximityPercentage));
};