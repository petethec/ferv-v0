import React from 'react';
import { Link } from 'react-router-dom';
import type { Notification } from '../../../types';
import { useNotificationActions } from '../../../hooks/useNotificationActions';
import { NotificationIcon } from './NotificationIcon';
import { NotificationContent } from './NotificationContent';
import { NotificationActions } from './NotificationActions';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  const { markAsRead, removeNotification } = useNotificationActions();
  const isUnread = !notification.readAt;

  const handleClick = () => {
    if (isUnread) {
      markAsRead(notification.id);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    removeNotification(notification.id);
  };

  return (
    <Link
      to={notification.link}
      onClick={handleClick}
      className={`block px-4 py-3 hover:bg-gray-50 transition-colors relative ${
        isUnread ? 'bg-orange-50' : ''
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <NotificationIcon type={notification.type} />
        </div>
        
        <NotificationContent
          message={notification.message}
          createdAt={notification.createdAt}
          isUnread={isUnread}
        />
        
        <NotificationActions onRemove={handleRemove} />
      </div>

      {isUnread && (
        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-orange-500 rounded-full" />
      )}
    </Link>
  );
};