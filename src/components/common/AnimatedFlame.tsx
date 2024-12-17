import React from 'react';
import { Flame } from 'lucide-react';

interface AnimatedFlameProps {
  size?: number;
  className?: string;
}

export const AnimatedFlame: React.FC<AnimatedFlameProps> = ({ 
  size = 8,
  className = ''
}) => {
  return (
    <div className="relative">
      {/* Base flame with glow effect */}
      <div className="absolute inset-0 animate-pulse">
        <Flame 
          className={`w-${size} h-${size} text-orange-400 opacity-75 blur-[2px]`}
        />
      </div>
      
      {/* Main flame with flicker animation */}
      <Flame 
        className={`w-${size} h-${size} text-orange-600 relative animate-[flicker_3s_infinite] ${className}`}
      />
    </div>
  );
};