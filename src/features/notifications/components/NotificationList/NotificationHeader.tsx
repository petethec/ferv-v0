import React from 'react';
import { Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNotificationActions } from '../../hooks/useNotificationActions';

interface NotificationHeaderProps {
  hasUnread: boolean;
  onClose: () => void;
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  hasUnread,
  onClose
}) => {
  const { markAllAsRead } = useNotificationActions();

  return (
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
  );
};