import React from 'react';
import { Flame } from 'lucide-react';
import { calculateHeatLevel } from '../../utils/flameCalculations';
import type { HeatLevel } from '../../types/flames';

interface FlameMeterProps {
  projectId: string;
  contributions: number[];
  timestamps: number[];
  size?: 'sm' | 'md' | 'lg';
}

export const FlameMeter: React.FC<FlameMeterProps> = ({
  contributions,
  timestamps,
  size = 'md'
}) => {
  const heatLevel = calculateHeatLevel(contributions, timestamps);
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const getHeatStyles = (level: HeatLevel) => {
    switch (level) {
      case 'cold':
        return 'text-gray-400 animate-none';
      case 'warm':
        return 'text-orange-400 animate-pulse';
      case 'hot':
        return 'text-orange-500 animate-bounce';
      case 'blazing':
        return 'text-orange-600 animate-[pulse_0.5s_ease-in-out_infinite]';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="relative group">
      <Flame 
        className={`${sizeClasses[size]} ${getHeatStyles(heatLevel)} transition-all duration-300`}
      />
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {heatLevel.charAt(0).toUpperCase() + heatLevel.slice(1)} Activity
      </div>
    </div>
  );
};