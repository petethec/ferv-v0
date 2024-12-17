import React from 'react';
import { User } from '../../types';
import { BadgeCheck, Camera } from 'lucide-react';

interface ProfileHeaderProps {
  user: User;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start space-x-6">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 p-1.5 bg-orange-600 text-white rounded-full hover:bg-orange-700">
            <Camera className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            {user.isCreator && (
              <BadgeCheck className="w-6 h-6 text-orange-600" />
            )}
          </div>

          <p className="text-gray-500 mt-1">{user.email}</p>

          <div className="mt-4 flex items-center space-x-6 text-sm">
            <div>
              <span className="text-gray-500">Member since</span>{' '}
              <span className="font-medium text-gray-900">
                {user.joinedAt.toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Referrals</span>{' '}
              <span className="font-medium text-gray-900">{user.referralCount}</span>
            </div>
            <div>
              <span className="text-gray-500">Badges</span>{' '}
              <span className="font-medium text-gray-900">{user.badges.length}</span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button className="px-3 py-1 text-sm text-gray-600 hover:text-orange-600">
              View Public Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};