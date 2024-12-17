export type HeatLevel = 'cold' | 'warm' | 'hot' | 'blazing';

export interface Contribution {
  id: string;
  projectId: string;
  backerId: string;
  backerName: string;
  amount: number;
  timestamp: number;
}

export interface Backer {
  id: string;
  name: string;
  contributions: number;
  totalContributed: number;
  lastContribution: number;
}

export interface FlameStats {
  heatLevel: HeatLevel;
  recentContributions: Contribution[];
  topBackers: Backer[];
  hourlyContributions: number[];
}