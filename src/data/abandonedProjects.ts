import { AbandonedProject } from '../types/abandoned';

export const abandonedProjects: AbandonedProject[] = [
  {
    id: 'abandoned-1',
    title: 'Legacy CRM System',
    description: 'A modern CRM system designed for small businesses that was abandoned due to technical challenges.',
    creator: 'TechStartup',
    goal: 50000,
    currentAmount: 22500,
    endDate: new Date('2023-03-01'),
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Technology',
    downvotes: 2,
    backers: 150,
    rewards: [],
    updates: [],
    communities: [],
    allowCoFunding: true,
    liveSessions: [],
    feedbackThreads: [],
    lastActivityDate: new Date('2023-03-01'),
    abandonedStatus: 'reclaimable',
    reclaimCost: 2500,
    originalCreator: {
      id: 'creator-1',
      name: 'John Tech',
      compensation: 2500
    },
    outstandingObligations: []
  },
  {
    id: 'abandoned-2',
    title: 'Mobile App v1',
    description: 'An innovative mobile app for tracking personal wellness goals that lost momentum.',
    creator: 'HealthTech',
    goal: 75000,
    currentAmount: 22500,
    endDate: new Date('2023-05-15'),
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    category: 'Technology',
    downvotes: 1,
    backers: 200,
    rewards: [],
    updates: [],
    communities: [],
    allowCoFunding: true,
    liveSessions: [],
    feedbackThreads: [],
    lastActivityDate: new Date('2023-05-15'),
    abandonedStatus: 'reclaimable',
    reclaimCost: 3000,
    originalCreator: {
      id: 'creator-2',
      name: 'Sarah Health',
      compensation: 3000
    },
    outstandingObligations: []
  }
];