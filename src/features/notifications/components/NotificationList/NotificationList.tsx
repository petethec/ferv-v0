import React from 'react';
import { NotificationHeader } from './NotificationHeader';
import { NotificationItems } from './NotificationItems';
import { EmptyNotifications } from './EmptyNotifications';
import { useNotifications } from '../../hooks/useNotifications';

interface NotificationListProps {
  onClose: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({ onClose }) => {
  const { notifications, hasUnread } = useNotifications();

  // Stop propagation to prevent closing when clicking inside the list
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleClick} className="flex flex-col">
      {notifications.length === 0 ? (
        <EmptyNotifications />
      ) : (
        <>
          <NotificationHeader hasUnread={hasUnread} onClose={onClose} />
          <div className="overflow-y-auto max-h-[calc(80vh-4rem)]">
            <NotificationItems notifications={notifications} />
          </div>
        </>
      )}
    </div>
  );
};