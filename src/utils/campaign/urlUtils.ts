import { Project } from '../../types';

const BASE_URL = 'https://fervor.app/campaign';

export const generateCampaignPreviewUrl = (project: Partial<Project>): string => {
  const previewId = btoa(JSON.stringify({
    id: project.id || 'preview',
    timestamp: Date.now()
  }));
  return `${BASE_URL}/preview/${previewId}`;
};

export const generateCampaignTestUrl = (project: Project): string => {
  const testParams = new URLSearchParams({
    utm_source: 'test',
    utm_medium: 'preview',
    utm_campaign: project.id
  });
  return `${BASE_URL}/test/${project.id}?${testParams.toString()}`;
};

export const validateCampaignUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname === 'fervor.app' && 
           urlObj.pathname.startsWith('/campaign');
  } catch {
    return false;
  }
};