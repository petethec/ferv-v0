import React from 'react';
import { Project } from '../../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RecommendedStripProps {
  projects: Project[];
}

export const RecommendedStrip: React.FC<RecommendedStripProps> = ({ projects }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-orange-600 font-medium">
                  ${project.currentAmount.toLocaleString()} raised
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};