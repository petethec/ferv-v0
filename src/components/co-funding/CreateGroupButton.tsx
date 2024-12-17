import React from 'react';
import { Plus } from 'lucide-react';

interface CreateGroupButtonProps {
  onClick: () => void;
}

export const CreateGroupButton: React.FC<CreateGroupButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      <Plus className="w-4 h-4 mr-2" />
      Create Group
    </button>
  );
};