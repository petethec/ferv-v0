export interface CampaignPeriod {
  start: Date;
  end: Date;
}

export interface CampaignMetricsData {
  conversionRate: number;
  clickThroughRate: number;
  costPerAcquisition: number;
  totalSpend: number;
  returnOnAdSpend: number;
}

export interface CampaignMetrics {
  id: string;
  name: string;
  period: CampaignPeriod;
  metrics: {
    before: CampaignMetricsData;
    after: CampaignMetricsData;
  };
  annotations: string[];
}