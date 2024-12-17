import { SplitPledge } from '../types/splitPledge';

export const mockSplitPledges: SplitPledge[] = [
  {
    id: 'sp-1',
    rewardId: 'er-2', // Group Retreat Package
    initiatorId: 'user-1',
    maxContributors: 4,
    totalAmount: 3500,
    deadline: new Date('2024-05-01'),
    status: 'active',
    contributors: [
      {
        userId: 'user-1',
        amount: 1000,
        status: 'paid',
        joinedAt: new Date('2024-03-15')
      },
      {
        userId: 'user-2',
        amount: 800,
        status: 'paid',
        joinedAt: new Date('2024-03-16')
      }
    ],
    inviteCode: 'SP1ABC',
    createdAt: new Date('2024-03-15')
  },
  {
    id: 'sp-2',
    rewardId: 'tc-2', // Corporate Partnership Package
    initiatorId: 'user-3',
    maxContributors: 5,
    totalAmount: 15000,
    deadline: new Date('2024-05-15'),
    status: 'pending',
    contributors: [
      {
        userId: 'user-3',
        amount: 4000,
        status: 'paid',
        joinedAt: new Date('2024-03-17')
      }
    ],
    inviteCode: 'SP2DEF',
    createdAt: new Date('2024-03-17')
  },
  {
    id: 'sp-3',
    rewardId: 'ac-2', // Patron Circle Membership
    initiatorId: 'user-4',
    maxContributors: 3,
    totalAmount: 5000,
    deadline: new Date('2024-04-30'),
    status: 'active',
    contributors: [
      {
        userId: 'user-4',
        amount: 2000,
        status: 'paid',
        joinedAt: new Date('2024-03-10')
      },
      {
        userId: 'user-5',
        amount: 1500,
        status: 'pending',
        joinedAt: new Date('2024-03-12')
      }
    ],
    inviteCode: 'SP3GHI',
    createdAt: new Date('2024-03-10')
  },
  {
    id: 'sp-4',
    rewardId: 'ep-2', // Global Learning Hub Package
    initiatorId: 'user-6',
    maxContributors: 5,
    totalAmount: 25000,
    deadline: new Date('2024-05-30'),
    status: 'active',
    contributors: [
      {
        userId: 'user-6',
        amount: 7000,
        status: 'paid',
        joinedAt: new Date('2024-03-14')
      },
      {
        userId: 'user-7',
        amount: 6000,
        status: 'paid',
        joinedAt: new Date('2024-03-15')
      },
      {
        userId: 'user-8',
        amount: 5000,
        status: 'pending',
        joinedAt: new Date('2024-03-16')
      }
    ],
    inviteCode: 'SP4JKL',
    createdAt: new Date('2024-03-14')
  }
];

export const getActiveSplitPledgesForReward = (rewardId: string): SplitPledge[] => {
  return mockSplitPledges.filter(
    pledge => pledge.rewardId === rewardId && 
    (pledge.status === 'active' || pledge.status === 'pending')
  );
};

export const getSplitPledgeProgress = (pledgeId: string) => {
  const pledge = mockSplitPledges.find(p => p.id === pledgeId);
  if (!pledge) return null;

  const totalPledged = pledge.contributors.reduce(
    (sum, contributor) => sum + (contributor.status === 'paid' ? contributor.amount : 0),
    0
  );

  return {
    totalAmount: pledge.totalAmount,
    amountPledged: totalPledged,
    remainingAmount: pledge.totalAmount - totalPledged,
    contributorCount: pledge.contributors.length,
    remainingSpots: pledge.maxContributors - pledge.contributors.length,
    percentComplete: (totalPledged / pledge.totalAmount) * 100
  };
};