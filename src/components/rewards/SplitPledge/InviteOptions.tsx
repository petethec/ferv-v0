import React, { useState } from 'react';
import { Share2, Mail, Link, QrCode, ArrowLeft } from 'lucide-react';
import type { Reward } from '../../../types';

interface InviteOptionsProps {
  reward: Reward;
  contribution: number;
  maxContributors: number;
  onBack: () => void;
  onClose: () => void;
}

export const InviteOptions: React.FC<InviteOptionsProps> = ({
  reward,
  contribution,
  maxContributors,
  onBack,
  onClose
}) => {
  const [shareUrl] = useState(() => {
    // In production, this would be a real unique URL
    return `https://example.com/split/${Math.random().toString(36).slice(2)}`;
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-medium text-green-900">Split Pledge Created!</h3>
        <p className="mt-1 text-sm text-green-700">
          Share this pledge with potential contributors. They'll have 48 hours to join
          and contribute their share.
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={copyToClipboard}
          className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50 transition-colors group"
        >
          <div className="flex items-center">
            <Link className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
            <span className="ml-3 text-gray-900">Copy Invite Link</span>
          </div>
          <span className="text-sm text-gray-500">Click to copy</span>
        </button>

        <button
          className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50 transition-colors group"
        >
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
            <span className="ml-3 text-gray-900">Send Email Invites</span>
          </div>
          <span className="text-sm text-gray-500">→</span>
        </button>

        <button
          className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50 transition-colors group"
        >
          <div className="flex items-center">
            <QrCode className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
            <span className="ml-3 text-gray-900">Show QR Code</span>
          </div>
          <span className="text-sm text-gray-500">→</span>
        </button>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
        >
          Done
        </button>
      </div>
    </div>
  );
};