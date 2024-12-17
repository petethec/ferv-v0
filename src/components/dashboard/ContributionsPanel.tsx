import React from 'react';
import { ArrowRight, Calendar, Target } from 'lucide-react';
import { Project } from '../../types';
import { Link } from 'react-router-dom';

interface ContributionsPanelProps {
  backedProjects: Project[];
}

export const ContributionsPanel: React.FC<ContributionsPanelProps> = ({
  backedProjects,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {backedProjects.map((project) => (
        <Link
          key={project.id}
          to={`/project/${project.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-orange-600">
                {project.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>
                  {Math.ceil(
                    (new Date(project.endDate).getTime() - new Date().getTime()) /
                      (1000 * 3600 * 24)
                  )}{' '}
                  days left
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {project.title}
            </h3>

            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{
                    width: `${Math.min(
                      (project.currentAmount / project.goal) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-600">
                  ${project.currentAmount.toLocaleString()} raised
                </span>
                <span className="text-gray-600">
                  {((project.currentAmount / project.goal) * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-500">
                <Target className="w-4 h-4 mr-1" />
                <span>Goal: ${project.goal.toLocaleString()}</span>
              </div>
              <div className="flex items-center text-orange-600 font-medium">
                View Project <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};