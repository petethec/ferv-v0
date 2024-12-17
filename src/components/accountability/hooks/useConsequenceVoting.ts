import { useState } from 'react';
import { validateVoteAmount } from '../../../utils/accountability/validationUtils';
import type { Consequence } from '../../../types/accountability';

export const useConsequenceVoting = (consequence: Consequence) => {
  const [isVoting, setIsVoting] = useState(false);
  const [voteAmount, setVoteAmount] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleVote = async (amount: number) => {
    const validationError = validateVoteAmount(amount, consequence);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsVoting(true);
    try {
      // API call would go here
      setVoteAmount('');
      setError(null);
    } catch (err) {
      setError('Failed to submit vote. Please try again.');
    } finally {
      setIsVoting(false);
    }
  };

  return {
    isVoting,
    voteAmount,
    error,
    setVoteAmount,
    handleVote
  };
};