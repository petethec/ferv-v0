export const CONSEQUENCE_TYPES = {
  DONATION: 'donation',
  CAMPAIGN: 'campaign',
  PROTEST: 'protest',
  LEGAL: 'legal',
  CUSTOM: 'custom'
} as const;

export const CONSEQUENCE_TIERS = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3
} as const;

export const CONSEQUENCE_STATUSES = {
  PENDING: 'pending',
  ACTIVE: 'active',
  EXECUTED: 'executed',
  CANCELLED: 'cancelled'
} as const;

export const MINIMUM_VOTE_AMOUNT = 1;
export const MAXIMUM_VOTE_PERCENTAGE = 100;
export const DEFAULT_VOTING_PERIOD_DAYS = 30;
export const NOTIFICATION_CHECK_INTERVAL = 60000; // 1 minute