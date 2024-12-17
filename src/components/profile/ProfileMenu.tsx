import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Settings, User, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface ProfileMenuProps {
  onClose: () => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onClose }) => {
  const { logout } = useAuth();

  const menuItems = [
    {
      icon: User,
      label: 'My Profile',
      to: '/profile'
    },
    {
      icon: Briefcase,
      label: 'Dashboard',
      to: '/dashboard'
    },
    {
      icon: Users,
      label: 'My Communities',
      to: '/communities'
    },
    {
      icon: Settings,
      label: 'Settings',
      to: '/settings'
    }
  ];

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
      <div className="py-1">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <item.icon className="w-4 h-4 mr-3" />
            {item.label}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};