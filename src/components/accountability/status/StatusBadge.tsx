import React from 'react';
import type { ConsequenceStatus, ConsequenceTier } from '../../../types/accountability';

interface StatusBadgeProps {
  status: ConsequenceStatus;
  tier?: ConsequenceTier;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  tier,
  className = ''
}) => {
  const getStatusColors = () => {
    if (tier) {
      return tier === 1
        ? 'bg-yellow-100 text-yellow-800'
        : tier === 2
        ? 'bg-orange-100 text-orange-800'
        : 'bg-red-100 text-red-800';
    }

    return status === 'executed'
      ? 'bg-green-100 text-green-800'
      : status === 'active'
      ? 'bg-orange-100 text-orange-800'
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColors()} ${className}`}>
      {tier ? `Tier ${tier}` : status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};