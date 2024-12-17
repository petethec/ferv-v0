import { Project } from '../types';

export const mergedProjects: Project[] = [
  {
    id: 'merged-1',
    title: 'Global Learning Art Experience',
    description: 'A revolutionary platform combining interactive art installations with global education',
    longDescription: `This merged campaign brings together the power of interactive public art with global education technology. By combining these two innovative projects, we're creating immersive learning experiences that transcend traditional boundaries.

The platform will feature:
- Interactive art installations that respond to global learning activities
- Real-time collaboration between artists and students worldwide
- Cultural exchange through artistic expression
- Project-based learning with artistic outcomes`,
    creator: 'ArtCollective + EduConnect Global',
    goal: 245000,
    currentAmount: 148000,
    endDate: new Date('2024-12-31'),
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    category: 'Education & Art',
    downvotes: 1,
    backers: 757,
    rewards: [
      {
        id: 'mr-1',
        title: 'Early Access Bundle',
        description: 'Combined access to both the art installation and learning platform',
        amount: 300,
        estimatedDelivery: new Date('2025-01-01'),
        shippingLocation: 'Worldwide',
        itemsAvailable: 1000,
        itemsClaimed: 473
      }
    ],
    communities: ['global-education', 'digital-arts', 'public-art'],
    allowCoFunding: true,
    liveSessions: [],
    feedbackThreads: [],
    mergeDetails: {
      sourceProjectId: 'art-collective',
      targetProjectId: 'edu-platform',
      mergeDate: new Date('2024-03-12')
    }
  }
];