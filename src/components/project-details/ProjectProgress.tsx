import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import { Project } from '../../types';
import { PledgeModal } from './PledgeModal';
import { formatCurrency, calculateDaysLeft } from '../../utils/formatting';

interface ProjectProgressProps {
  project: Project;
}

export const ProjectProgress: React.FC<ProjectProgressProps> = ({ project }) => {
  const [showPledgeModal, setShowPledgeModal] = useState(false);
  const progress = (project.currentAmount / project.goal) * 100;
  const daysLeft = calculateDaysLeft(new Date(project.endDate));

  const handlePledgeSubmit = (amount: number, message: string) => {
    // TODO: Implement pledge submission
    console.log('Pledge submitted:', { amount, message });
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
        <div className="mb-6">
          <div className="w-full bg-gray-100 rounded-full h-4">
            <div
              className="bg-orange-600 h-4 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="space-y-1 overflow-hidden">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 truncate">
              {formatCurrency(project.currentAmount)}
            </div>
            <div className="text-sm text-gray-500 truncate">
              of {formatCurrency(project.goal)}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900">
              {project.backers.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">backers</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900">
              {Math.max(daysLeft, 0)}
            </div>
            <div className="text-sm text-gray-500">
              {daysLeft <= 0 ? 'Campaign ended' : 'days left'}
            </div>
          </div>
        </div>

        <button 
          onClick={() => setShowPledgeModal(true)}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-lg ${
            daysLeft <= 0 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-orange-600 text-white hover:bg-orange-700 transition-colors'
          }`}
          disabled={daysLeft <= 0}
        >
          {daysLeft <= 0 ? 'Campaign Ended' : 'Back this project'}
        </button>

        <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2" />
          <span>
            {daysLeft <= 0 
              ? `Campaign ended ${new Date(project.endDate).toLocaleDateString()}`
              : `Campaign ends ${new Date(project.endDate).toLocaleDateString()}`
            }
          </span>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center space-x-2">
            <Users className="w-5 h-5 text-gray-400" />
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                  alt="Backer"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              Join {project.backers.toLocaleString()} backers
            </span>
          </div>
        </div>
      </div>

      {showPledgeModal && (
        <PledgeModal
          projectId={project.id}
          onClose={() => setShowPledgeModal(false)}
          onSubmit={handlePledgeSubmit}
        />
      )}
    </>
  );
};