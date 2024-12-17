import { useState, useEffect } from 'react';
import { getDaysUntilDeadline } from '../../../utils/accountability/dateUtils';
import type { Consequence } from '../../../types/accountability';

export const useConsequenceDeadline = (consequence: Consequence) => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [isExpired, setIsExpired] = useState(false);
  const [urgencyLevel, setUrgencyLevel] = useState<'low' | 'medium' | 'high'>('low');

  useEffect(() => {
    const days = getDaysUntilDeadline(consequence.deadline);
    setDaysLeft(days);
    setIsExpired(days <= 0);

    if (days <= 3) setUrgencyLevel('high');
    else if (days <= 7) setUrgencyLevel('medium');
    else setUrgencyLevel('low');
  }, [consequence.deadline]);

  return {
    daysLeft,
    isExpired,
    urgencyLevel,
    formattedDeadline: consequence.deadline.toLocaleDateString()
  };
};