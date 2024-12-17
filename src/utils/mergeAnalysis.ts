import type { Project } from '../types';

interface MergeCompatibility {
  similarityScore: number;
  reasons: string[];
}

export const analyzeMergeCompatibility = (
  source: Project,
  target: Project
): MergeCompatibility => {
  let score = 0;
  const reasons: string[] = [];

  // Category similarity
  if (source.category === target.category) {
    score += 30;
    reasons.push('Same category');
  }

  // Funding goal similarity (within 50% range)
  const goalRatio = Math.min(source.goal, target.goal) / Math.max(source.goal, target.goal);
  if (goalRatio > 0.5) {
    score += 20;
    reasons.push('Similar funding goals');
  }

  // Timeline compatibility
  const sourceEndDate = new Date(source.endDate).getTime();
  const targetEndDate = new Date(target.endDate).getTime();
  const timeDiff = Math.abs(sourceEndDate - targetEndDate);
  if (timeDiff < 30 * 24 * 60 * 60 * 1000) { // Within 30 days
    score += 20;
    reasons.push('Compatible timelines');
  }

  // Reward tier complementarity
  const hasComplementaryRewards = source.rewards.some(reward =>
    !target.rewards.some(targetReward => 
      Math.abs(reward.amount - targetReward.amount) < 100
    )
  );
  if (hasComplementaryRewards) {
    score += 15;
    reasons.push('Complementary reward tiers');
  }

  // Community overlap
  const communityOverlap = source.communities.filter(c => 
    target.communities.includes(c)
  ).length;
  if (communityOverlap > 0) {
    score += 15;
    reasons.push('Shared community interest');
  }

  return {
    similarityScore: score,
    reasons
  };
};