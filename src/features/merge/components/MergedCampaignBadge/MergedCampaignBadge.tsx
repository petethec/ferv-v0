import React from 'react';
import { GitMerge } from 'lucide-react';

interface MergedCampaignBadgeProps {
  sourceProjectId: string;
  targetProjectId: string;
  mergeDate: Date;
}

export const MergedCampaignBadge: React.FC<MergedCampaignBadgeProps> = ({
  sourceProjectId,
  targetProjectId,
  mergeDate
}) => {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800">
      <GitMerge className="w-4 h-4 mr-2" />
      <span className="text-sm font-medium">Merged Campaign</span>
      <span className="ml-2 text-xs text-purple-600">
        {mergeDate.toLocaleDateString()}
      </span>
    </div>
  );
};