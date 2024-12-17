import { render, screen, fireEvent } from '@testing-library/react';
import { AbandonedProjectsPage } from '../../pages/AbandonedProjectsPage';
import { abandonedProjects } from '../../data/abandonedProjects';

jest.mock('../../data/abandonedProjects', () => ({
  abandonedProjects: [
    {
      id: 'test-1',
      title: 'Test Project 1',
      category: 'Technology',
      lastActivityDate: new Date('2023-01-01'),
      abandonedStatus: 'reclaimable'
    },
    {
      id: 'test-2',
      title: 'Test Project 2',
      category: 'Design',
      lastActivityDate: new Date('2023-06-01'),
      abandonedStatus: 'inactive'
    }
  ]
}));

describe('AbandonedProjectsPage', () => {
  test('renders search and filter controls', () => {
    render(<AbandonedProjectsPage />);

    expect(screen.getByPlaceholderText('Search abandoned projects...')).toBeInTheDocument();
    expect(screen.getByText('All Categories')).toBeInTheDocument();
    expect(screen.getByText('6+ Months Inactive')).toBeInTheDocument();
  });

  test('filters projects by search query', () => {
    render(<AbandonedProjectsPage />);
    
    const searchInput = screen.getByPlaceholderText('Search abandoned projects...');
    fireEvent.change(searchInput, { target: { value: 'Test Project 1' } });

    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Project 2')).not.toBeInTheDocument();
  });

  test('filters projects by category', () => {
    render(<AbandonedProjectsPage />);
    
    const categorySelect = screen.getByRole('combobox', { name: /category/i });
    fireEvent.change(categorySelect, { target: { value: 'Technology' } });

    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Project 2')).not.toBeInTheDocument();
  });

  test('filters projects by inactivity period', () => {
    render(<AbandonedProjectsPage />);
    
    const periodSelect = screen.getByRole('combobox', { name: /inactive/i });
    fireEvent.change(periodSelect, { target: { value: '12' } });

    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Project 2')).not.toBeInTheDocument();
  });

  test('shows correct number of reclaimable projects', () => {
    render(<AbandonedProjectsPage />);
    
    expect(screen.getByText('1 reclaimable projects found')).toBeInTheDocument();
  });
});