import React from 'react';
import { Sliders, Users, Target, MapPin } from 'lucide-react';

interface FilterPanelProps {
  showCoFundingOnly: boolean;
  onCoFundingToggle: (value: boolean) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  showCoFundingOnly,
  onCoFundingToggle,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        <Sliders className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Funding Type</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showCoFundingOnly}
              onChange={(e) => onCoFundingToggle(e.target.checked)}
              className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
            />
            <span className="ml-2 text-gray-600">Co-Funding Only</span>
          </label>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Funding Goal</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="ml-2 text-gray-600">Under $10,000</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="ml-2 text-gray-600">$10,000 - $50,000</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="ml-2 text-gray-600">Over $50,000</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Project Status</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="ml-2 text-gray-600">Recently Launched</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="ml-2 text-gray-600">Nearly Funded</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="ml-2 text-gray-600">Ending Soon</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};