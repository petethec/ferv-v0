import {
  calculateMonthsInactive,
  calculateReclaimCost,
  isProjectReclaimable
} from '../../utils/abandonedCalculations';

describe('abandonedCalculations', () => {
  describe('calculateMonthsInactive', () => {
    test('calculates correct months for recent date', () => {
      const lastActive = new Date();
      lastActive.setMonth(lastActive.getMonth() - 2);
      expect(calculateMonthsInactive(lastActive)).toBe(2);
    });

    test('calculates correct months for old date', () => {
      const lastActive = new Date();
      lastActive.setFullYear(lastActive.getFullYear() - 1);
      expect(calculateMonthsInactive(lastActive)).toBe(12);
    });
  });

  describe('calculateReclaimCost', () => {
    const mockProject = {
      lastActivityDate: new Date('2023-01-01'),
      goal: 50000,
      outstandingObligations: []
    };

    test('calculates base fee with time multiplier', () => {
      const result = calculateReclaimCost(mockProject as any);
      expect(result.baseFee).toBeGreaterThan(100);
      expect(result.timeMultiplier).toBeGreaterThan(1);
    });

    test('includes creator compensation', () => {
      const result = calculateReclaimCost(mockProject as any);
      expect(result.creatorCompensation).toBe(2500); // 5% of 50000
    });

    test('includes outstanding obligations', () => {
      const projectWithObligations = {
        ...mockProject,
        outstandingObligations: [
          { amount: 1000 },
          { amount: 500 }
        ]
      };
      const result = calculateReclaimCost(projectWithObligations as any);
      expect(result.outstandingObligations).toBe(1500);
    });
  });

  describe('isProjectReclaimable', () => {
    const mockProject = {
      lastActivityDate: new Date('2023-01-01'),
      currentAmount: 20000,
      goal: 50000,
      abandonedStatus: 'reclaimable' as const,
      outstandingObligations: []
    };

    test('returns true for valid reclaimable project', () => {
      expect(isProjectReclaimable(mockProject as any)).toBe(true);
    });

    test('returns false if too recently active', () => {
      const recentProject = {
        ...mockProject,
        lastActivityDate: new Date()
      };
      expect(isProjectReclaimable(recentProject as any)).toBe(false);
    });

    test('returns false if funding too high', () => {
      const highFundingProject = {
        ...mockProject,
        currentAmount: 40000
      };
      expect(isProjectReclaimable(highFundingProject as any)).toBe(false);
    });

    test('returns false if has outstanding obligations', () => {
      const projectWithObligations = {
        ...mockProject,
        outstandingObligations: [{ amount: 1000 }]
      };
      expect(isProjectReclaimable(projectWithObligations as any)).toBe(false);
    });
  });
});