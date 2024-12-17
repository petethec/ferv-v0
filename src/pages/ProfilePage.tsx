import React, { useState } from 'react';
import { User, Settings, Bell, Shield, CreditCard } from 'lucide-react';
import { currentUser } from '../data/mockUser';

export const ProfilePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'about' | 'contact' | 'experience' | 'portfolio'>('about');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-start space-x-6">
          <div className="relative">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <button className="absolute bottom-2 right-2 p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 shadow-md">
              <Settings className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{currentUser.name}</h1>
                <p className="text-lg text-gray-600 mt-1">{currentUser.bio || 'No bio provided'}</p>
              </div>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
                Edit Profile
              </button>
            </div>

            <div className="mt-6 flex items-center space-x-8">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Member since {currentUser.joinedAt.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">{currentUser.backedProjects.length} Projects Backed</span>
              </div>
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">{currentUser.referralCount} Referrals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-8">
        <nav className="flex border-b border-gray-200">
          {[
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' },
            { id: 'experience', label: 'Experience' },
            { id: 'portfolio', label: 'Portfolio' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeSection === tab.id
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeSection === 'about' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">About Me</h3>
              <p className="text-gray-600">
                {currentUser.bio || 'No bio provided'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Badges & Achievements</h3>
              <div className="flex flex-wrap gap-4">
                {currentUser.badges.map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-2 bg-orange-50 px-3 py-1 rounded-full">
                    <span className="text-orange-600">{badge.icon}</span>
                    <span className="text-sm font-medium text-orange-800">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-gray-900">{currentUser.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <p className="mt-1 text-gray-900">{currentUser.location || 'Not specified'}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Crowdfunding Experience</h3>
              <div className="space-y-4">
                {currentUser.createdProjects.map((projectId) => (
                  <div key={projectId} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">Project #{projectId}</h4>
                    <p className="text-sm text-gray-600 mt-1">Creator</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'portfolio' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Project Portfolio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentUser.backedProjects.map((project) => (
                  <div key={project.projectId} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">Project #{project.projectId}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Backed on {project.date.toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};