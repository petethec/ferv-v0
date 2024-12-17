import { AbandonedProject, ReclaimCostBreakdown } from '../types/abandoned';

const BASE_RECLAIM_FEE = 100; // Base platform fee in USD
const MONTHLY_MULTIPLIER = 0.1; // 10% increase per month
const CREATOR_COMPENSATION_RATE = 0.05; // 5% of original funding goal

export const calculateMonthsInactive = (lastActivityDate: Date): number => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - lastActivityDate.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
};

export const calculateReclaimCost = (project: AbandonedProject): ReclaimCostBreakdown => {
  const monthsInactive = calculateMonthsInactive(project.lastActivityDate);
  const timeMultiplier = 1 + (monthsInactive * MONTHLY_MULTIPLIER);
  const baseFee = BASE_RECLAIM_FEE * timeMultiplier;
  const creatorCompensation = project.goal * CREATOR_COMPENSATION_RATE;
  const outstandingObligations = project.outstandingObligations.reduce(
    (total, obligation) => total + obligation.amount,
    0
  );

  return {
    baseFee: Math.round(baseFee),
    timeMultiplier: Number(timeMultiplier.toFixed(2)),
    creatorCompensation: Math.round(creatorCompensation),
    outstandingObligations,
    total: Math.round(baseFee + creatorCompensation + outstandingObligations)
  };
};

export const isProjectReclaimable = (project: AbandonedProject): boolean => {
  const monthsInactive = calculateMonthsInactive(project.lastActivityDate);
  const fundingPercentage = (project.currentAmount / project.goal) * 100;
  
  return (
    monthsInactive >= 6 &&
    fundingPercentage < 50 &&
    project.abandonedStatus === 'reclaimable' &&
    project.outstandingObligations.length === 0
  );
};