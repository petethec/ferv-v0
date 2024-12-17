import React from 'react';
import { Calendar, DollarSign, AlertCircle, Clock } from 'lucide-react';
import { AbandonedProject } from '../../types/abandoned';
import { calculateReclaimCost, calculateMonthsInactive } from '../../utils/abandonedCalculations';
import { ReclaimCostBreakdown } from './ReclaimCostBreakdown';

interface AbandonedProjectCardProps {
  project: AbandonedProject;
  onReclaim: () => void;
}

export const AbandonedProjectCard: React.FC<AbandonedProjectCardProps> = ({
  project,
  onReclaim
}) => {
  const monthsInactive = calculateMonthsInactive(project.lastActivityDate);
  const fundingPercentage = (project.currentAmount / project.goal) * 100;
  const costBreakdown = calculateReclaimCost(project);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
            {project.category}
          </span>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{monthsInactive} months inactive</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>Original Goal: ${project.goal.toLocaleString()}</span>
            </div>
            <span className="font-medium text-orange-600">
              {fundingPercentage.toFixed(1)}% Funded
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Last Active: {project.lastActivityDate.toLocaleDateString()}</span>
            </div>
            <span className="font-medium text-gray-600">
              {project.backers} backers
            </span>
          </div>
        </div>

        <ReclaimCostBreakdown breakdown={costBreakdown} />

        {project.outstandingObligations.length > 0 && (
          <div className="mt-4 p-3 bg-red-50 rounded-md">
            <div className="flex items-center text-red-800 mb-2">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span className="font-medium">Outstanding Obligations</span>
            </div>
            <ul className="text-sm text-red-600 space-y-1">
              {project.outstandingObligations.map((obligation, index) => (
                <li key={index}>{obligation.description}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={onReclaim}
          disabled={project.abandonedStatus !== 'reclaimable'}
          className={`w-full mt-6 py-2 px-4 rounded-md text-white font-medium ${
            project.abandonedStatus === 'reclaimable'
              ? 'bg-orange-600 hover:bg-orange-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          {project.abandonedStatus === 'reclaimable' ? 'Reclaim Project' : 'Not Reclaimable'}
        </button>
      </div>
    </div>
  );
};