import React, { useState } from 'react';
import { User } from '../../types';
import { Save } from 'lucide-react';

interface PersonalInfoPanelProps {
  user: User;
}

export const PersonalInfoPanel: React.FC<PersonalInfoPanelProps> = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio || '',
    location: user.location || '',
    website: user.website || '',
    twitter: user.twitter || '',
    linkedin: user.linkedin || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement update logic
    console.log('Updating profile:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Website</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Twitter</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              @
            </span>
            <input
              type="text"
              value={formData.twitter}
              onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
              className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
          <input
            type="text"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </div>
    </form>
  );
};