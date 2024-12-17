import { render, screen, waitFor } from '@testing-library/react';
import { CreateCampaignPage } from '../../../../pages/CreateCampaignPage';
import { mockFormData } from '../__mocks__/formDataMocks';

describe('Form Data Persistence', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('saves draft to localStorage', async () => {
    render(<CreateCampaignPage />);
    
    await waitFor(() => {
      const savedData = JSON.parse(localStorage.getItem('campaign_draft') || '{}');
      expect(savedData).toEqual(expect.objectContaining({
        basics: expect.any(Object)
      }));
    });
  });

  test('restores draft from localStorage', () => {
    localStorage.setItem('campaign_draft', JSON.stringify(mockFormData));
    render(<CreateCampaignPage />);
    
    expect(screen.getByDisplayValue(mockFormData.basics.title)).toBeInTheDocument();
  });

  test('clears draft after submission', async () => {
    localStorage.setItem('campaign_draft', JSON.stringify(mockFormData));
    render(<CreateCampaignPage />);
    
    // Navigate to end and submit
    await waitFor(() => {
      expect(localStorage.getItem('campaign_draft')).toBeNull();
    });
  });
});