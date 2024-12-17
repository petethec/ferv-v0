import React from 'react';

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

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={data.allowCoFunding}
                onChange={(e) =>
                  onUpdate({ ...data, allowCoFunding: e.target.checked })
                }
                className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
            </div>
            <div className="ml-3">
              <label className="font-medium text-gray-900">
                Enable Co-Funding Groups
              </label>
              <p className="text-sm text-gray-500">
                Allow backers to form groups and pool their funds together to
                unlock higher reward tiers.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={data.flexibleFunding}
                onChange={(e) =>
                  onUpdate({ ...data, flexibleFunding: e.target.checked })
                }
                className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
            </div>
            <div className="ml-3">
              <label className="font-medium text-gray-900">
                Flexible Funding
              </label>
              <p className="text-sm text-gray-500">
                Receive funds even if your campaign doesn't reach its goal.
                Standard fees may apply.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={data.communityEndorsements}
                onChange={(e) =>
                  onUpdate({ ...data, communityEndorsements: e.target.checked })
                }
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