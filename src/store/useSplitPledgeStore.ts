import { create } from 'zustand';
import type { SplitPledge, SplitContributor } from '../types/splitPledge';

interface SplitPledgeState {
  activePledges: SplitPledge[];
  createPledge: (data: Omit<SplitPledge, 'id' | 'status' | 'createdAt'>) => void;
  addContributor: (pledgeId: string, contributor: SplitContributor) => void;
  updateContributorStatus: (pledgeId: string, userId: string, status: 'pending' | 'paid') => void;
  removePledge: (pledgeId: string) => void;
}

export const useSplitPledgeStore = create<SplitPledgeState>((set) => ({
  activePledges: [],
  
  createPledge: (data) =>
    set((state) => ({
      activePledges: [
        ...state.activePledges,
        {
          ...data,
          id: Math.random().toString(36).slice(2),
          status: 'pending',
          createdAt: new Date()
        }
      ]
    })),
    
  addContributor: (pledgeId, contributor) =>
    set((state) => ({
      activePledges: state.activePledges.map((pledge) =>
        pledge.id === pledgeId
          ? {
              ...pledge,
              contributors: [...pledge.contributors, contributor]
            }
          : pledge
      )
    })),
    
  updateContributorStatus: (pledgeId, userId, status) =>
    set((state) => ({
      activePledges: state.activePledges.map((pledge) =>
        pledge.id === pledgeId
          ? {
              ...pledge,
              contributors: pledge.contributors.map((contributor) =>
                contributor.userId === userId
                  ? { ...contributor, status }
                  : contributor
              )
            }
          : pledge
      )
    })),
    
  removePledge: (pledgeId) =>
    set((state) => ({
      activePledges: state.activePledges.filter((pledge) => pledge.id !== pledgeId)
    }))
}));