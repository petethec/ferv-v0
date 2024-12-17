import React from 'react';
import { Project } from '../../types';

interface ProjectDescriptionProps {
  project: Project;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About this project</h2>
      <div className="prose max-w-none">
        {project.longDescription?.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-600">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};