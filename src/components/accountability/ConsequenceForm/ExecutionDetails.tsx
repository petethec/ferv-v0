import React from 'react';
import { Calendar, DollarSign, MapPin } from 'lucide-react';
import type { ConsequenceType } from '../../../types/accountability';

interface ExecutionDetailsProps {
  type: ConsequenceType;
  details: Record<string, any>;
  onDetailsChange: (details: Record<string, any>) => void;
}

export const ExecutionDetails: React.FC<ExecutionDetailsProps> = ({
  type,
  details,
  onDetailsChange
}) => {
  const renderFields = () => {
    switch (type) {
      case 'donation':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Target Organization
              </label>
              <input
                type="text"
                value={details.targetEntity || ''}
                onChange={(e) => onDetailsChange({ ...details, targetEntity: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Organization name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Donation Purpose
              </label>
              <textarea
                value={details.donationPurpose || ''}
                onChange={(e) => onDetailsChange({ ...details, donationPurpose: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                rows={3}
                placeholder="Explain the purpose of this donation"
              />
            </div>
          </>
        );

      case 'protest':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                value={details.location || ''}
                onChange={(e) => onDetailsChange({ ...details, location: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Protest location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Duration (days)
              </label>
              <input
                type="number"
                value={details.duration || ''}
                onChange={(e) => onDetailsChange({ ...details, duration: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                min="1"
              />
            </div>
          </>
        );

      // Add other consequence type fields...
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Execution Details</h3>
      {renderFields()}
    </div>
  );
};