import React from 'react';
import { Update } from '../../types';

interface ProjectUpdatesProps {
  updates: Update[];
}

export const ProjectUpdates: React.FC<ProjectUpdatesProps> = ({ updates }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Updates</h2>
      <div className="space-y-8">
        {updates.map((update) => (
          <div key={update.id} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">{update.title}</h3>
              <div className="text-sm text-gray-500">
                {new Date(update.date).toLocaleDateString()}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{update.content}</p>
            <div className="text-sm text-gray-500">Posted by {update.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};