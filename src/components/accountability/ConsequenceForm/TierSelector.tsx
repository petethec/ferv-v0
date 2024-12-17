import React from 'react';
import { AlertTriangle, Bell, Shield } from 'lucide-react';
import type { ConsequenceTier } from '../../../types/accountability';

interface TierSelectorProps {
  selectedTier: ConsequenceTier;
  onTierSelect: (tier: ConsequenceTier) => void;
}

export const TierSelector: React.FC<TierSelectorProps> = ({
  selectedTier,
  onTierSelect
}) => {
  const tiers = [
    {
      level: 1,
      label: 'Awareness',
      description: 'Media outreach and awareness campaigns',
      icon: Bell,
      color: 'yellow'
    },
    {
      level: 2,
      label: 'Action',
      description: 'Peaceful demonstrations and direct campaigns',
      icon: Shield,
      color: 'orange'
    },
    {
      level: 3,
      label: 'Impact',
      description: 'Legal action and industry alternatives',
      icon: AlertTriangle,
      color: 'red'
    }
  ];

  return (
    <div className="space-y-4">
      {tiers.map((tier) => (
        <button
          key={tier.level}
          onClick={() => onTierSelect(tier.level as ConsequenceTier)}
          className={`w-full p-4 rounded-lg border text-left transition-colors ${
            selectedTier === tier.level
              ? `border-${tier.color}-600 bg-${tier.color}-50`
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start space-x-3">
            <tier.icon className={`w-5 h-5 ${
              selectedTier === tier.level 
                ? `text-${tier.color}-600` 
                : 'text-gray-400'
            }`} />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-900">Tier {tier.level}: {tier.label}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-${tier.color}-100 text-${tier.color}-800`}>
                  Level {tier.level}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{tier.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};