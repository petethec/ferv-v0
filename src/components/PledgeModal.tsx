import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PledgeModalProps {
  projectId: string;
  onClose: () => void;
  onSubmit: (amount: number, message: string) => void;
}

export const PledgeModal: React.FC<PledgeModalProps> = ({ onClose, onSubmit }) => {
  const [amount, setAmount] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(Number(amount), message);
    onClose();
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

        <h2 className="text-2xl font-bold mb-4">Back this project</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pledge Amount ($)
            </label>
            <input
              type="number"
              min="1"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message (optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
          >
            Confirm Pledge
          </button>
        </form>
      </div>
    </div>
  );
};