import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';

interface VoteConfirmationModalProps {
  consequence: Consequence;
  amount: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export const VoteConfirmationModal: React.FC<VoteConfirmationModalProps> = ({
  consequence,
  amount,
  onConfirm,
  onCancel
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-orange-600" />
          <h3 className="text-lg font-bold text-gray-900">Confirm Your Vote</h3>
        </div>

        <p className="text-gray-600 mb-6">
          You are about to pledge ${amount.toLocaleString()} to support the following consequence:
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-gray-900 mb-2">{consequence.title}</h4>
          <p className="text-sm text-gray-600">{consequence.description}</p>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center"
          >
            <Check className="w-4 h-4 mr-2" />
            Confirm Vote
          </button>
        </div>
      </div>
    </div>
  );
};