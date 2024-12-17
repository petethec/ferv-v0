import React from 'react';
import { BarChart3, Users, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { Link } from 'react-router-dom';

interface CreatorPanelProps {
  projects: Project[];
}

export const CreatorPanel: React.FC<CreatorPanelProps> = ({ projects }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-8 h-8 opacity-75" />
            <span className="text-sm opacity-75">Total Raised</span>
          </div>
          <div className="text-3xl font-bold mb-1">
            ${projects.reduce((sum, p) => sum + p.currentAmount, 0).toLocaleString()}
          </div>
          <div className="text-sm opacity-75">
            Across {projects.length} projects
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 opacity-75" />
            <span className="text-sm opacity-75">Total Backers</span>
          </div>
          <div className="text-3xl font-bold mb-1">
            {projects.reduce((sum, p) => sum + p.backers, 0).toLocaleString()}
          </div>
          <div className="text-sm opacity-75">
            Active supporters
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <ArrowUpRight className="w-8 h-8 opacity-75" />
            <span className="text-sm opacity-75">Success Rate</span>
          </div>
          <div className="text-3xl font-bold mb-1">
            {((projects.filter(p => p.currentAmount >= p.goal).length / projects.length) * 100).toFixed(0)}%
          </div>
          <div className="text-sm opacity-75">
            Projects funded
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Your Campaigns</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="flex items-center p-6 hover:bg-gray-50 transition-colors"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="ml-6 flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{project.backers} backers</span>
                  <span>•</span>
                  <span>
                    ${project.currentAmount.toLocaleString()} raised
                  </span>
                  <span>•</span>
                  <span>
                    {Math.ceil(
                      (new Date(project.endDate).getTime() - new Date().getTime()) /
                        (1000 * 3600 * 24)
                    )}{' '}
                    days left
                  </span>
                </div>
                <div className="mt-2">
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
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};