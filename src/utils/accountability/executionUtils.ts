import { Consequence } from '../../types/accountability';

export const getExecutionRequirements = (consequence: Consequence) => {
  const requirements: string[] = [];

  switch (consequence.type) {
    case 'protest':
      requirements.push(
        'Valid protest permit required',
        'Safety coordinator must be appointed',
        'Emergency response plan needed'
      );
      break;
    case 'legal':
      requirements.push(
        'Legal representation secured',
        'Documentation prepared',
        'Filing fees allocated'
      );
      break;
    case 'campaign':
      requirements.push(
        'Media assets prepared',
        'Platform accounts verified',
        'Content schedule established'
      );
      break;
    case 'donation':
      requirements.push(
        'Recipient organization verified',
        'Tax documentation prepared',
        'Transfer method established'
      );
      break;
  }

  return requirements;
};

export const validateExecutionReadiness = (consequence: Consequence): boolean => {
  const { currentAmount, fundingGoal, deadline } = consequence;
  const now = new Date();
  const deadlineDate = new Date(deadline);
  
  return (
    currentAmount >= fundingGoal &&
    now >= deadlineDate &&
    consequence.status === 'active'
  );
};

export const estimateExecutionTimeline = (consequence: Consequence): number => {
  switch (consequence.type) {
    case 'protest':
      return consequence.executionDetails.duration || 1;
    case 'campaign':
      return consequence.executionDetails.duration || 30;
    case 'legal':
      return 90; // Default to 90 days for legal proceedings
    case 'donation':
      return 7; // Default to 7 days for donation processing
    default:
      return 30;
  }
};