import { useState, useEffect } from 'react';
import { validateExecutionReadiness } from '../../../utils/accountability/executionUtils';
import type { Consequence } from '../../../types/accountability';

export const useConsequenceExecution = (consequence: Consequence) => {
  const [isReady, setIsReady] = useState(false);
  const [executionDate, setExecutionDate] = useState<Date | null>(null);
  const [requirements, setRequirements] = useState<string[]>([]);

  useEffect(() => {
    const ready = validateExecutionReadiness(consequence);
    setIsReady(ready);

    if (ready) {
      const date = new Date(consequence.deadline);
      date.setDate(date.getDate() + 1); // Start execution day after deadline
      setExecutionDate(date);
    }
  }, [consequence]);

  return {
    isReady,
    executionDate,
    requirements
  };
};