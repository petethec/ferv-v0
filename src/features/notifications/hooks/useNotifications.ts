import { useNotificationStore } from '../store/notificationStore';

export const useNotifications = () => {
  const notifications = useNotificationStore(state => state.notifications);
  const hasUnread = notifications.some(n => !n.readAt);
  return { notifications, hasUnread };
};