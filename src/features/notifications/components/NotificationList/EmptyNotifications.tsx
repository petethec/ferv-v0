import React from 'react';
import { Bell } from 'lucide-react';

export const EmptyNotifications: React.FC = () => (
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