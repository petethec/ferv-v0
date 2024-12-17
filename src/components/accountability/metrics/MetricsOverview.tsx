import React from 'react';
import { Shield, Users, AlertTriangle } from 'lucide-react';
import { MetricCard } from './MetricCard';
import type { AccountabilityMetrics } from '../../../types/accountability';
import { formatCurrency } from '../../../utils/formatting';

interface MetricsOverviewProps {
  metrics: AccountabilityMetrics;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      <MetricCard
        icon={Shield}
        label="Total Pledged"
        value={metrics.totalPledged}
        format={(v) => formatCurrency(v)}
      />
      <MetricCard
        icon={Users}
        label="Total Voters"
        value={metrics.voterCount}
        format={(v) => v.toLocaleString()}
      />
      <MetricCard
        icon={AlertTriangle}
        label="Execution Progress"
        value={metrics.executionProgress}
        format={(v) => `${v}%`}
      />
    </div>
  );
};