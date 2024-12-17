import type { CampaignMetrics } from '../../types/marketing';
import { formatCurrency, formatPercentage } from './formatters';

export const exportToCsv = async (metrics: CampaignMetrics[]) => {
  const headers = [
    'Campaign ID',
    'Campaign Name',
    'Start Date',
    'End Date',
    'Conversion Rate',
    'Click-through Rate',
    'Cost per Acquisition',
    'Total Spend',
    'Return on Ad Spend'
  ];

  const rows = metrics.map(campaign => [
    campaign.id,
    campaign.name,
    campaign.period.start.toLocaleDateString(),
    campaign.period.end.toLocaleDateString(),
    formatPercentage(campaign.metrics.after.conversionRate),
    formatPercentage(campaign.metrics.after.clickThroughRate),
    formatCurrency(campaign.metrics.after.costPerAcquisition),
    formatCurrency(campaign.metrics.after.totalSpend),
    `${campaign.metrics.after.returnOnAdSpend.toFixed(2)}x`
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `campaign_metrics_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
};

export const exportToPdf = async (metrics: CampaignMetrics[]) => {
  // In a real implementation, you would use a library like jsPDF
  // For now, we'll just show an alert
  alert('PDF export functionality would be implemented here');
};