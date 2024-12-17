import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreateGroupFormProps {
  projectId: string;
  projectGoal: number;
  onSubmit: (data: {
    name: string;
    targetAmount: number;
    description: string;
    maxParticipants?: number;
    deadline?: string;
  }) => void;
  onClose: () => void;
}

export const CreateGroupForm: React.FC<CreateGroupFormProps> = ({
  projectGoal,
  onSubmit,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: 0,
    description: '',
    maxParticipants: undefined as number | undefined,
    deadline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Create Co-Funding Group</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Group Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Give your group a memorable name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Amount ($)
            </label>
            <input
              type="number"
              required
              min="1"
              max={projectGoal}
              value={formData.targetAmount}
              onChange={(e) => setFormData({ ...formData, targetAmount: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={3}
              placeholder="Describe your group's goals and any special perks for members"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Participants
              </label>
              <input
                type="number"
                min="2"
                value={formData.maxParticipants || ''}
                onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value ? Number(e.target.value) : undefined })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Optional"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};