import React from 'react';
import { Users, Target, Clock } from 'lucide-react';
import type { CoFundingGroup } from '../../types';
import { GroupCard } from './GroupCard';
import { CreateGroupButton } from './CreateGroupButton';

interface GroupFundingWidgetProps {
  projectId: string;
  groups: CoFundingGroup[];
  onCreateGroup: () => void;
  onJoinGroup: (groupId: string) => void;
}

export const GroupFundingWidget: React.FC<GroupFundingWidgetProps> = ({
  groups,
  onCreateGroup,
  onJoinGroup
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Co-Funding Groups</h2>
          <p className="text-sm text-gray-600">Join forces with other backers to unlock higher rewards</p>
        </div>
        <CreateGroupButton onClick={onCreateGroup} />
      </div>

      <div className="space-y-4">
        {groups.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            onJoin={() => onJoinGroup(group.id)}
          />
        ))}

        {groups.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">No co-funding groups yet.</p>
            <p className="text-sm text-gray-400 mt-1">Be the first to create one!</p>
          </div>
        )}
      </div>
    </div>
  );
};