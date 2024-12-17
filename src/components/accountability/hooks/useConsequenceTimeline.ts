import { useState, useEffect } from 'react';
import { estimateExecutionTimeline } from '../../../utils/accountability/executionUtils';
import type { Consequence } from '../../../types/accountability';

export const useConsequenceTimeline = (consequence: Consequence) => {
  const [timelineEvents, setTimelineEvents] = useState<Array<{
    date: Date;
    title: string;
    description: string;
    status: 'pending' | 'active' | 'completed';
  }>>([]);

  useEffect(() => {
    const executionDays = estimateExecutionTimeline(consequence);
    const startDate = new Date(consequence.deadline);
    const events = [];

    // Add voting period
    events.push({
      date: new Date(),
      title: 'Voting Period',
      description: 'Community members can vote and pledge funds',
      status: 'active'
    });

    // Add execution start
    events.push({
      date: startDate,
      title: 'Execution Start',
      description: `Begin ${consequence.type} consequence actions`,
      status: 'pending'
    });

    // Add completion
    const completionDate = new Date(startDate);
    completionDate.setDate(completionDate.getDate() + executionDays);
    events.push({
      date: completionDate,
      title: 'Completion',
      description: 'All consequence actions completed',
      status: 'pending'
    });

    setTimelineEvents(events);
  }, [consequence]);

  return { timelineEvents };
};