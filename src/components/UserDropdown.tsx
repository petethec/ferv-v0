import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings, LogOut, User } from 'lucide-react';

export const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img
          src="https://api.dicebear.com/7.x/personas/svg?seed=john"
          alt="Profile"
          className="w-8 h-8 rounded-full border-2 border-transparent hover:border-orange-600 transition-colors"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            <User className="w-4 h-4 mr-3" />
            Profile
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            <Settings className="w-4 h-4 mr-3" />
            Account Settings
          </Link>
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};