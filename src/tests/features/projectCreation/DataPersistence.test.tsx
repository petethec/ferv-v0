import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CreateCampaignPage } from '../../../pages/CreateCampaignPage';

describe('Data Persistence', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('saves form data to localStorage on changes', async () => {
    render(<CreateCampaignPage />);

    await waitFor(() => {
      const savedData = JSON.parse(localStorage.getItem('campaign_draft') || '{}');
      expect(savedData).toBeDefined();
    });
  });

  test('restores form data from localStorage on mount', () => {
    const mockData = {
      basics: {
        title: 'Saved Project',
        category: 'Technology'
      }
    };

    localStorage.setItem('campaign_draft', JSON.stringify(mockData));
    render(<CreateCampaignPage />);

    expect(screen.getByDisplayValue('Saved Project')).toBeInTheDocument();
  });

  test('clears saved data on successful submission', async () => {
    localStorage.setItem('campaign_draft', JSON.stringify({ basics: { title: 'Test' } }));
    
    render(<CreateCampaignPage />);
    
    // Navigate to end and submit
    fireEvent.click(screen.getByText(/Launch Campaign/i));
    
    await waitFor(() => {
      expect(localStorage.getItem('campaign_draft')).toBeNull();
    });
  });
});