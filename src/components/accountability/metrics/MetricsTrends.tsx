import React from 'react';
import { TrendChart } from './TrendChart';
import { useConsequenceMetrics } from '../hooks/useConsequenceMetrics';
import type { Consequence } from '../../../types/accountability';

interface MetricsTrendsProps {
  consequences: Consequence[];
  className?: string;
}

export const MetricsTrends: React.FC<MetricsTrendsProps> = ({
  consequences,
  className = ''
}) => {
  const { trendData } = useConsequenceMetrics(consequences);

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-6">Contribution Trends</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Daily Activity</h4>
          <TrendChart data={trendData.daily} />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Weekly Overview</h4>
          <TrendChart data={trendData.daily} /> {/* Replace with weekly data */}
        </div>
      </div>
    </div>
  );
};