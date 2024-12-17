import React, { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { NotificationList } from './NotificationList';
import { useNotificationStore } from '../../store/useNotificationStore';

export const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bellRef = useRef<HTMLButtonElement>(null);
  const { unreadCount, markAllAsRead } = useNotificationStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bellRef.current && !bellRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={bellRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-6 h-6 text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full animate-pulse">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <NotificationList onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};