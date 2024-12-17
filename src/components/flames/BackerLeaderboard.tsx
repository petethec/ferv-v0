import React from 'react';
import { Trophy, Medal } from 'lucide-react';
import type { Backer } from '../../types/flames';

interface BackerLeaderboardProps {
  backers: Backer[];
  limit?: number;
}

export const BackerLeaderboard: React.FC<BackerLeaderboardProps> = ({
  backers,
  limit = 10
}) => {
  const topBackers = backers
    .sort((a, b) => b.totalContributed - a.totalContributed)
    .slice(0, limit);

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 0:
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 1:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-orange-400" />;
      default:
        return <span className="text-gray-500">#{rank + 1}</span>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Top Contributors</h2>
      
      <div className="space-y-4">
        {topBackers.map((backer, index) => (
          <div
            key={backer.id}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 flex justify-center">
                {getRankBadge(index)}
              </div>
              <img
                src={`https://api.dicebear.com/7.x/personas/svg?seed=${backer.name}`}
                alt={backer.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-900">{backer.name}</div>
                <div className="text-sm text-gray-500">
                  {backer.contributions} contributions
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold text-orange-600">
              ${backer.totalContributed.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};