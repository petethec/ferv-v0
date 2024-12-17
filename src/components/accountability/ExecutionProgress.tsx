import React from 'react';
import { Check, Clock } from 'lucide-react';
import type { Consequence } from '../../types/accountability';

interface ExecutionProgressProps {
  consequences: Consequence[];
  className?: string;
}

export const ExecutionProgress: React.FC<ExecutionProgressProps> = ({
  consequences,
  className = ''
}) => {
  const sortedConsequences = [...consequences].sort((a, b) => a.tier - b.tier);
  const activeConsequence = sortedConsequences.find(c => c.status === 'active');

  return (
    <div className={`border-t border-gray-200 pt-6 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Execution Timeline</h3>
      
      <div className="relative">
        <div className="absolute top-4 left-4 h-full w-px bg-gray-200" />
        
        {sortedConsequences.map((consequence, index) => (
          <div key={consequence.id} className="relative pl-10 pb-8 last:pb-0">
            <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${
              consequence.status === 'executed'
                ? 'bg-green-100'
                : consequence.status === 'active'
                ? 'bg-orange-100'
                : 'bg-gray-100'
            }`}>
              {consequence.status === 'executed' ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Clock className="w-4 h-4 text-gray-400" />
              )}
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-gray-900">Tier {consequence.tier}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  consequence.status === 'executed'
                    ? 'bg-green-100 text-green-800'
                    : consequence.status === 'active'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {consequence.status.charAt(0).toUpperCase() + consequence.status.slice(1)}
                </span>
              </div>
              
              <p className="mt-1 text-sm text-gray-600">{consequence.description}</p>
              
              {consequence.status === 'active' && (
                <div className="mt-2 text-sm text-orange-600">
                  Execution will begin in {Math.ceil(
                    (new Date(consequence.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
                  )} days
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};