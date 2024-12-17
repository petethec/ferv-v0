import type { HeatLevel } from '../types/flames';

const HOUR_IN_MS = 3600000;
const DAY_IN_MS = 86400000;

export const calculateHeatLevel = (
  contributions: number[],
  timestamps: number[]
): HeatLevel => {
  const now = Date.now();
  let recentTotal = 0;
  let weight = 0;

  for (let i = 0; i < contributions.length; i++) {
    const age = now - timestamps[i];
    
    // Ignore contributions older than 24 hours
    if (age > DAY_IN_MS) continue;

    // More recent contributions have higher weight
    const hourlyWeight = Math.max(0, 1 - (age / HOUR_IN_MS) * 0.1);
    recentTotal += contributions[i] * hourlyWeight;
    weight += hourlyWeight;
  }

  const heatScore = weight ? recentTotal / weight : 0;

  if (heatScore >= 1000) return 'blazing';
  if (heatScore >= 500) return 'hot';
  if (heatScore >= 100) return 'warm';
  return 'cold';
};

export const calculateTrendPercentage = (
  currentPeriodTotal: number,
  previousPeriodTotal: number
): number => {
  if (previousPeriodTotal === 0) return currentPeriodTotal > 0 ? 100 : 0;
  return ((currentPeriodTotal - previousPeriodTotal) / previousPeriodTotal) * 100;
};