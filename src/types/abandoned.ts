import { Project } from './index';

export interface AbandonedProject extends Project {
  lastActivityDate: Date;
  abandonedStatus: 'inactive' | 'abandoned' | 'reclaimable';
  reclaimCost: number;
  originalCreator: {
    id: string;
    name: string;
    compensation: number;
  };
  outstandingObligations: {
    type: string;
    amount: number;
    description: string;
  }[];
}

export interface ReclaimCostBreakdown {
  baseFee: number;
  timeMultiplier: number;
  creatorCompensation: number;
  outstandingObligations: number;
  total: number;
}