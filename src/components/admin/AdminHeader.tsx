import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';
import { AnimatedFlame } from '../common/AnimatedFlame';

export const AdminHeader: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <AnimatedFlame size={8} />
            <span className="ml-2 text-xl font-bold text-gray-900">Fervor Admin</span>
          </div>

          <nav className="flex items-center space-x-8">
            <Link
              to="/admin/projects"
              className="text-gray-600 hover:text-orange-600"
            >
              Projects
            </Link>
            <Link
              to="/admin/users"
              className="text-gray-600 hover:text-orange-600"
            >
              Users
            </Link>
            <Link
              to="/admin/reports"
              className="text-gray-600 hover:text-orange-600"
            >
              Reports
            </Link>
            <Link
              to="/admin/settings"
              className="text-gray-600 hover:text-orange-600"
            >
              <Settings className="w-5 h-5" />
            </Link>
            <button className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};