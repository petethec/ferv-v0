import { Consequence } from '../../types/accountability';

export const getConsequenceNotification = (consequence: Consequence) => {
  const daysLeft = Math.ceil(
    (new Date(consequence.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  if (daysLeft <= 0) {
    return {
      type: 'deadline_reached',
      message: `Deadline reached for consequence: ${consequence.title}`,
      severity: 'high'
    };
  }

  if (daysLeft <= 7) {
    return {
      type: 'deadline_approaching',
      message: `${daysLeft} days left to vote on consequence: ${consequence.title}`,
      severity: 'medium'
    };
  }

  const progress = (consequence.currentAmount / consequence.fundingGoal) * 100;
  if (progress >= 90) {
    return {
      type: 'near_goal',
      message: `Consequence nearly funded: ${progress.toFixed(1)}% of goal reached`,
      severity: 'medium'
    };
  }

  return null;
};

export const shouldNotifyStakeholders = (consequence: Consequence): boolean => {
  const notification = getConsequenceNotification(consequence);
  return notification !== null;
};