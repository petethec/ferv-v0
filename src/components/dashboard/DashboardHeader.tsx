import React from 'react';
import { User, BadgeCheck, Gift, Rocket, Users } from 'lucide-react';
import { User as UserType } from '../../types';

interface DashboardHeaderProps {
  user: UserType;
  activeTab: string;
  onTabChange: (tab: 'contributions' | 'campaigns' | 'communities') => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  user,
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    {
      id: 'contributions',
      label: 'My Contributions',
      icon: Gift,
    },
    {
      id: 'campaigns',
      label: 'My Campaigns',
      icon: Rocket,
      creatorOnly: true,
    },
    {
      id: 'communities',
      label: 'My Communities',
      icon: Users,
    },
  ] as const;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-start space-x-4 mb-8">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            {user.isCreator && (
              <BadgeCheck className="w-6 h-6 text-orange-600" />
            )}
          </div>
          <p className="text-gray-600 mt-1">Member since {user.joinedAt.toLocaleDateString()}</p>
          
          <div className="flex items-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">
                {user.referralCount} referrals
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {user.badges.slice(0, 3).map((badge) => (
                  <div
                    key={badge.id}
                    className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-white"
                    title={badge.name}
                  >
                    <span className="text-xs text-orange-600">🏆</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {user.badges.length} badges earned
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map(({ id, label, icon: Icon, creatorOnly }) => {
            if (creatorOnly && !user.isCreator) return null;
            return (
              <button
                key={id}
                onClick={() => onTabChange(id as any)}
                className={`py-4 relative ${
                  activeTab === id
                    ? 'text-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </div>
                {activeTab === id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};