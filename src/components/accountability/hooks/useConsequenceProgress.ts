import { useState, useEffect } from 'react';
import { calculateProgress } from '../../../utils/accountability/progressUtils';
import type { Consequence } from '../../../types/accountability';

export const useConsequenceProgress = (consequence: Consequence) => {
  const [progress, setProgress] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const currentProgress = calculateProgress(
      consequence.currentAmount,
      consequence.fundingGoal
    );
    const remaining = consequence.fundingGoal - consequence.currentAmount;

    setProgress(currentProgress);
    setRemainingAmount(remaining);
    setIsComplete(currentProgress >= 100);
  }, [consequence]);

  return {
    progress,
    remainingAmount,
    isComplete,
    formattedProgress: `${progress.toFixed(1)}%`
  };
};