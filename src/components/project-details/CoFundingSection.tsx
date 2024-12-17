import React, { useState } from 'react';
import { Users, Target, Calendar } from 'lucide-react';
import { CoFundingGroup, Project } from '../../types';
import { coFundingGroups } from '../../data/cofundingGroups';
import { JoinGroupModal } from './JoinGroupModal';

interface CoFundingSectionProps {
  project: Project;
}

export const CoFundingSection: React.FC<CoFundingSectionProps> = ({ project }) => {
  const [selectedGroup, setSelectedGroup] = useState<CoFundingGroup | null>(null);
  const projectGroups = coFundingGroups.filter(group => group.projectId === project.id);

  if (!project.allowCoFunding) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Co-Funding Groups</h2>
      
      <div className="space-y-6">
        {projectGroups.map((group) => (
          <div
            key={group.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-orange-200 transition-colors"
          >
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
                    <span>${group.targetAmount.toLocaleString()} goal</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedGroup(group)}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Join Group
              </button>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-orange-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${Math.min(
                    (group.currentAmount / group.targetAmount) * 100,
                    100
                  )}%`,
                }}
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
        ))}

        <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
          + Create New Group
        </button>
      </div>

      {selectedGroup && (
        <JoinGroupModal
          group={selectedGroup}
          onClose={() => setSelectedGroup(null)}
          onJoin={(amount) => {
            console.log('Joining group with amount:', amount);
            setSelectedGroup(null);
          }}
        />
      )}
    </div>
  );
};