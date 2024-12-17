import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StoryForm } from '../../../components/create-campaign/forms/StoryForm';

describe('StoryForm', () => {
  const mockData = {
    description: '',
    risks: '',
    timeline: ''
  };
  const mockOnUpdate = jest.fn();
  const mockOnNext = jest.fn();
  const mockOnBack = jest.fn();

  beforeEach(() => {
    mockOnUpdate.mockClear();
    mockOnNext.mockClear();
    mockOnBack.mockClear();
  });

  test('renders all form fields with correct labels', () => {
    render(
      <StoryForm
        data={mockData}
        onUpdate={mockOnUpdate}
        onNext={mockOnNext}
        onBack={mockOnBack}
      />
    );

    expect(screen.getByLabelText(/Campaign Story/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Risks and Challenges/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Timeline/i)).toBeInTheDocument();
  });

  test('validates required fields before submission', async () => {
    render(
      <StoryForm
        data={mockData}
        onUpdate={mockOnUpdate}
        onNext={mockOnNext}
        onBack={mockOnBack}
      />
    );

    fireEvent.click(screen.getByText('Next Step'));

    await waitFor(() => {
      expect(screen.getByText(/Campaign story is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Risks and challenges are required/i)).toBeInTheDocument();
      expect(screen.getByText(/Project timeline is required/i)).toBeInTheDocument();
    });

    expect(mockOnNext).not.toHaveBeenCalled();
  });

  test('updates form data when fields change', async () => {
    render(
      <StoryForm
        data={mockData}
        onUpdate={mockOnUpdate}
        onNext={mockOnNext}
        onBack={mockOnBack}
      />
    );

    const description = 'Test project description';
    await userEvent.type(screen.getByLabelText(/Campaign Story/i), description);

    expect(mockOnUpdate).toHaveBeenCalledWith(expect.objectContaining({
      description
    }));
  });

  test('enforces minimum character limits', async () => {
    render(
      <StoryForm
        data={mockData}
        onUpdate={mockOnUpdate}
        onNext={mockOnNext}
        onBack={mockOnBack}
      />
    );

    await userEvent.type(screen.getByLabelText(/Campaign Story/i), 'Short');
    fireEvent.click(screen.getByText('Next Step'));

    await waitFor(() => {
      expect(screen.getByText(/Campaign story must be at least 100 characters/i)).toBeInTheDocument();
    });
  });

  test('allows navigation back to previous step', () => {
    render(
      <StoryForm
        data={mockData}
        onUpdate={mockOnUpdate}
        onNext={mockOnNext}
        onBack={mockOnBack}
      />
    );

    fireEvent.click(screen.getByText('Back'));
    expect(mockOnBack).toHaveBeenCalled();
  });
});