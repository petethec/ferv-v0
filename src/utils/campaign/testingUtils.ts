import type { Project } from '../../types';

interface TestResult {
  device: string;
  browser: string;
  status: 'success' | 'error';
  errors?: string[];
  loadTime?: number;
}

export const testCampaignUrl = async (url: string): Promise<TestResult[]> => {
  // In a real implementation, this would use actual browser testing
  // For now, we'll return mock results
  return [
    {
      device: 'Desktop',
      browser: 'Chrome',
      status: 'success',
      loadTime: 1.2
    },
    {
      device: 'Mobile',
      browser: 'Safari',
      status: 'success',
      loadTime: 1.5
    },
    {
      device: 'Tablet',
      browser: 'Firefox',
      status: 'success',
      loadTime: 1.3
    }
  ];
};

export const validateTrackingParameters = (url: string): boolean => {
  const params = new URLSearchParams(new URL(url).search);
  const requiredParams = ['utm_source', 'utm_medium', 'utm_campaign'];
  return requiredParams.every(param => params.has(param));
};