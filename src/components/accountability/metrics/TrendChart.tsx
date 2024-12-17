import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TrendChartProps {
  data: Array<{ date: string; amount: number }>;
  className?: string;
}

export const TrendChart: React.FC<TrendChartProps> = ({ data, className = '' }) => {
  const maxAmount = Math.max(...data.map(d => d.amount));
  const hasPositiveTrend = data[data.length - 1].amount > data[0].amount;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">Contribution Trend</h4>
        <div className={`flex items-center text-sm ${
          hasPositiveTrend ? 'text-green-600' : 'text-red-600'
        }`}>
          {hasPositiveTrend ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          {hasPositiveTrend ? 'Increasing' : 'Decreasing'}
        </div>
      </div>

      <div className="h-32 flex items-end space-x-2">
        {data.map((point, index) => (
          <div
            key={point.date}
            className="flex-1 flex flex-col items-center"
          >
            <div
              className="w-full bg-orange-100 rounded-t hover:bg-orange-200 transition-colors"
              style={{
                height: `${(point.amount / maxAmount) * 100}%`,
                minHeight: '4px'
              }}
            />
            <span className="text-xs text-gray-500 mt-1">
              {new Date(point.date).toLocaleDateString(undefined, { weekday: 'short' })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};