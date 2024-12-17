import { Consequence } from '../types/accountability';

export const mockConsequences: Consequence[] = [
  {
    id: 'c1',
    projectId: 'p1',
    type: 'donation',
    tier: 1,
    title: 'Donate to Environmental NGO',
    description: 'If sustainability goals are not met, funds will be donated to Greenpeace',
    fundingGoal: 10000,
    currentAmount: 7500,
    deadline: new Date('2024-06-01'),
    status: 'active',
    votes: 125,
    executionDetails: {
      targetEntity: 'Greenpeace',
      customParameters: {
        donationPurpose: 'Environmental Protection'
      }
    }
  },
  {
    id: 'c2',
    projectId: 'p1',
    type: 'campaign',
    tier: 2,
    title: 'Public Awareness Campaign',
    description: 'Launch a targeted social media campaign highlighting missed commitments',
    fundingGoal: 25000,
    currentAmount: 15000,
    deadline: new Date('2024-07-01'),
    status: 'pending',
    votes: 89,
    executionDetails: {
      duration: 30,
      customParameters: {
        platforms: ['Facebook', 'Twitter', 'Instagram']
      }
    }
  },
  {
    id: 'c3',
    projectId: 'p1',
    type: 'legal',
    tier: 3,
    title: 'Legal Action Fund',
    description: 'Fund legal proceedings to enforce environmental commitments',
    fundingGoal: 50000,
    currentAmount: 20000,
    deadline: new Date('2024-08-01'),
    status: 'pending',
    votes: 45,
    executionDetails: {
      customParameters: {
        legalStrategy: 'Class Action',
        jurisdiction: 'Federal'
      }
    }
  }
];