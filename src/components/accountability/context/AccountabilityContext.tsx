import React, { createContext, useContext, useState } from 'react';
import type { Consequence, AccountabilityMetrics } from '../../../types/accountability';
import { calculateAccountabilityMetrics } from '../../../utils/accountabilityCalculations';

interface AccountabilityContextType {
  consequences: Consequence[];
  metrics: AccountabilityMetrics;
  addConsequence: (consequence: Consequence) => void;
  updateConsequence: (id: string, updates: Partial<Consequence>) => void;
  removeConsequence: (id: string) => void;
}

const AccountabilityContext = createContext<AccountabilityContextType | null>(null);

export const AccountabilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consequences, setConsequences] = useState<Consequence[]>([]);

  const addConsequence = (consequence: Consequence) => {
    setConsequences(prev => [...prev, consequence]);
  };

  const updateConsequence = (id: string, updates: Partial<Consequence>) => {
    setConsequences(prev =>
      prev.map(c => c.id === id ? { ...c, ...updates } : c)
    );
  };

  const removeConsequence = (id: string) => {
    setConsequences(prev => prev.filter(c => c.id !== id));
  };

  const metrics = calculateAccountabilityMetrics(consequences);

  return (
    <AccountabilityContext.Provider value={{
      consequences,
      metrics,
      addConsequence,
      updateConsequence,
      removeConsequence
    }}>
      {children}
    </AccountabilityContext.Provider>
  );
};

export const useAccountability = () => {
  const context = useContext(AccountabilityContext);
  if (!context) {
    throw new Error('useAccountability must be used within an AccountabilityProvider');
  }
  return context;
};