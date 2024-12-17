import React from 'react';
import { Project } from '../../types';
import { Calendar, DollarSign } from 'lucide-react';

interface PendingProjectsTableProps {
  projects: Project[];
}

export const PendingProjectsTable: React.FC<PendingProjectsTableProps> = ({ projects }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Creator
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Goal
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              End Date
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {project.title}
                    </div>
                    <div className="text-sm text-gray-500 line-clamp-1">
                      {project.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">{project.creator}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  {project.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-900">
                  <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                  {project.goal.toLocaleString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(project.endDate).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-green-600 hover:text-green-900 mr-4">
                  Approve
                </button>
                <button className="text-red-600 hover:text-red-900">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};