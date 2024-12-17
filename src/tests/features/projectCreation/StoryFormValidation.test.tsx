import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StoryForm } from '../../../components/create-campaign/forms/StoryForm';

describe('StoryForm Validation', () => {
  const mockData = {
    description: '',
    risks: '',
    timeline: ''
  };

  const mockProps = {
    data: mockData,
    onUpdate: jest.fn(),
    onNext: jest.fn(),
    onBack: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('validates minimum content length requirements', async () => {
    render(<StoryForm {...mockProps} />);

    // Try submitting with short content
    await userEvent.type(screen.getByPlaceholderText(/Tell your story/i), 'Short');
    await userEvent.type(screen.getByPlaceholderText(/Describe potential risks/i), 'Risk');
    await userEvent.type(screen.getByPlaceholderText(/Outline your timeline/i), 'Soon');
    
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(screen.getByText(/Description must be at least 100 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Risks section must be at least 50 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Timeline must be at least 50 characters/i)).toBeInTheDocument();
    });

    expect(mockProps.onNext).not.toHaveBeenCalled();
  });

  test('allows submission with valid content', async () => {
    render(<StoryForm {...mockProps} />);

    const validDescription = 'A'.repeat(100);
    const validRisks = 'B'.repeat(50);
    const validTimeline = 'C'.repeat(50);

    await userEvent.type(screen.getByPlaceholderText(/Tell your story/i), validDescription);
    await userEvent.type(screen.getByPlaceholderText(/Describe potential risks/i), validRisks);
    await userEvent.type(screen.getByPlaceholderText(/Outline your timeline/i), validTimeline);

    fireEvent.submit(screen.getByRole('form'));

    expect(mockProps.onNext).toHaveBeenCalled();
  });

  test('preserves line breaks in text areas', async () => {
    render(<StoryForm {...mockProps} />);

    const multilineText = 'Line 1\nLine 2\nLine 3';
    await userEvent.type(screen.getByPlaceholderText(/Tell your story/i), multilineText);

    expect(mockProps.onUpdate).toHaveBeenCalledWith(expect.objectContaining({
      description: multilineText
    }));
  });
});