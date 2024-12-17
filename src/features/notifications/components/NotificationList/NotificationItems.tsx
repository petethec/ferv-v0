import React from 'react';
import { NotificationItem } from './NotificationItem';
import type { Notification } from '../../types';

interface NotificationItemsProps {
  notifications: Notification[];
}

export const NotificationItems: React.FC<NotificationItemsProps> = ({ notifications }) => (
  <div className="divide-y divide-gray-100">
    {notifications.map((notification) => (
      <NotificationItem
        key={notification.id}
        notification={notification}
      />
    ))}
  </div>
);