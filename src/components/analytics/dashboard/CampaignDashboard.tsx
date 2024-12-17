import React, { useState } from 'react';
import { Download, Calendar } from 'lucide-react';
import { MetricsOverview } from './MetricsOverview';
import { PerformanceChart } from './PerformanceChart';
import { CampaignComparison } from './CampaignComparison';
import { MetricsTable } from './MetricsTable';
import { DateRangePicker } from './DateRangePicker';
import { campaignMetrics } from '../../../data/marketing/campaignMetrics';
import { exportToCsv, exportToPdf } from '../../../utils/marketing/exportUtils';

export const CampaignDashboard: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date('2024-02-15'),
    new Date('2024-03-15')
  ]);

  const handleExport = async (format: 'csv' | 'pdf') => {
    if (format === 'csv') {
      await exportToCsv(campaignMetrics);
    } else {
      await exportToPdf(campaignMetrics);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaign Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and analyze your campaign performance
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <DateRangePicker value={dateRange} onChange={setDateRange} />
          
          <div className="flex space-x-2">
            <button
              onClick={() => handleExport('csv')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Download className="w-4 h-4 mr-2 inline-block" />
              Export CSV
            </button>
            <button
              onClick={() => handleExport('pdf')}
              className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium hover:bg-orange-700"
            >
              <Download className="w-4 h-4 mr-2 inline-block" />
              Export PDF
            </button>
          </div>
        </div>
      </div>

      <MetricsOverview metrics={campaignMetrics} dateRange={dateRange} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <PerformanceChart metrics={campaignMetrics} dateRange={dateRange} />
        <CampaignComparison metrics={campaignMetrics} />
      </div>

      <div className="mt-8">
        <MetricsTable metrics={campaignMetrics} dateRange={dateRange} />
      </div>
    </div>
  );
};