import type { Notification } from '../types';

export const calculateUnreadCount = (notifications: Notification[]): number => {
  return notifications.filter(n => !n.readAt).length;
};

export const getNotificationMessage = (notification: Notification): string => {
  const { type, metadata } = notification;
  
  switch (type) {
    case 'comment':
      return `New comment on ${metadata?.projectName}: "${metadata?.comment}"`;
    case 'contribution':
      return `You received a contribution of $${metadata?.amount} from ${metadata?.backerName}`;
    case 'co_funding':
      return `${metadata?.memberName} joined your co-funding group "${metadata?.groupName}"`;
    case 'merge_request':
      return `${metadata?.action} merge request for "${metadata?.projectName}"`;
    case 'mention':
      return `${metadata?.userName} mentioned you in ${metadata?.context}`;
    case 'subscription':
      return `Your subscription ${metadata?.action}`;
    case 'reclaim':
      return `Project "${metadata?.projectName}" is available for reclaim`;
    default:
      return notification.message;
  }
};

export const getNotificationLink = (notification: Notification): string => {
  const { type, metadata } = notification;
  
  switch (type) {
    case 'comment':
      return `/project/${metadata?.projectId}#comment-${metadata?.commentId}`;
    case 'contribution':
      return `/project/${metadata?.projectId}/contributions`;
    case 'co_funding':
      return `/project/${metadata?.projectId}/co-funding/${metadata?.groupId}`;
    case 'merge_request':
      return `/project/${metadata?.projectId}/merge/${metadata?.mergeId}`;
    case 'mention':
      return metadata?.link || '/';
    case 'subscription':
      return '/settings/subscription';
    case 'reclaim':
      return `/abandoned-projects/${metadata?.projectId}`;
    default:
      return notification.link;
  }
};