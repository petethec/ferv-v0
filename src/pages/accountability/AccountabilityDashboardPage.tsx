import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/navigation/Breadcrumbs';
import { VotingDashboard } from '../../components/accountability/voting/VotingDashboard';
import { FundAllocationBreakdown } from '../../components/accountability/allocation/FundAllocationBreakdown';
import { ExecutionVerification } from '../../components/accountability/execution/ExecutionVerification';
import { mockConsequences } from '../../data/mockConsequences';

export const AccountabilityDashboardPage: React.FC = () => {
  const { id } = useParams();
  const consequence = mockConsequences.find(c => c.projectId === id);

  if (!consequence) {
    return <div>No consequence found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        <div className="space-y-8">
          <VotingDashboard consequence={consequence} />
          <FundAllocationBreakdown consequence={consequence} />
          <ExecutionVerification consequence={consequence} />
        </div>
      </div>
    </div>
  );
};