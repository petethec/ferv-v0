export interface MergeRequest {
  id: string;
  sourceProjectId: string;
  targetProjectId: string;
  status: 'pending' | 'accepted' | 'rejected';
  message: string;
  createdAt: Date;
  updatedAt: Date;
  combinedGoal: number;
  keepRewards: boolean;
}

export interface MergeAnalysis {
  similarityScore: number;
  reasons: string[];
  sharedBackers: number;
  totalBackers: number;
  combinedGoal: number;
  combinedAmount: number;
}