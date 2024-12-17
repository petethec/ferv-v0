import { create } from 'zustand';
import { Notification } from '../types/notifications';

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  unreadCount: 0,
  
  addNotification: (notification) =>
    set((state) => {
      const notifications = [notification, ...state.notifications];
      const unreadCount = notifications.filter((n) => !n.readAt).length;
      return { notifications, unreadCount };
    }),
    
  markAsRead: (id) =>
    set((state) => {
      const notifications = state.notifications.map((n) =>
        n.id === id ? { ...n, readAt: new Date() } : n
      );
      const unreadCount = notifications.filter((n) => !n.readAt).length;
      return { notifications, unreadCount };
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
      const unreadCount = notifications.filter((n) => !n.readAt).length;
      return { notifications, unreadCount };
    })
}));