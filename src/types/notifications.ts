export type NotificationType = 
  | 'comment'
  | 'contribution'
  | 'co_funding'
  | 'merge_request'
  | 'system'
  | 'mention'
  | 'subscription'
  | 'reclaim';

export interface Notification {
  id: string;
  type: NotificationType;
  userId: string;
  message: string;
  link: string;
  createdAt: Date;
  readAt?: Date;
  metadata?: Record<string, any>;
}

export interface NotificationPreferences {
  email: boolean;
  inApp: boolean;
  push: boolean;
  types: {
    [K in NotificationType]: {
      enabled: boolean;
      email: boolean;
      inApp: boolean;
      push: boolean;
    };
  };
  frequency: 'immediate' | 'daily' | 'weekly';
}