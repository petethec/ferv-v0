import { Consequence, ConsequenceVote } from '../../types/accountability';

export const calculateTotalVotes = (consequence: Consequence): number => {
  return consequence.votes;
};

export const calculateUniqueVoters = (votes: ConsequenceVote[]): number => {
  return new Set(votes.map(v => v.userId)).size;
};

export const getVotesByUser = (votes: ConsequenceVote[], userId: string): ConsequenceVote[] => {
  return votes.filter(v => v.userId === userId);
};