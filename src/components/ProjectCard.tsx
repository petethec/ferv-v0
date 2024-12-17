import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Target, ThumbsDown } from 'lucide-react';
import { Project } from '../types';
import { useProjectStore } from '../store/useProjectStore';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const toggleDownvote = useProjectStore((state) => state.toggleDownvote);
  const progress = (project.currentAmount / project.goal) * 100;
  const daysLeft = Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  const handleDownvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDownvote(project.id);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-orange-600">{project.category}</span>
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleDownvote}
              className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
            >
              <ThumbsDown className="w-4 h-4" />
              <span className="text-sm">{project.downvotes}</span>
            </button>
            <span className="text-sm text-gray-500">by {project.creator}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${project.currentAmount.toLocaleString()} raised</span>
            <span>{progress.toFixed(1)}%</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center">
            <Target className="w-4 h-4 mr-1" />
            <span>Goal: ${project.goal.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{daysLeft} days left</span>
          </div>
        </div>
      </div>
    </div>
  );
};