export type ConsequenceType = 'donation' | 'campaign' | 'protest' | 'legal' | 'custom';
export type ConsequenceTier = 1 | 2 | 3;
export type ConsequenceStatus = 'pending' | 'active' | 'executed' | 'cancelled';

export interface Consequence {
  id: string;
  projectId: string;
  type: ConsequenceType;
  tier: ConsequenceTier;
  title: string;
  description: string;
  fundingGoal: number;
  currentAmount: number;
  deadline: Date;
  status: ConsequenceStatus;
  votes: number;
  executionDetails: {
    targetEntity?: string;
    location?: string;
    duration?: number;
    customParameters?: Record<string, any>;
  };
}

export interface ConsequenceVote {
  id: string;
  consequenceId: string;
  userId: string;
  amount: number;
  timestamp: Date;
}

export interface AccountabilityMetrics {
  totalPledged: number;
  voterCount: number;
  executionProgress: number;
  deadlineProximity: number;
}