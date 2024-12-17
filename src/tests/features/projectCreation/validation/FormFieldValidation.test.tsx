import { render, screen } from '@testing-library/react';
import { FormField } from '../../../../components/create-campaign/forms/components/FormField';

describe('Form Field Component', () => {
  test('displays required indicator when field is required', () => {
    render(
      <FormField label="Test Field" required>
        <input type="text" />
      </FormField>
    );

    expect(screen.getByText('*')).toHaveClass('text-red-500');
  });

  test('displays tooltip when provided', () => {
    render(
      <FormField label="Test Field" tooltip="Help text">
        <input type="text" />
      </FormField>
    );

    expect(screen.getByRole('tooltip')).toHaveTextContent('Help text');
  });

  test('displays error message when provided', () => {
    render(
      <FormField label="Test Field" error="Invalid input">
        <input type="text" />
      </FormField>
    );

    expect(screen.getByText('Invalid input')).toHaveClass('text-red-600');
  });
});