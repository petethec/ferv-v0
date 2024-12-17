import { render, screen, fireEvent } from '@testing-library/react';
import { useFormData } from '../../../components/create-campaign/hooks/useFormData';
import { CreateCampaignPage } from '../../../pages/CreateCampaignPage';

jest.mock('../../../components/create-campaign/hooks/useFormData');

describe('Project Creation Data Flow', () => {
  const mockUpdateFormData = jest.fn();

  beforeEach(() => {
    (useFormData as jest.Mock).mockReturnValue({
      formData: {
        basics: {
          title: '',
          category: '',
          goal: '',
          duration: 30,
          tagline: '',
          imageUrl: ''
        },
        story: {
          description: '',
          risks: '',
          timeline: ''
        },
        rewards: [],
        settings: {
          allowCoFunding: false,
          flexibleFunding: false,
          communityEndorsements: true
        }
      },
      updateFormData: mockUpdateFormData
    });
  });

  test('passes data correctly between steps', async () => {
    render(<CreateCampaignPage />);

    // Fill out basics form
    await userEvent.type(screen.getByLabelText(/Campaign Title/i), 'Test Project');
    await userEvent.click(screen.getByText('Next Step'));

    expect(mockUpdateFormData).toHaveBeenCalledWith('basics', expect.objectContaining({
      title: 'Test Project'
    }));
  });

  test('validates data before allowing step transition', async () => {
    render(<CreateCampaignPage />);

    // Try to proceed without required fields
    await userEvent.click(screen.getByText('Next Step'));

    // Verify we stay on current step
    expect(screen.getByText('Basics')).toHaveClass('text-orange-600');
  });

  test('preserves form state during navigation', async () => {
    render(<CreateCampaignPage />);

    // Fill out multiple steps
    await userEvent.type(screen.getByLabelText(/Campaign Title/i), 'Test Project');
    await userEvent.click(screen.getByText('Next Step'));

    await userEvent.type(screen.getByLabelText(/Campaign Story/i), 'Test Description');
    await userEvent.click(screen.getByText('Back'));

    // Verify data persists
    expect(mockUpdateFormData).toHaveBeenCalledTimes(2);
    expect(screen.getByLabelText(/Campaign Title/i)).toHaveValue('Test Project');
  });
});