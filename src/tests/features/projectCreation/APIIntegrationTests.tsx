import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CreateCampaignPage } from '../../../pages/CreateCampaignPage';
import { importProjectFromUrl } from '../../../utils/projectImport';

jest.mock('../../../utils/projectImport');

describe('Project Creation API Integration', () => {
  beforeEach(() => {
    (importProjectFromUrl as jest.Mock).mockClear();
  });

  test('imports project data from URL', async () => {
    const mockProjectData = {
      title: 'Imported Project',
      description: 'Imported description',
      goal: 10000
    };

    (importProjectFromUrl as jest.Mock).mockResolvedValue(mockProjectData);

    render(<CreateCampaignPage />);

    await userEvent.type(
      screen.getByPlaceholderText(/Enter project URL/i),
      'https://example.com/project'
    );
    await userEvent.click(screen.getByText('Import Project'));

    await waitFor(() => {
      expect(screen.getByLabelText(/Campaign Title/i)).toHaveValue('Imported Project');
    });
  });

  test('handles import errors gracefully', async () => {
    (importProjectFromUrl as jest.Mock).mockRejectedValue(new Error('Import failed'));

    render(<CreateCampaignPage />);

    await userEvent.type(
      screen.getByPlaceholderText(/Enter project URL/i),
      'https://example.com/invalid'
    );
    await userEvent.click(screen.getByText('Import Project'));

    await waitFor(() => {
      expect(screen.getByText(/Failed to import project/i)).toBeInTheDocument();
    });
  });

  test('submits form data to API', async () => {
    const mockSubmit = jest.fn();
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 'new-project' })
      })
    );

    render(<CreateCampaignPage onSubmit={mockSubmit} />);

    // Fill out all required fields
    // Navigate through all steps
    await userEvent.click(screen.getByText('Launch Campaign'));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          method: 'POST',
          headers: expect.any(Object),
          body: expect.any(String)
        })
      );
    });
  });
});