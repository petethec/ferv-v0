import { Consequence } from '../../types/accountability';

export const validateConsequenceConfig = (consequence: Consequence): string[] => {
  const errors: string[] = [];

  if (!consequence.title || consequence.title.length < 10) {
    errors.push('Title must be at least 10 characters long');
  }

  if (!consequence.description || consequence.description.length < 50) {
    errors.push('Description must be at least 50 characters long');
  }

  if (consequence.fundingGoal <= 0) {
    errors.push('Funding goal must be greater than 0');
  }

  if (!consequence.deadline || new Date(consequence.deadline) <= new Date()) {
    errors.push('Deadline must be in the future');
  }

  switch (consequence.type) {
    case 'donation':
      if (!consequence.executionDetails.targetEntity) {
        errors.push('Target organization must be specified for donations');
      }
      break;
    case 'protest':
      if (!consequence.executionDetails.location) {
        errors.push('Location must be specified for protests');
      }
      if (!consequence.executionDetails.duration) {
        errors.push('Duration must be specified for protests');
      }
      break;
    case 'campaign':
      if (!consequence.executionDetails.duration) {
        errors.push('Duration must be specified for campaigns');
      }
      break;
  }

  return errors;
};

export const validateVoteAmount = (
  amount: number,
  consequence: Consequence
): string | null => {
  if (amount <= 0) {
    return 'Vote amount must be greater than 0';
  }

  if (amount > consequence.fundingGoal - consequence.currentAmount) {
    return 'Vote amount cannot exceed remaining goal amount';
  }

  return null;
};