import { render, screen, fireEvent } from '@testing-library/react';
import { CreateCampaignPage } from '../../../pages/CreateCampaignPage';
import { useFormData } from '../../../components/create-campaign/hooks/useFormData';

jest.mock('../../../components/create-campaign/hooks/useFormData');

describe('Form Navigation', () => {
  const mockFormData = {
    basics: {
      title: 'Test Project',
      category: 'Technology',
      goal: '10000',
      duration: 30,
      tagline: 'Test tagline',
      imageUrl: 'https://example.com/image.jpg'
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
  };

  beforeEach(() => {
    (useFormData as jest.Mock).mockReturnValue({
      formData: mockFormData,
      updateFormData: jest.fn()
    });
  });

  test('navigates between steps while preserving data', async () => {
    render(<CreateCampaignPage />);

    // Verify initial step
    expect(screen.getByText(/Campaign Title/i)).toBeInTheDocument();

    // Navigate forward
    fireEvent.click(screen.getByText(/Continue/i));
    expect(screen.getByText(/Campaign Story/i)).toBeInTheDocument();

    // Navigate back
    fireEvent.click(screen.getByText(/Back/i));
    expect(screen.getByDisplayValue('Test Project')).toBeInTheDocument();
  });

  test('updates progress indicator correctly', () => {
    render(<CreateCampaignPage />);

    const steps = screen.getAllByRole('button', { name: /step/i });
    expect(steps[0]).toHaveClass('text-orange-600'); // Active step

    fireEvent.click(screen.getByText(/Continue/i));
    expect(steps[1]).toHaveClass('text-orange-600');
  });
});