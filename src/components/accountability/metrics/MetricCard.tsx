import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  format?: (value: number) => string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  label,
  value,
  format = (v) => v.toString()
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center text-sm text-gray-600 mb-1">
        <Icon className="w-4 h-4 mr-1" />
        {label}
      </div>
      <div className="text-2xl font-bold text-gray-900">
        {typeof value === 'number' ? format(value) : value}
      </div>
    </div>
  );
};