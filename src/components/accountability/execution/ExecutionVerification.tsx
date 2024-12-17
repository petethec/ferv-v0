import React from 'react';
import { Check, Clock, AlertTriangle, Shield } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { useConsequenceExecution } from '../hooks/useConsequenceExecution';
import { ExecutionTimeline } from './ExecutionTimeline';
import { RequirementsList } from './RequirementsList';

interface ExecutionVerificationProps {
  consequence: Consequence;
}

export const ExecutionVerification: React.FC<ExecutionVerificationProps> = ({ consequence }) => {
  const { isReady, executionDate, requirements } = useConsequenceExecution(consequence);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Execution Status</h2>
          <p className="text-gray-600 mt-1">Verification and timeline tracking</p>
        </div>
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
          isReady
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {isReady ? 'Ready for Execution' : 'Pending Requirements'}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Requirements</h3>
          <RequirementsList requirements={requirements} consequence={consequence} />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Timeline</h3>
          <ExecutionTimeline consequence={consequence} executionDate={executionDate} />
        </div>
      </div>
    </div>
  );
};