import { render, screen, fireEvent } from '@testing-library/react';
import { CreateCampaignPage } from '../../../../pages/CreateCampaignPage';
import { mockFormData } from '../__mocks__/formDataMocks';

jest.mock('../../../../components/create-campaign/hooks/useFormData', () => ({
  useFormData: () => ({
    formData: mockFormData,
    updateFormData: jest.fn()
  })
}));

describe('Step Navigation', () => {
  test('moves forward when clicking continue', () => {
    render(<CreateCampaignPage />);
    
    fireEvent.click(screen.getByText(/Continue/i));
    expect(screen.getByText(/Campaign Story/i)).toBeInTheDocument();
  });

  test('moves backward when clicking back', () => {
    render(<CreateCampaignPage />);
    
    // Move to step 2
    fireEvent.click(screen.getByText(/Continue/i));
    // Move back to step 1
    fireEvent.click(screen.getByText(/Back/i));
    
    expect(screen.getByText(/Campaign Title/i)).toBeInTheDocument();
  });

  test('updates progress indicator', () => {
    render(<CreateCampaignPage />);
    
    const steps = screen.getAllByRole('button', { name: /step/i });
    expect(steps[0]).toHaveClass('text-orange-600');
    
    fireEvent.click(screen.getByText(/Continue/i));
    expect(steps[1]).toHaveClass('text-orange-600');
  });
});