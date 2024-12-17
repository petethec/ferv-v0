import React from 'react';
import { MessageSquare, DollarSign, Users, GitMerge, AlertTriangle } from 'lucide-react';
import type { NotificationType } from '../../../types';

interface NotificationIconProps {
  type: NotificationType;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({ type }) => {
  switch (type) {
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