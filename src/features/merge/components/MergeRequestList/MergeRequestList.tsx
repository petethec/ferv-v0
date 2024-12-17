import React from 'react';
import { GitMerge, Clock, Check, X } from 'lucide-react';
import type { MergeRequest } from '../../types';
import { formatDistanceToNow } from '../../../../utils/formatting';

interface MergeRequestListProps {
  requests: MergeRequest[];
  onAccept?: (requestId: string) => void;
  onReject?: (requestId: string) => void;
}

export const MergeRequestList: React.FC<MergeRequestListProps> = ({
  requests,
  onAccept,
  onReject
}) => {
  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div
          key={request.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <GitMerge className="w-5 h-5 text-gray-400 mr-2" />
              <span className="font-medium text-gray-900">
                Merge Request #{request.id}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {formatDistanceToNow(request.createdAt)} ago
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4">{request.message}</p>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Combined Goal: ${request.combinedGoal.toLocaleString()}
            </div>
            
            {request.status === 'pending' && onAccept && onReject && (
              <div className="flex space-x-2">
                <button
                  onClick={() => onReject(request.id)}
                  className="flex items-center px-3 py-1 text-red-600 hover:bg-red-50 rounded-md"
                >
                  <X className="w-4 h-4 mr-1" />
                  Reject
                </button>
                <button
                  onClick={() => onAccept(request.id)}
                  className="flex items-center px-3 py-1 text-green-600 hover:bg-green-50 rounded-md"
                >
                  <Check className="w-4 h-4 mr-1" />
                  Accept
                </button>
              </div>
            )}
            
            {request.status !== 'pending' && (
              <span className={`px-2 py-1 rounded-full text-sm ${
                request.status === 'accepted'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};