export const VOTING_CONSTANTS = {
  MINIMUM_AMOUNT: 1,
  MAXIMUM_PERCENTAGE: 100,
  DEFAULT_PERIOD_DAYS: 30,
  CHECK_INTERVAL: 60000 // 1 minute
} as const;

export const VOTE_TYPES = {
  STANDARD: 'standard',
  WEIGHTED: 'weighted',
  DELEGATED: 'delegated'
} as const;