import { create } from 'zustand';
import type { NotificationState } from '../types';
import { calculateUnreadCount } from '../utils/notificationUtils';

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  unreadCount: 0,
  
  addNotification: (notification) =>
    set((state) => {
      const notifications = [notification, ...state.notifications];
      return {
        notifications,
        unreadCount: calculateUnreadCount(notifications)
      };
    }),
    
  markAsRead: (id) =>
    set((state) => {
      const notifications = state.notifications.map((n) =>
        n.id === id ? { ...n, readAt: new Date() } : n
      );
      return {
        notifications,
        unreadCount: calculateUnreadCount(notifications)
      };
    }),
    
  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({
        ...n,
        readAt: n.readAt || new Date()
      })),
      unreadCount: 0
    })),
    
  removeNotification: (id) =>
    set((state) => {
      const notifications = state.notifications.filter((n) => n.id !== id);
      return {
        notifications,
        unreadCount: calculateUnreadCount(notifications)
      };
    })
}));