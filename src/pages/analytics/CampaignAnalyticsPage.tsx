import React from 'react';
import { CampaignDashboard } from '../../components/analytics/dashboard/CampaignDashboard';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';

export const CampaignAnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        <CampaignDashboard />
      </div>
    </div>
  );
};