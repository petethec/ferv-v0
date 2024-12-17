import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Eco-Friendly Water Bottle',
    description: 'Revolutionary self-cleaning water bottle made from sustainable materials.',
    longDescription: `Our innovative water bottle combines cutting-edge technology with sustainable materials to create the world's first self-cleaning water bottle that's completely eco-friendly. Using UV-C light technology and biodegradable materials, this bottle eliminates 99.99% of harmful bacteria while leaving zero impact on our planet.

The bottle features a unique double-wall vacuum insulation that keeps your drinks cold for 24 hours or hot for 12 hours. The self-cleaning activation happens every 4 hours, ensuring your water stays pure and fresh throughout the day.

What makes our bottle truly special is its construction from ocean-bound plastics and biodegradable materials. We've partnered with coastal communities to collect and recycle plastic waste, transforming it into something beautiful and functional.`,
    creator: 'EcoInnovators',
    goal: 50000,
    currentAmount: 32500,
    endDate: new Date('2024-05-01'),
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    category: 'Sustainability',
    downvotes: 2,
    backers: 425,
    rewards: [
      {
        id: 'r1',
        title: 'Early Bird Special',
        description: 'Get one Eco-Friendly Water Bottle at 30% off retail price. Includes exclusive backer updates.',
        amount: 35,
        estimatedDelivery: new Date('2024-06-01'),
        shippingLocation: 'Worldwide',
        itemsAvailable: 500,
        itemsClaimed: 350
      },
      {
        id: 'r2',
        title: 'Family Pack',
        description: 'Four Eco-Friendly Water Bottles at a special price. Perfect for the whole family.',
        amount: 120,
        estimatedDelivery: new Date('2024-06-01'),
        shippingLocation: 'Worldwide',
        itemsAvailable: 200,
        itemsClaimed: 75
      }
    ],
    updates: [
      {
        id: 'u1',
        title: 'Production Update: Molds are Ready!',
        content: 'We're excited to announce that our production molds are complete and have passed quality testing.',
        date: new Date('2024-02-15'),
        author: 'Sarah from EcoInnovators'
      }
    ]
  },
  {
    id: '2',
    title: 'Smart Urban Garden',
    description: 'AI-powered indoor garden system for growing fresh vegetables.',
    longDescription: `Transform any space into a thriving garden with our AI-powered indoor growing system. Using advanced machine learning algorithms, our system optimizes growing conditions for each plant, ensuring maximum yield and perfect taste every time.

The system includes LED grow lights, automatic watering, and climate control, all managed through our intuitive mobile app. Whether you're growing herbs, vegetables, or flowers, our Smart Urban Garden adapts to provide ideal conditions for each plant type.

Our AI technology learns from each growing cycle, continuously improving and sharing insights across our community of urban farmers. You'll never have to worry about over or under-watering, light cycles, or nutrient levels again.`,
    creator: 'GreenTech',
    goal: 75000,
    currentAmount: 45000,
    endDate: new Date('2024-06-15'),
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    category: 'Technology',
    downvotes: 5,
    backers: 612,
    rewards: [
      {
        id: 'r3',
        title: 'Starter Kit',
        description: 'One Smart Urban Garden system with 3 months of plant nutrients included.',
        amount: 199,
        estimatedDelivery: new Date('2024-07-01'),
        shippingLocation: 'US & EU',
        itemsAvailable: 1000,
        itemsClaimed: 450
      }
    ],
    updates: [
      {
        id: 'u2',
        title: 'App Development Milestone',
        content: 'We've completed the core features of our mobile app and are now entering beta testing.',
        date: new Date('2024-03-01'),
        author: 'Mike from GreenTech'
      }
    ]
  },
  {
    id: '3',
    title: 'Artistic Board Game',
    description: 'A beautifully illustrated strategy game inspired by classical art.',
    longDescription: `Immerse yourself in a world where classical art meets strategic gameplay. Each card and board piece features stunning reproductions of famous artworks, carefully selected to enhance the gaming experience.

Our game combines deck-building mechanics with area control, creating a unique experience that's easy to learn but difficult to master. Players take on the roles of famous art collectors, competing to acquire masterpieces and curate the most prestigious gallery.

The game includes over 100 uniquely illustrated cards, a premium game board, and collector's edition tokens. Each artwork featured in the game includes historical context and interesting facts, making it both entertaining and educational.`,
    creator: 'GameArtistry',
    goal: 25000,
    currentAmount: 18750,
    endDate: new Date('2024-04-30'),
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09',
    category: 'Games',
    downvotes: 1,
    backers: 375,
    rewards: [
      {
        id: 'r4',
        title: 'Standard Edition',
        description: 'The complete game with all standard components.',
        amount: 49,
        estimatedDelivery: new Date('2024-05-15'),
        shippingLocation: 'Worldwide',
        itemsAvailable: 2000,
        itemsClaimed: 850
      },
      {
        id: 'r5',
        title: 'Collector's Edition',
        description: 'Deluxe version with premium components and art book.',
        amount: 89,
        estimatedDelivery: new Date('2024-05-15'),
        shippingLocation: 'Worldwide',
        itemsAvailable: 500,
        itemsClaimed: 275
      }
    ],
    updates: [
      {
        id: 'u3',
        title: 'Art Book Preview',
        content: 'Check out these preview pages from the companion art book!',
        date: new Date('2024-02-28'),
        author: 'Lisa from GameArtistry'
      }
    ]
  }
];