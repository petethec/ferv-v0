import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import type { CampaignMetrics } from '../../../types/marketing';

interface PerformanceChartProps {
  metrics: CampaignMetrics[];
  dateRange: [Date, Date];
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ metrics }) => {
  const chartData = useMemo(() => {
    const labels = metrics.map(m => m.name);
    
    return {
      labels,
      datasets: [
        {
          label: 'Conversion Rate',
          data: metrics.map(m => m.metrics.after.conversionRate),
          borderColor: 'rgb(249, 115, 22)',
          tension: 0.4
        },
        {
          label: 'Click-through Rate',
          data: metrics.map(m => m.metrics.after.clickThroughRate),
          borderColor: 'rgb(59, 130, 246)',
          tension: 0.4
        }
      ]
    };
  }, [metrics]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Campaign Performance Trends'
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Performance Trends</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};