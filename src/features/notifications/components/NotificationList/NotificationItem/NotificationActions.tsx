import React from 'react';
import { Trash2 } from 'lucide-react';

interface NotificationActionsProps {
  onRemove: (e: React.MouseEvent) => void;
}

export const NotificationActions: React.FC<NotificationActionsProps> = ({ onRemove }) => (
  <button
    onClick={onRemove}
    className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
  >
    <Trash2 className="w-4 h-4" />
  </button>
);