export const EXECUTION_CONSTANTS = {
  MINIMUM_DELAY: 24 * 60 * 60 * 1000, // 24 hours
  MAXIMUM_DURATION: 90 * 24 * 60 * 60 * 1000, // 90 days
  STATUS_CHECK_INTERVAL: 300000 // 5 minutes
} as const;

export const EXECUTION_REQUIREMENTS = {
  DONATION: ['verified_recipient', 'tax_documentation', 'transfer_method'],
  PROTEST: ['permit', 'safety_plan', 'coordinator'],
  CAMPAIGN: ['media_assets', 'platform_access', 'schedule'],
  LEGAL: ['representation', 'documentation', 'filing_fees']
} as const;