import { useNotificationStore } from '../store/notificationStore';

export const useNotificationActions = () => {
  const { markAsRead, markAllAsRead, removeNotification } = useNotificationStore();
  return { markAsRead, markAllAsRead, removeNotification };
};