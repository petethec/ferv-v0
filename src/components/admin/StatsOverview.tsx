import React from 'react';
import { TrendingUp, Users, Archive, DollarSign } from 'lucide-react';
import { AdminDashboardData } from '../../types/admin';

interface StatsOverviewProps {
  stats: AdminDashboardData['stats'];
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  const cards = [
    {
      title: 'Total Projects',
      value: stats.totalCampaigns,
      change: '+12%',
      icon: Archive,
    },
    {
      title: 'Active Projects',
      value: stats.activeCampaigns,
      change: '+5%',
      icon: TrendingUp,
    },
    {
      title: 'Total Users',
      value: stats.totalUsers,
      change: '+18%',
      icon: Users,
    },
    {
      title: 'Total Funds Raised',
      value: `$${stats.totalFundsRaised.toLocaleString()}`,
      change: '+25%',
      icon: DollarSign,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-lg shadow px-6 py-5"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <card.icon className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
                <p className="ml-2 text-sm font-medium text-green-600">
                  {card.change}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};