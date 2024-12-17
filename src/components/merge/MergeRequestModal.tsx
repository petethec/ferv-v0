import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../../types';

interface MergeRequestModalProps {
  sourceProject: Project;
  targetProject: Project;
  onClose: () => void;
  onSubmit: (message: string) => void;
}

export const MergeRequestModal: React.FC<MergeRequestModalProps> = ({
  sourceProject,
  targetProject,
  onClose,
  onSubmit
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(message);
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

        <h2 className="text-2xl font-bold mb-4">Request Campaign Merge</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">Requesting to merge:</div>
          <div className="font-medium text-gray-900">{sourceProject.title}</div>
          <div className="text-sm text-gray-600 mt-4 mb-2">With:</div>
          <div className="font-medium text-gray-900">{targetProject.title}</div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message to Project Creator
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={4}
              placeholder="Explain why you think these campaigns would work well together..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
          >
            Send Merge Request
          </button>
        </form>
      </div>
    </div>
  );
};