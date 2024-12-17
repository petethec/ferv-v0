import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import type { CampaignMetrics } from '../../../types/marketing';
import { formatCurrency, formatPercentage } from '../../../utils/marketing/formatters';

interface MetricsTableProps {
  metrics: CampaignMetrics[];
  dateRange: [Date, Date];
}

export const MetricsTable: React.FC<MetricsTableProps> = ({ metrics }) => {
  const [sortField, setSortField] = useState<keyof CampaignMetrics['metrics']['after']>('conversionRate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (field: keyof CampaignMetrics['metrics']['after']) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedMetrics = [...metrics].sort((a, b) => {
    const aValue = a.metrics.after[sortField];
    const bValue = b.metrics.after[sortField];
    return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Campaign
              </th>
              {['conversionRate', 'clickThroughRate', 'costPerAcquisition', 'returnOnAdSpend'].map((field) => (
                <th
                  key={field}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(field as keyof CampaignMetrics['metrics']['after'])}
                >
                  <div className="flex items-center space-x-1">
                    <span>{field.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedMetrics.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {campaign.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {campaign.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatPercentage(campaign.metrics.after.conversionRate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatPercentage(campaign.metrics.after.clickThroughRate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatCurrency(campaign.metrics.after.costPerAcquisition)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {campaign.metrics.after.returnOnAdSpend.toFixed(2)}x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};