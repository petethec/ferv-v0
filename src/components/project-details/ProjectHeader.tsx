import React from 'react';
import { Share2, Flag, ThumbsDown } from 'lucide-react';
import { Project } from '../../types';
import { useProjectStore } from '../../store/useProjectStore';

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const toggleDownvote = useProjectStore((state) => state.toggleDownvote);

  const handleDownvote = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleDownvote(project.id);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button 
            onClick={handleDownvote}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors group"
          >
            <ThumbsDown className="w-5 h-5 text-gray-700 group-hover:text-red-500" />
            <span className="absolute -bottom-8 right-0 bg-white px-2 py-1 rounded text-sm shadow-lg">
              {project.downvotes}
            </span>
          </button>
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Flag className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
            {project.category}
          </span>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${project.creator}`}
              alt={project.creator}
              className="w-6 h-6 rounded-full bg-gray-200"
            />
            <span>by {project.creator}</span>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.description}</p>
        </div>
      </div>
    </div>
  );
};