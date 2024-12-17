import React from 'react';
import { formatDistanceToNow } from '../../../../../utils/formatting';

interface NotificationContentProps {
  message: string;
  createdAt: Date;
  isUnread: boolean;
}

export const NotificationContent: React.FC<NotificationContentProps> = ({
  message,
  createdAt,
  isUnread
}) => (
  <div className="flex-1 min-w-0">
    <p className={`text-sm ${isUnread ? 'font-medium' : 'text-gray-900'}`}>
      {message}
    </p>
    <p className="text-xs text-gray-500 mt-1">
      {formatDistanceToNow(createdAt)}
    </p>
  </div>
);