import React from 'react';

interface CommunitySettingsProps {
  communityEndorsements: boolean;
  onChange: (value: boolean) => void;
}

export const CommunitySettings: React.FC<CommunitySettingsProps> = ({
  communityEndorsements,
  onChange
}) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          checked={communityEndorsements}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
        />
      </div>
      <div className="ml-3">
        <label className="font-medium text-gray-900">
          Community Endorsements
        </label>
        <p className="text-sm text-gray-500">
          Allow Fervor Circles to endorse and promote your campaign to
          their members.
        </p>
      </div>
    </div>
  );
};