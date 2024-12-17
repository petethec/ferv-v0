import { CampaignMetrics } from '../../types/marketing';

export const campaignMetrics: CampaignMetrics[] = [
  {
    id: 'CAM-001',
    name: 'Summer Launch Promo',
    period: {
      start: new Date('2024-02-15'),
      end: new Date('2024-03-15')
    },
    metrics: {
      before: {
        conversionRate: 2.1,
        clickThroughRate: 3.5,
        costPerAcquisition: 45.20,
        totalSpend: 5000,
        returnOnAdSpend: 2.3
      },
      after: {
        conversionRate: 3.8,
        clickThroughRate: 4.7,
        costPerAcquisition: 32.15,
        totalSpend: 5000,
        returnOnAdSpend: 3.1
      }
    },
    annotations: [
      'Significant improvement in conversion rate (+81%)',
      'Reduced cost per acquisition by 29%',
      'Higher engagement due to seasonal timing'
    ]
  },
  {
    id: 'CAM-002',
    name: 'Creator Spotlight Series',
    period: {
      start: new Date('2024-02-15'),
      end: new Date('2024-03-15')
    },
    metrics: {
      before: {
        conversionRate: 1.8,
        clickThroughRate: 2.9,
        costPerAcquisition: 52.30,
        totalSpend: 7500,
        returnOnAdSpend: 1.9
      },
      after: {
        conversionRate: 4.2,
        clickThroughRate: 5.8,
        costPerAcquisition: 28.45,
        totalSpend: 7500,
        returnOnAdSpend: 3.5
      }
    },
    annotations: [
      'Storytelling approach doubled conversion rate',
      'Significant improvement in engagement metrics',
      'Best performing campaign for ROAS'
    ]
  },
  {
    id: 'CAM-003',
    name: 'Early Bird Rewards',
    period: {
      start: new Date('2024-02-15'),
      end: new Date('2024-03-15')
    },
    metrics: {
      before: {
        conversionRate: 2.5,
        clickThroughRate: 3.2,
        costPerAcquisition: 48.75,
        totalSpend: 4000,
        returnOnAdSpend: 2.1
      },
      after: {
        conversionRate: 3.1,
        clickThroughRate: 3.9,
        costPerAcquisition: 42.20,
        totalSpend: 4000,
        returnOnAdSpend: 2.4
      }
    },
    annotations: [
      'Moderate improvement in conversion metrics',
      'Limited by seasonal timing',
      'Strong performance in specific demographics'
    ]
  },
  {
    id: 'CAM-004',
    name: 'Community Challenge',
    period: {
      start: new Date('2024-02-15'),
      end: new Date('2024-03-15')
    },
    metrics: {
      before: {
        conversionRate: 1.9,
        clickThroughRate: 2.8,
        costPerAcquisition: 55.40,
        totalSpend: 6000,
        returnOnAdSpend: 1.8
      },
      after: {
        conversionRate: 3.5,
        clickThroughRate: 4.9,
        costPerAcquisition: 35.25,
        totalSpend: 6000,
        returnOnAdSpend: 2.8
      }
    },
    annotations: [
      'Strong community engagement drove conversions',
      'Viral effect reduced effective CPA',
      'High social sharing metrics'
    ]
  },
  {
    id: 'CAM-005',
    name: 'Innovation Summit',
    period: {
      start: new Date('2024-02-15'),
      end: new Date('2024-03-15')
    },
    metrics: {
      before: {
        conversionRate: 2.2,
        clickThroughRate: 3.1,
        costPerAcquisition: 50.60,
        totalSpend: 8500,
        returnOnAdSpend: 2.0
      },
      after: {
        conversionRate: 3.9,
        clickThroughRate: 4.8,
        costPerAcquisition: 38.75,
        totalSpend: 8500,
        returnOnAdSpend: 2.6
      }
    },
    annotations: [
      'High-value conversions from targeted audience',
      'Strong B2B performance metrics',
      'Extended impact on brand authority'
    ]
  }
];