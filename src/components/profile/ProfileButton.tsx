import React, { useState, useRef, useEffect } from 'react';
import { ProfileMenu } from './ProfileMenu';
import { currentUser } from '../../data/mockUser';

export const ProfileButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        menuRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-8 h-8 rounded-full border-2 border-transparent hover:border-orange-600 transition-colors"
        />
      </button>

      {isOpen && (
        <div ref={menuRef}>
          <ProfileMenu onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};