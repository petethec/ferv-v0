import { render, screen, fireEvent } from '@testing-library/react';
import { AbandonedProjectCard } from '../../../components/abandoned/AbandonedProjectCard';
import { abandonedProjects } from '../../../data/abandonedProjects';

describe('AbandonedProjectCard', () => {
  const mockOnReclaim = jest.fn();
  const project = abandonedProjects[0];

  beforeEach(() => {
    mockOnReclaim.mockClear();
  });

  test('renders project details correctly', () => {
    render(<AbandonedProjectCard project={project} onReclaim={mockOnReclaim} />);

    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByText(project.category)).toBeInTheDocument();
    expect(screen.getByText(`${project.backers} backers`)).toBeInTheDocument();
  });

  test('displays correct reclaim button state for reclaimable projects', () => {
    render(<AbandonedProjectCard project={project} onReclaim={mockOnReclaim} />);
    
    const button = screen.getByText('Reclaim Project');
    expect(button).not.toBeDisabled();
    
    fireEvent.click(button);
    expect(mockOnReclaim).toHaveBeenCalledTimes(1);
  });

  test('displays disabled button for non-reclaimable projects', () => {
    const nonReclaimableProject = {
      ...project,
      abandonedStatus: 'inactive' as const
    };

    render(<AbandonedProjectCard project={nonReclaimableProject} onReclaim={mockOnReclaim} />);
    
    const button = screen.getByText('Not Reclaimable');
    expect(button).toBeDisabled();
  });

  test('shows outstanding obligations warning when present', () => {
    const projectWithObligations = {
      ...project,
      outstandingObligations: [
        { type: 'refund', amount: 1000, description: 'Pending refund to backers' }
      ]
    };

    render(<AbandonedProjectCard project={projectWithObligations} onReclaim={mockOnReclaim} />);
    
    expect(screen.getByText('Outstanding Obligations')).toBeInTheDocument();
    expect(screen.getByText('Pending refund to backers')).toBeInTheDocument();
  });
});