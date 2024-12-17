import { Project } from '../types';

export const mockCampaigns: Project[] = [
  {
    id: 'eco-retreat',
    title: 'Sustainable Mountain Retreat Experience',
    description: 'Join an exclusive eco-friendly mountain retreat focused on sustainability and mindfulness.',
    longDescription: `Experience a transformative week at our sustainable mountain retreat. We're creating an innovative space where sustainability meets luxury, offering unique experiences that connect people with nature while maintaining a minimal environmental footprint.

Our retreat will feature solar-powered accommodations, farm-to-table dining, and workshops led by sustainability experts. This campaign will help us develop the infrastructure needed to make this vision a reality.`,
    creator: 'EcoRetreats',
    goal: 75000,
    currentAmount: 45000,
    endDate: new Date('2024-12-31'),
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    category: 'Sustainability',
    downvotes: 2,
    backers: 156,
    communities: ['eco-living', 'mindfulness'],
    allowCoFunding: true,
    rewards: [
      {
        id: 'er-1',
        title: 'Early Bird Weekend Retreat',
        description: 'A 3-day weekend retreat experience for one person, including accommodation and meals.',
        amount: 500,
        estimatedDelivery: new Date('2025-03-01'),
        shippingLocation: 'On Location',
        itemsAvailable: 50,
        itemsClaimed: 28
      },
      {
        id: 'er-2',
        title: 'Group Retreat Package',
        description: 'A full week retreat for four people, including private accommodation, all meals, and exclusive workshops.',
        amount: 3500,
        estimatedDelivery: new Date('2025-06-01'),
        shippingLocation: 'On Location',
        itemsAvailable: 20,
        itemsClaimed: 8
      }
    ],
    updates: [],
    liveSessions: [],
    feedbackThreads: []
  },
  {
    id: 'tech-collab',
    title: 'Collaborative Workspace Innovation Hub',
    description: 'Building a next-generation collaborative workspace with integrated smart technology.',
    longDescription: `We're revolutionizing the way people work together by creating a state-of-the-art collaborative workspace that combines cutting-edge technology with thoughtful design. Our innovation hub will feature smart meeting rooms, AI-powered scheduling, and adaptive environments that respond to users' needs.

This space will serve as a model for future workplaces, demonstrating how technology can enhance collaboration while maintaining human connection.`,
    creator: 'TechSpace Innovations',
    goal: 150000,
    currentAmount: 85000,
    endDate: new Date('2024-09-30'),
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    category: 'Technology',
    downvotes: 1,
    backers: 234,
    communities: ['tech-startups', 'future-work'],
    allowCoFunding: true,
    rewards: [
      {
        id: 'tc-1',
        title: 'Founding Member Access',
        description: 'Lifetime founding member status with priority access and 20 hours monthly booking credit.',
        amount: 2500,
        estimatedDelivery: new Date('2025-01-01'),
        shippingLocation: 'On Location',
        itemsAvailable: 100,
        itemsClaimed: 45
      },
      {
        id: 'tc-2',
        title: 'Corporate Partnership Package',
        description: 'Annual corporate membership for up to 10 team members with dedicated space and support services.',
        amount: 15000,
        estimatedDelivery: new Date('2025-01-01'),
        shippingLocation: 'On Location',
        itemsAvailable: 25,
        itemsClaimed: 12
      }
    ],
    updates: [],
    liveSessions: [],
    feedbackThreads: []
  },
  {
    id: 'art-collective',
    title: 'Community Art Installation Project',
    description: 'Creating an interactive public art installation powered by community participation.',
    longDescription: `Join us in creating a groundbreaking public art installation that combines traditional sculpture with interactive digital elements. This installation will respond to community input and change throughout the day, creating a unique experience that reflects the collective creativity of our city.

The project will involve local artists, engineers, and community members, making art accessible to everyone while pushing the boundaries of what public art can be.`,
    creator: 'ArtCollective',
    goal: 45000,
    currentAmount: 28000,
    endDate: new Date('2024-11-15'),
    imageUrl: 'https://images.unsplash.com/photo-1561839561-b13931139069',
    category: 'Art & Design',
    downvotes: 0,
    backers: 312,
    communities: ['public-art', 'digital-arts'],
    allowCoFunding: true,
    rewards: [
      {
        id: 'ac-1',
        title: 'Community Contributor Package',
        description: 'Your name on the installation, exclusive opening event access, and limited edition print.',
        amount: 250,
        estimatedDelivery: new Date('2025-02-01'),
        shippingLocation: 'Worldwide',
        itemsAvailable: 200,
        itemsClaimed: 145
      },
      {
        id: 'ac-2',
        title: 'Patron Circle Membership',
        description: 'Permanent recognition, private events, and input on future installations. Includes all previous rewards.',
        amount: 5000,
        estimatedDelivery: new Date('2025-02-01'),
        shippingLocation: 'Worldwide',
        itemsAvailable: 20,
        itemsClaimed: 8
      }
    ],
    updates: [],
    liveSessions: [],
    feedbackThreads: []
  },
  {
    id: 'edu-platform',
    title: 'Global Learning Exchange Platform',
    description: 'Building a platform that connects students worldwide for collaborative learning experiences.',
    longDescription: `We're developing a revolutionary education platform that breaks down geographical barriers and enables students from different cultures to learn together. Our platform will facilitate real-time collaboration, cultural exchange, and project-based learning across borders.

The platform will include translation features, cultural context sharing, and structured learning paths that encourage global perspective development.`,
    creator: 'EduConnect Global',
    goal: 200000,
    currentAmount: 120000,
    endDate: new Date('2024-10-31'),
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    category: 'Education',
    downvotes: 1,
    backers: 445,
    communities: ['global-education', 'tech-for-good'],
    allowCoFunding: true,
    rewards: [
      {
        id: 'ep-1',
        title: 'Educational Institution License',
        description: 'Annual license for up to 500 students with full platform access and administrative tools.',
        amount: 10000,
        estimatedDelivery: new Date('2025-01-01'),
        shippingLocation: 'Digital Delivery',
        itemsAvailable: 50,
        itemsClaimed: 28
      },
      {
        id: 'ep-2',
        title: 'Global Learning Hub Package',
        description: 'Establish a dedicated learning hub for your community with customized features and support.',
        amount: 25000,
        estimatedDelivery: new Date('2025-01-01'),
        shippingLocation: 'Digital Delivery',
        itemsAvailable: 10,
        itemsClaimed: 4
      }
    ],
    updates: [],
    liveSessions: [],
    feedbackThreads: []
  }
];