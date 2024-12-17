export interface SplitPledge {
  id: string;
  rewardId: string;
  initiatorId: string;
  maxContributors: number;
  totalAmount: number;
  deadline: Date;
  status: 'pending' | 'active' | 'completed' | 'expired';
  contributors: SplitContributor[];
  inviteCode: string;
  createdAt: Date;
}

export interface SplitContributor {
  userId: string;
  amount: number;
  status: 'pending' | 'paid';
  joinedAt: Date;
}

export interface SplitPledgeInvite {
  id: string;
  splitPledgeId: string;
  email?: string;
  code: string;
  status: 'pending' | 'accepted' | 'expired';
  createdAt: Date;
  expiresAt: Date;
}