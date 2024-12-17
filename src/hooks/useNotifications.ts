import { useEffect } from 'react';
import { useNotificationStore } from '../store/useNotificationStore';
import { Notification } from '../types/notifications';

const SOCKET_URL = 'wss://api.example.com/notifications';

export const useNotifications = () => {
  const { addNotification } = useNotificationStore();

  useEffect(() => {
    // In a real implementation, this would connect to your WebSocket server
    const connectWebSocket = () => {
      try {
        const socket = new WebSocket(SOCKET_URL);

        socket.onmessage = (event) => {
          const notification: Notification = JSON.parse(event.data);
          addNotification(notification);
        };

        socket.onclose = () => {
          // Attempt to reconnect after a delay
          setTimeout(connectWebSocket, 5000);
        };

        return () => {
          socket.close();
        };
      } catch (error) {
        console.error('WebSocket connection failed:', error);
        // Attempt to reconnect after a delay
        setTimeout(connectWebSocket, 5000);
      }
    };

    // For demo purposes, simulate receiving notifications
    const interval = setInterval(() => {
      const types: Notification['type'][] = [
        'comment',
        'contribution',
        'co_funding',
        'merge_request'
      ];
      
      const randomType = types[Math.floor(Math.random() * types.length)];
      const notification: Notification = {
        id: Math.random().toString(36).substr(2, 9),
        type: randomType,
        userId: 'current-user',
        message: getRandomMessage(randomType),
        link: getRandomLink(randomType),
        createdAt: new Date(),
      };
      
      addNotification(notification);
    }, 30000); // Add a new notification every 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, [addNotification]);
};

const getRandomMessage = (type: Notification['type']): string => {
  switch (type) {
    case 'comment':
      return 'New comment on your project: "Great work on this feature!"';
    case 'contribution':
      return 'You received a new contribution of $50!';
    case 'co_funding':
      return 'A new backer joined your co-funding group';
    case 'merge_request':
      return 'Your merge request was approved';
    default:
      return 'You have a new notification';
  }
};

const getRandomLink = (type: Notification['type']): string => {
  switch (type) {
    case 'comment':
      return '/project/1#comments';
    case 'contribution':
      return '/dashboard';
    case 'co_funding':
      return '/project/1/co-funding';
    case 'merge_request':
      return '/project/1/merge';
    default:
      return '/notifications';
  }
};