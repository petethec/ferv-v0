import React from 'react';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { StatsOverview } from '../../components/admin/StatsOverview';
import { ReportsTable } from '../../components/admin/ReportsTable';
import { PendingProjectsTable } from '../../components/admin/PendingProjectsTable';
import { AuditLogTable } from '../../components/admin/AuditLogTable';
import { mockDashboardData } from '../../data/mockAdminData';

export const AdminDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor platform activity and manage reports
          </p>
        </div>

        <div className="space-y-8">
          <StatsOverview stats={mockDashboardData.stats} />

          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Recent Reports</h2>
            </div>
            <ReportsTable reports={mockDashboardData.pendingReports} />
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Pending Projects</h2>
            </div>
            <PendingProjectsTable projects={mockDashboardData.pendingCampaigns} />
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Audit Log</h2>
            </div>
            <AuditLogTable logs={mockDashboardData.recentActions} />
          </div>
        </div>
      </main>
    </div>
  );
};