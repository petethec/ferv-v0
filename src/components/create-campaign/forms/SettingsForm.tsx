import React from 'react';
import { Settings } from './components/Settings';
import { FundingOptions } from './components/FundingOptions';
import { CommunitySettings } from './components/CommunitySettings';

interface SettingsFormData {
  allowCoFunding: boolean;
  flexibleFunding: boolean;
  communityEndorsements: boolean;
}

interface SettingsFormProps {
  data: SettingsFormData;
  onUpdate: (data: SettingsFormData) => void;
  onNext: () => void;
  onBack: () => void;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({
  data,
  onUpdate,
  onNext,
  onBack
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Campaign Settings</h3>
        <div className="space-y-8">
          <FundingOptions
            allowCoFunding={data.allowCoFunding}
            flexibleFunding={data.flexibleFunding}
            onChange={(key, value) => onUpdate({ ...data, [key]: value })}
          />
          <CommunitySettings
            communityEndorsements={data.communityEndorsements}
            onChange={(value) => onUpdate({ ...data, communityEndorsements: value })}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};