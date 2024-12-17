import { User } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'John Maker',
  email: 'john@example.com',
  avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=john',
  isCreator: true,
  joinedAt: new Date('2023-01-15'),
  backedProjects: [
    {
      projectId: '1',
      amount: 120,
      date: new Date('2024-02-01'),
      rewardId: 'r2'
    },
    {
      projectId: '2',
      amount: 199,
      date: new Date('2024-02-15'),
      rewardId: 'r3',
      groupId: 'g2'
    }
  ],
  createdProjects: ['3'],
  communities: ['c1', 'c2'],
  referralCount: 12,
  badges: [
    {
      id: 'b1',
      name: 'Early Adopter',
      description: 'One of the first 1000 users on the platform',
      icon: 'rocket',
      earnedAt: new Date('2023-01-20')
    },
    {
      id: 'b2',
      name: 'Community Builder',
      description: 'Successfully referred 10+ users',
      icon: 'users',
      earnedAt: new Date('2023-06-15')
    },
    {
      id: 'b3',
      name: 'Rising Creator',
      description: 'First project reached 100% funding',
      icon: 'trophy',
      earnedAt: new Date('2023-09-01')
    }
  ]
};