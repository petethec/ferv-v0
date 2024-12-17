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