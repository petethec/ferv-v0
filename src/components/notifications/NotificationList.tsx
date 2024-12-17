import React from 'react';
import { Settings, Check, Trash2, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNotificationStore } from '../../store/useNotificationStore';
import { NotificationItem } from './NotificationItem';
import { formatDistanceToNow } from '../../utils/formatting';

interface NotificationListProps {
  onClose: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({ onClose }) => {
  const { notifications, markAllAsRead, removeNotification } = useNotificationStore();
  const hasUnread = notifications.some(n => !n.readAt);

  if (notifications.length === 0) {
    return (
      <div className="p-6 text-center">
        <Bell className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          You're all caught up!
        </h3>
        <p className="text-sm text-gray-500">
          No new notifications at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="max-h-[80vh] flex flex-col">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
        <div className="flex items-center space-x-2">
          {hasUnread && (
            <button
              onClick={markAllAsRead}
              className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center"
            >
              <Check className="w-4 h-4 mr-1" />
              Mark all as read
            </button>
          )}
          <Link
            to="/settings/notifications"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="overflow-y-auto">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRemove={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </div>
  );
};