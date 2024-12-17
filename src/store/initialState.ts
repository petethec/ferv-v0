import { mockSplitPledges } from '../data/splitPledges';
import { mockCampaigns } from '../data/mockCampaigns';

export const initialState = {
  campaigns: mockCampaigns,
  splitPledges: mockSplitPledges,
  currentUser: {
    id: 'user-1',
    name: 'John Doe'
  }
};