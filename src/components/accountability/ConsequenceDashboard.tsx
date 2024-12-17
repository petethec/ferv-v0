import React from 'react';
import { AlertTriangle, ArrowRight, Shield, Users } from 'lucide-react';
import type { Consequence, AccountabilityMetrics } from '../../types/accountability';
import { ConsequenceTierCard } from './ConsequenceTierCard';
import { ExecutionProgress } from './ExecutionProgress';

interface ConsequenceDashboardProps {
  consequences: Consequence[];
  metrics: AccountabilityMetrics;
  onVote: (consequenceId: string, amount: number) => void;
}

export const ConsequenceDashboard: React.FC<ConsequenceDashboardProps> = ({
  consequences,
  metrics,
  onVote
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Accountability Measures</h2>
          <p className="mt-1 text-sm text-gray-600">
            Vote on consequences if project goals aren't met
          </p>
        </div>
        <div className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
          {Math.ceil(metrics.deadlineProximity)}% time remaining
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Shield className="w-4 h-4 mr-1" />
            Total Pledged
          </div>
          <div className="text-2xl font-bold text-gray-900">
            ${metrics.totalPledged.toLocaleString()}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Users className="w-4 h-4 mr-1" />
            Total Voters
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.voterCount.toLocaleString()}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <AlertTriangle className="w-4 h-4 mr-1" />
            Execution Progress
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.executionProgress}%
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {consequences.map((consequence) => (
          <ConsequenceTierCard
            key={consequence.id}
            consequence={consequence}
            onVote={onVote}
          />
        ))}
      </div>

      <ExecutionProgress
        consequences={consequences}
        className="mt-8"
      />
    </div>
  );
};