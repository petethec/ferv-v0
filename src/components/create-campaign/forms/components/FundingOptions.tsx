import React from 'react';

interface FundingOptionsProps {
  allowCoFunding: boolean;
  flexibleFunding: boolean;
  onChange: (key: 'allowCoFunding' | 'flexibleFunding', value: boolean) => void;
}

export const FundingOptions: React.FC<FundingOptionsProps> = ({
  allowCoFunding,
  flexibleFunding,
  onChange
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            checked={allowCoFunding}
            onChange={(e) => onChange('allowCoFunding', e.target.checked)}
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
            checked={flexibleFunding}
            onChange={(e) => onChange('flexibleFunding', e.target.checked)}
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
    </div>
  );
};