import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import type { Consequence } from '../../../types/accountability';
import { getExecutionRequirements } from '../../../utils/accountability/executionUtils';

interface RequirementsListProps {
  requirements: string[];
  consequence: Consequence;
}

export const RequirementsList: React.FC<RequirementsListProps> = ({
  requirements,
  consequence
}) => {
  const executionRequirements = getExecutionRequirements(consequence);

  return (
    <div className="space-y-4">
      {executionRequirements.map((requirement, index) => {
        const isComplete = requirements.includes(requirement);
        
        return (
          <div
            key={index}
            className={`flex items-start space-x-3 p-4 rounded-lg ${
              isComplete ? 'bg-green-50' : 'bg-gray-50'
            }`}
          >
            <div className={`p-1 rounded-full ${
              isComplete ? 'bg-green-100' : 'bg-gray-200'
            }`}>
              {isComplete ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-gray-400" />
              )}
            </div>
            <div>
              <p className={`font-medium ${
                isComplete ? 'text-green-900' : 'text-gray-900'
              }`}>
                {requirement}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {isComplete ? 'Requirement met' : 'Pending verification'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};