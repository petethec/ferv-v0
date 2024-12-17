import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, Plus, History, CreditCard } from 'lucide-react';
import { ProfileButton } from './profile/ProfileButton';
import { AnimatedFlame } from './common/AnimatedFlame';
import { NotificationBell } from './notifications/NotificationBell';
import { generateCampaignPreviewUrl } from '../utils/campaign/urlUtils';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleCreateClick = () => {
    // Generate a preview URL for a new campaign
    const previewUrl = generateCampaignPreviewUrl({
      id: `new-${Date.now()}`,
      title: 'New Campaign'
    });
    
    // Store it in session storage for the create page
    sessionStorage.setItem('newCampaignPreview', previewUrl);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <AnimatedFlame size={8} />
            <span className="text-xl font-bold text-gray-900">Fervor</span>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, categories, or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <Link 
              to="/explore" 
              className={`text-gray-600 hover:text-orange-600 font-medium ${
                location.pathname === '/explore' ? 'text-orange-600' : ''
              }`}
            >
              Explore
            </Link>
            <Link 
              to="/analytics" 
              className={`text-gray-600 hover:text-orange-600 font-medium ${
                location.pathname.startsWith('/analytics') ? 'text-orange-600' : ''
              }`}
            >
              Analytics
            </Link>
            <Link 
              to="/abandoned-projects" 
              className={`text-gray-600 hover:text-orange-600 font-medium flex items-center ${
                location.pathname === '/abandoned-projects' ? 'text-orange-600' : ''
              }`}
            >
              <History className="w-4 h-4 mr-1" />
              Abandoned
            </Link>
            <Link 
              to="/subscription" 
              className={`text-gray-600 hover:text-orange-600 font-medium flex items-center ${
                location.pathname === '/subscription' ? 'text-orange-600' : ''
              }`}
            >
              <CreditCard className="w-4 h-4 mr-1" />
              Subscription
            </Link>
            <Link 
              to="/create"
              onClick={handleCreateClick}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-full text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-1" />
              Create
            </Link>
            <div className="flex items-center space-x-4">
              <NotificationBell />
              <ProfileButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};