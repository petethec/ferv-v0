import React from 'react';
import { Users, Target, Clock } from 'lucide-react';
import type { CoFundingGroup } from '../../types';
import { JoinGroupButton } from './JoinGroupButton';

interface GroupCardProps {
  group: CoFundingGroup;
  onJoin: () => void;
}

export const GroupCard: React.FC<GroupCardProps> = ({ group, onJoin }) => {
  const progress = (group.currentAmount / group.targetAmount) * 100;
  const remainingAmount = group.targetAmount - group.currentAmount;

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-200 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{group.members.length} members</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-1" />
              <span>${remainingAmount.toLocaleString()} needed</span>
            </div>
          </div>
        </div>
        
        <JoinGroupButton onJoin={onJoin} />
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-orange-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      <div className="flex items-center -space-x-2">
        {group.members.map((member) => (
          <img
            key={member.id}
            src={`https://api.dicebear.com/7.x/personas/svg?seed=${member.name}`}
            alt={member.name}
            className="w-8 h-8 rounded-full border-2 border-white"
            title={member.name}
          />
        ))}
      </div>
    </div>
  );
};