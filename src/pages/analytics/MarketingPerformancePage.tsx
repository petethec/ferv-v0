import React from 'react';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { campaignMetrics } from '../../data/marketing/campaignMetrics';
import { MetricsOverview } from '../../components/analytics/dashboard/MetricsOverview';
import { MetricsTable } from '../../components/analytics/dashboard/MetricsTable';

export const MarketingPerformancePage: React.FC = () => {
  const dateRange: [Date, Date] = [
    new Date('2024-02-15'),
    new Date('2024-03-15')
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        <div className="space-y-8">
          <MetricsOverview metrics={campaignMetrics} dateRange={dateRange} />
          <MetricsTable metrics={campaignMetrics} dateRange={dateRange} />
        </div>
      </div>
    </div>
  );
};