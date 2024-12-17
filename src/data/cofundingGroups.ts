import { CoFundingGroup } from '../types';

export const coFundingGroups: CoFundingGroup[] = [
  {
    id: 'g1',
    projectId: '1',
    name: 'Eco Warriors Collective',
    leader: 'GreenPioneer',
    targetAmount: 5000,
    currentAmount: 3250,
    members: [
      {
        id: 'm1',
        name: 'GreenPioneer',
        amount: 1000,
        joinedAt: new Date('2024-02-01')
      },
      {
        id: 'm2',
        name: 'EcoEnthusiast',
        amount: 750,
        joinedAt: new Date('2024-02-03')
      },
      {
        id: 'm3',
        name: 'SustainableSam',
        amount: 1500,
        joinedAt: new Date('2024-02-05')
      }
    ],
    rewardId: 'r2'
  },
  {
    id: 'g2',
    projectId: '2',
    name: 'Urban Farmers United',
    leader: 'GardenGuru',
    targetAmount: 3000,
    currentAmount: 1800,
    members: [
      {
        id: 'm4',
        name: 'GardenGuru',
        amount: 800,
        joinedAt: new Date('2024-02-10')
      },
      {
        id: 'm5',
        name: 'PlantLover',
        amount: 1000,
        joinedAt: new Date('2024-02-12')
      }
    ],
    rewardId: 'r3'
  }
];