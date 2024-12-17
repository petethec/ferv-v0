import { useMemo } from 'react';
import type { Project } from '../../../types';
import { analyzeMergeCompatibility } from '../../../utils/mergeAnalysis';

export const useMergeAnalysis = (sourceProject: Project, targetProject: Project) => {
  return useMemo(() => {
    const analysis = analyzeMergeCompatibility(sourceProject, targetProject);
    const sharedBackers = calculateSharedBackers(sourceProject, targetProject);
    const totalBackers = new Set([
      ...sourceProject.backers,
      ...targetProject.backers
    ]).size;

    return {
      ...analysis,
      sharedBackers,
      totalBackers,
      combinedGoal: sourceProject.goal + targetProject.goal,
      combinedAmount: sourceProject.currentAmount + targetProject.currentAmount
    };
  }, [sourceProject, targetProject]);
};

const calculateSharedBackers = (source: Project, target: Project) => {
  // In a real app, this would use actual backer IDs
  // This is a simplified version for demo purposes
  return Math.floor(Math.min(source.backers, target.backers) * 0.2);
};