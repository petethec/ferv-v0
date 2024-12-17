import { Consequence } from '../../../types/accountability';
import { MINIMUM_VOTE_AMOUNT, MAXIMUM_VOTE_PERCENTAGE } from '../constants';

export const isVoteValid = (amount: number, consequence: Consequence): boolean => {
  if (amount < MINIMUM_VOTE_AMOUNT) return false;
  
  const remainingGoal = consequence.fundingGoal - consequence.currentAmount;
  const maxVote = remainingGoal * (MAXIMUM_VOTE_PERCENTAGE / 100);
  
  return amount <= maxVote;
};

export const isDeadlineValid = (deadline: Date): boolean => {
  const now = new Date();
  return deadline.getTime() > now.getTime();
};

export const areExecutionDetailsValid = (consequence: Consequence): boolean => {
  const { type, executionDetails } = consequence;
  
  switch (type) {
    case 'donation':
      return Boolean(executionDetails.targetEntity);
    case 'protest':
      return Boolean(executionDetails.location && executionDetails.duration);
    case 'campaign':
      return Boolean(executionDetails.duration);
    default:
      return true;
  }
};