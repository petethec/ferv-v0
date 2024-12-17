import React from 'react';
import type { Contribution } from '../../types/flames';

interface ContributionChartProps {
  contributions: Contribution[];
}

export const ContributionChart: React.FC<ContributionChartProps> = ({
  contributions
}) => {
  // Group contributions by hour
  const hourlyData = new Array(24).fill(0);
  contributions.forEach(contribution => {
    const hour = new Date(contribution.timestamp).getHours();
    hourlyData[hour] += contribution.amount;
  });

  const maxAmount = Math.max(...hourlyData);

  return (
    <div className="h-48">
      <div className="flex items-end h-full space-x-1">
        {hourlyData.map((amount, hour) => {
          const height = maxAmount ? (amount / maxAmount) * 100 : 0;
          return (
            <div
              key={hour}
              className="flex-1 bg-orange-100 hover:bg-orange-200 transition-colors rounded-t"
              style={{ height: `${height}%` }}
              title={`${hour}:00 - $${amount.toLocaleString()}`}
            />
          );
        })}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>12 AM</span>
        <span>6 AM</span>
        <span>12 PM</span>
        <span>6 PM</span>
        <span>11 PM</span>
      </div>
    </div>
  );
};