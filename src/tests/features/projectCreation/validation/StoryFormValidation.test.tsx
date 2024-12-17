import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StoryForm } from '../../../../components/create-campaign/forms/StoryForm';
import { mockStoryFormProps } from '../__mocks__/storyFormMocks';

describe('Story Form Field Validation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('validates minimum content length for description', async () => {
    render(<StoryForm {...mockStoryFormProps} />);
    
    await userEvent.type(screen.getByPlaceholderText(/Tell your story/i), 'Too short');
    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText(/Description must be at least 100 characters/i)).toBeInTheDocument();
    expect(mockStoryFormProps.onNext).not.toHaveBeenCalled();
  });

  test('validates minimum content length for risks', async () => {
    render(<StoryForm {...mockStoryFormProps} />);
    
    await userEvent.type(screen.getByPlaceholderText(/Describe potential risks/i), 'Short');
    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText(/Risks section must be at least 50 characters/i)).toBeInTheDocument();
  });

  test('validates minimum content length for timeline', async () => {
    render(<StoryForm {...mockStoryFormProps} />);
    
    await userEvent.type(screen.getByPlaceholderText(/Outline your timeline/i), 'Short');
    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText(/Timeline must be at least 50 characters/i)).toBeInTheDocument();
  });
});