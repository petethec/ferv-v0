import type { Consequence, ConsequenceVote } from '../../types/accountability';

export const generateMockVotes = (count: number): ConsequenceVote[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `vote-${i}`,
    consequenceId: 'test-consequence',
    userId: `user-${Math.floor(Math.random() * 100)}`,
    amount: Math.floor(Math.random() * 1000) + 10,
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
  }));
};

export const createMockConsequence = (overrides = {}): Consequence => ({
  id: 'test-consequence',
  projectId: 'test-project',
  type: 'donation',
  tier: 1,
  title: 'Test Consequence',
  description: 'Test description',
  fundingGoal: 10000,
  currentAmount: 0,
  deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  status: 'pending',
  votes: 0,
  executionDetails: {},
  ...overrides
});