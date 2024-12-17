import { useState, useEffect } from 'react';
import type { Consequence } from '../../../types/accountability';

interface HistoryEntry {
  timestamp: Date;
  type: 'vote' | 'status_change' | 'milestone';
  description: string;
  metadata?: Record<string, any>;
}

export const useConsequenceHistory = (consequence: Consequence) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    const mockHistory: HistoryEntry[] = [
      {
        timestamp: new Date(Date.now() - 86400000 * 2),
        type: 'status_change',
        description: 'Consequence activated',
        metadata: { oldStatus: 'pending', newStatus: 'active' }
      },
      {
        timestamp: new Date(Date.now() - 86400000),
        type: 'vote',
        description: 'Major contribution received',
        metadata: { amount: 5000, contributor: 'Anonymous' }
      }
    ];

    setHistory(mockHistory);
    setIsLoading(false);
  }, [consequence.id]);

  return {
    history,
    isLoading,
    latestEntry: history[0]
  };
};