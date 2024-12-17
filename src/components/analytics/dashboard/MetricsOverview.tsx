import React from 'react';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import type { CampaignMetrics } from '../../../types/marketing';
import { calculateTotalImpact } from '../../../utils/marketing/metricCalculations';
import { formatCurrency, formatPercentage } from '../../../utils/marketing/formatters';

interface MetricsOverviewProps {
  metrics: CampaignMetrics[];
  dateRange: [Date, Date];
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ metrics }) => {
  const impact = calculateTotalImpact(metrics);

  const cards = [
    {
      title: 'Total Spend',
      value: formatCurrency(impact.totalSpend),
      change: '+12.5%',
      icon: DollarSign
    },
    {
      title: 'Total Conversions',
      value: impact.totalConversions.toFixed(0),
      change: '+24.8%',
      icon: Users
    },
    {
      title: 'Average ROAS',
      value: formatPercentage(impact.averageRoas),
      change: '+18.2%',
      icon: TrendingUp
    },
    {
      title: 'Goal Progress',
      value: '78%',
      change: '+8.4%',
      icon: Target
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{card.title}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{card.value}</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <card.icon className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">{card.change}</span>
            <span className="text-sm text-gray-500"> vs. previous period</span>
          </div>
        </div>
      ))}
    </div>
  );
};