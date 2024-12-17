import React from 'react';
import { Users } from 'lucide-react';

interface JoinGroupButtonProps {
  onJoin: () => void;
}

export const JoinGroupButton: React.FC<JoinGroupButtonProps> = ({ onJoin }) => {
  return (
    <button
      onClick={onJoin}
      className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
    >
      <span className="flex items-center">
        <Users className="w-4 h-4 mr-2" />
        Join Group
      </span>
    </button>
  );
};