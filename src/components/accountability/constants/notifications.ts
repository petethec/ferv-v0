export const NOTIFICATION_CONSTANTS = {
  TYPES: {
    VOTE: 'vote',
    STATUS_CHANGE: 'status_change',
    MILESTONE: 'milestone',
    DEADLINE: 'deadline'
  },
  PRIORITIES: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    URGENT: 'urgent'
  },
  CHECK_INTERVAL: 60000 // 1 minute
} as const;