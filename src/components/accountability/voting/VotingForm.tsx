import React, { useState } from 'react';

interface VotingFormProps {
  onVote: (amount: number) => void;
  className?: string;
}

export const VotingForm: React.FC<VotingFormProps> = ({
  onVote,
  className = ''
}) => {
  const [amount, setAmount] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = Number(amount);
    if (numAmount > 0) {
      onVote(numAmount);
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex space-x-4 ${className}`}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
      >
        Vote & Pledge
      </button>
    </form>
  );
};