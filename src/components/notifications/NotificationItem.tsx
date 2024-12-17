import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, DollarSign, Users, GitMerge, AlertTriangle, Trash2 } from 'lucide-react';
import { Notification } from '../../types/notifications';
import { useNotificationStore } from '../../store/useNotificationStore';
import { formatDistanceToNow } from '../../utils/formatting';

interface NotificationItemProps {
  notification: Notification;
  onRemove: () => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onRemove
}) => {
  const { markAsRead } = useNotificationStore();

  const getIcon = () => {
    switch (notification.type) {
      case 'comment':
        return <MessageSquare className="w-5 h-5 text-blue-500" />;
      case 'contribution':
        return <DollarSign className="w-5 h-5 text-green-500" />;
      case 'co_funding':
        return <Users className="w-5 h-5 text-purple-500" />;
      case 'merge_request':
        return <GitMerge className="w-5 h-5 text-orange-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-500" />;
    }
  };

  const handleClick = () => {
    if (!notification.readAt) {
      markAsRead(notification.id);
    }
  };

  return (
    <Link
      to={notification.link}
      onClick={handleClick}
      className={`block px-4 py-3 hover:bg-gray-50 transition-colors relative ${
        !notification.readAt ? 'bg-orange-50' : ''
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="flex-1 min-w-0">
          <p className={`text-sm ${!notification.readAt ? 'font-medium' : 'text-gray-900'}`}>
            {notification.message}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {formatDistanceToNow(notification.createdAt)}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          }}
          className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      {!notification.readAt && (
        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-orange-500 rounded-full" />
      )}
    </Link>
  );
};