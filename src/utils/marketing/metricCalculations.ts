import type { CampaignMetrics, CampaignMetricsData } from '../../types/marketing';

export const calculateMetricChange = (
  before: number,
  after: number
): { value: number; percentage: number } => {
  const change = after - before;
  const percentage = (change / before) * 100;
  return { value: change, percentage };
};

export const analyzePerformance = (
  before: CampaignMetricsData,
  after: CampaignMetricsData
) => {
  return {
    conversionRate: calculateMetricChange(before.conversionRate, after.conversionRate),
    clickThroughRate: calculateMetricChange(before.clickThroughRate, after.clickThroughRate),
    costPerAcquisition: calculateMetricChange(before.costPerAcquisition, after.costPerAcquisition),
    returnOnAdSpend: calculateMetricChange(before.returnOnAdSpend, after.returnOnAdSpend)
  };
};

export const calculateTotalImpact = (campaigns: CampaignMetrics[]) => {
  return campaigns.reduce((acc, campaign) => {
    const { before, after } = campaign.metrics;
    return {
      totalSpend: acc.totalSpend + before.totalSpend,
      totalConversions: acc.totalConversions + (
        (after.conversionRate - before.conversionRate) * before.totalSpend / before.costPerAcquisition
      ),
      averageRoas: acc.averageRoas + (after.returnOnAdSpend - before.returnOnAdSpend)
    };
  }, {
    totalSpend: 0,
    totalConversions: 0,
    averageRoas: 0
  });
};