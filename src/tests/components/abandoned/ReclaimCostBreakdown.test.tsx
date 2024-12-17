import { render, screen } from '@testing-library/react';
import { ReclaimCostBreakdown } from '../../../components/abandoned/ReclaimCostBreakdown';

describe('ReclaimCostBreakdown', () => {
  const mockBreakdown = {
    baseFee: 100,
    timeMultiplier: 1.2,
    creatorCompensation: 2500,
    outstandingObligations: 0,
    total: 2600
  };

  test('renders all cost breakdown items', () => {
    render(<ReclaimCostBreakdown breakdown={mockBreakdown} />);

    expect(screen.getByText('Base Platform Fee')).toBeInTheDocument();
    expect(screen.getByText(`$${mockBreakdown.baseFee}`)).toBeInTheDocument();
    expect(screen.getByText('Time Multiplier')).toBeInTheDocument();
    expect(screen.getByText(`${mockBreakdown.timeMultiplier}x`)).toBeInTheDocument();
    expect(screen.getByText('Creator Compensation')).toBeInTheDocument();
    expect(screen.getByText(`$${mockBreakdown.creatorCompensation}`)).toBeInTheDocument();
  });

  test('shows outstanding obligations only when present', () => {
    const breakdownWithObligations = {
      ...mockBreakdown,
      outstandingObligations: 500,
      total: 3100
    };

    const { rerender } = render(<ReclaimCostBreakdown breakdown={mockBreakdown} />);
    expect(screen.queryByText('Outstanding Obligations')).not.toBeInTheDocument();

    rerender(<ReclaimCostBreakdown breakdown={breakdownWithObligations} />);
    expect(screen.getByText('Outstanding Obligations')).toBeInTheDocument();
    expect(screen.getByText('$500')).toBeInTheDocument();
  });

  test('displays total cost correctly', () => {
    render(<ReclaimCostBreakdown breakdown={mockBreakdown} />);
    
    expect(screen.getByText('Total Cost')).toBeInTheDocument();
    expect(screen.getByText(`$${mockBreakdown.total}`)).toBeInTheDocument();
  });
});