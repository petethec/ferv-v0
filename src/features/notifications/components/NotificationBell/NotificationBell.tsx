import React, { useState, useRef } from 'react';
import { Bell } from 'lucide-react';
import { NotificationList } from '../NotificationList/NotificationList';
import { NotificationBadge } from './NotificationBadge';
import { useNotificationCount } from '../../hooks/useNotificationCount';

export const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { unreadCount } = useNotificationCount();

  // Handle clicks outside the notification bell and list
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={handleToggle}
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Notifications"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Bell className="w-6 h-6 text-gray-600" />
        {unreadCount > 0 && <NotificationBadge count={unreadCount} />}
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-96 transform origin-top-right transition-transform"
          style={{ zIndex: 50 }}
        >
          <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 max-h-[80vh] overflow-hidden">
            <NotificationList onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};