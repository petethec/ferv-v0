import { render, screen, fireEvent } from '@testing-library/react';
import { CreateCampaignPage } from '../../../pages/CreateCampaignPage';

describe('Project Creation Navigation', () => {
  test('displays correct step indicator', () => {
    render(<CreateCampaignPage />);
    
    expect(screen.getByText('Basics')).toBeInTheDocument();
    expect(screen.getByText('Story')).toBeInTheDocument();
    expect(screen.getByText('Rewards')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Preview')).toBeInTheDocument();
  });

  test('persists data between steps', async () => {
    render(<CreateCampaignPage />);

    // Fill out basics form
    await userEvent.type(screen.getByLabelText(/Campaign Title/i), 'Test Project');
    await userEvent.click(screen.getByText('Next Step'));

    // Navigate back
    await userEvent.click(screen.getByText('Back'));

    // Verify data persists
    expect(screen.getByLabelText(/Campaign Title/i)).toHaveValue('Test Project');
  });

  test('updates progress indicator when navigating', async () => {
    render(<CreateCampaignPage />);

    // Initial state
    expect(screen.getByText('Basics')).toHaveClass('text-orange-600');

    // Move to next step
    await userEvent.click(screen.getByText('Next Step'));

    // Verify progress update
    expect(screen.getByText('Story')).toHaveClass('text-orange-600');
  });
});