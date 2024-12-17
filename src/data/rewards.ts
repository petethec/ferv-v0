import { Reward } from '../types';

export const rewards: Reward[] = [
  // ... existing rewards remain unchanged
  {
    id: 'r10',
    projectId: '6',
    title: 'Early Bird Special',
    description: 'One Kaleidoscope Candle with exclusive AR pattern and early access to the app.',
    amount: 45,
    estimatedDelivery: new Date('2024-09-01'),
    shippingLocation: 'Worldwide',
    itemsAvailable: 500,
    itemsClaimed: 312
  },
  {
    id: 'r11',
    projectId: '6',
    title: 'Collector\'s Set',
    description: 'Set of three Kaleidoscope Candles with unique AR patterns and pattern creator access.',
    amount: 120,
    estimatedDelivery: new Date('2024-09-01'),
    shippingLocation: 'Worldwide',
    itemsAvailable: 200,
    itemsClaimed: 89
  },
  {
    id: 'r12',
    projectId: '7',
    title: 'Story Contributor',
    description: 'Submit your story for consideration in the mural and receive a digital print of the final artwork.',
    amount: 50,
    estimatedDelivery: new Date('2024-08-15'),
    shippingLocation: 'Digital + Worldwide',
    itemsAvailable: 1000,
    itemsClaimed: 342
  },
  {
    id: 'r13',
    projectId: '7',
    title: 'Mural Patron',
    description: 'Your story guaranteed in the mural, VIP invitation to the unveiling ceremony, and signed art print.',
    amount: 250,
    estimatedDelivery: new Date('2024-08-15'),
    shippingLocation: 'Worldwide',
    itemsAvailable: 50,
    itemsClaimed: 28
  },
  {
    id: 'r14',
    projectId: '8',
    title: 'Care Supporter',
    description: 'Fund one day of veterinary care and receive updates from the communities we serve.',
    amount: 100,
    estimatedDelivery: new Date('2024-09-15'),
    shippingLocation: 'Digital Delivery',
    itemsAvailable: null,
    itemsClaimed: 458
  },
  {
    id: 'r15',
    projectId: '8',
    title: 'Community Champion',
    description: 'Fund one week of care and join us for a day on the mobile clinic (travel not included).',
    amount: 500,
    estimatedDelivery: new Date('2024-09-15'),
    shippingLocation: 'On Location',
    itemsAvailable: 50,
    itemsClaimed: 32
  }
];