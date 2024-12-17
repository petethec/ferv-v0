export const VALIDATION_CONSTANTS = {
  TITLE_MIN_LENGTH: 10,
  DESCRIPTION_MIN_LENGTH: 50,
  MINIMUM_GOAL: 100,
  MAXIMUM_GOAL: 1000000,
  MINIMUM_DURATION_DAYS: 7,
  MAXIMUM_DURATION_DAYS: 90
} as const;

export const VALIDATION_MESSAGES = {
  TITLE_TOO_SHORT: 'Title must be at least 10 characters long',
  DESCRIPTION_TOO_SHORT: 'Description must be at least 50 characters long',
  INVALID_GOAL: 'Funding goal must be between $100 and $1,000,000',
  INVALID_DURATION: 'Duration must be between 7 and 90 days',
  PAST_DEADLINE: 'Deadline must be in the future'
} as const;