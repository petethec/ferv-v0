import { Project } from '../types';
import { mockCampaigns } from './mockCampaigns';
import { rewards } from './rewards';
import { updates } from './updates';
import { liveSessions } from './liveSessions';
import { feedbackThreads } from './feedbackThreads';

// Combine existing projects with mock campaigns
export const projects: Project[] = [
  ...mockCampaigns,
  // Keep existing projects
  {
    id: '1',
    title: 'Eco-Friendly Water Bottle',
    description: 'Revolutionary self-cleaning water bottle made from sustainable materials.',
    longDescription: `Our innovative water bottle combines cutting-edge technology with sustainable materials...`,
    creator: 'EcoInnovators',
    goal: 50000,
    currentAmount: 32500,
    endDate: new Date('2024-05-01'),
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    category: 'Sustainability',
    downvotes: 2,
    backers: 425,
    communities: ['c1'],
    allowCoFunding: true,
    rewards: rewards.filter(r => r.projectId === '1'),
    updates: updates.filter(u => u.projectId === '1'),
    liveSessions: liveSessions.filter(s => s.projectId === '1'),
    feedbackThreads: feedbackThreads.filter(t => t.projectId === '1')
  },
  // ... other existing projects
];