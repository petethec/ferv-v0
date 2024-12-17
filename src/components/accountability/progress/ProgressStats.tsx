import React from 'react';

interface ProgressStatsProps {
  votes: number;
  progress: number;
  className?: string;
}

export const ProgressStats: React.FC<ProgressStatsProps> = ({
  votes,
  progress,
  className = ''
}) => {
  return (
    <div className={`flex justify-between text-sm text-gray-500 ${className}`}>
      <span>{votes} votes</span>
      <span>{progress.toFixed(1)}% funded</span>
    </div>
  );
};