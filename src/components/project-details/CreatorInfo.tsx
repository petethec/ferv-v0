import React from 'react';
import { BadgeCheck, Star, History } from 'lucide-react';
import { Project } from '../../types';

interface CreatorInfoProps {
  project: Project;
}

export const CreatorInfo: React.FC<CreatorInfoProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-start space-x-4">
        <img
          src={`https://api.dicebear.com/7.x/personas/svg?seed=${project.creator}`}
          alt={project.creator}
          className="w-16 h-16 rounded-full bg-gray-100"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-bold text-gray-900">{project.creator}</h3>
            <BadgeCheck className="w-5 h-5 text-orange-600" />
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
              Pro Creator
            </span>
          </div>
          
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>4.9/5.0 (24 projects)</span>
            </div>
            <div className="flex items-center">
              <History className="w-4 h-4 text-gray-400 mr-1" />
              <span>Member since 2021</span>
            </div>
          </div>

          <p className="mt-3 text-gray-600">
            Passionate about creating sustainable solutions that make a difference.
            Previously launched successful campaigns in eco-friendly products and renewable energy.
          </p>

          <button className="mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm">
            View full profile
          </button>
        </div>
      </div>
    </div>
  );
};