import { useNotificationStore } from '../store/notificationStore';

export const useNotificationCount = () => {
  const unreadCount = useNotificationStore(state => state.unreadCount);
  return { unreadCount };
};