import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { Community } from '../../types';
import { Link } from 'react-router-dom';

interface CommunitiesPanelProps {
  communities: Community[];
}

export const CommunitiesPanel: React.FC<CommunitiesPanelProps> = ({
  communities,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.map((community) => (
        <Link
          key={community.id}
          to={`/communities/${community.id}`}
          className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={community.imageUrl}
              alt={community.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {community.name}
            </h3>
            <p className="text-gray-600 mb-4">{community.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                <span>{community.memberCount.toLocaleString()} members</span>
              </div>
              <div className="flex items-center text-orange-600 font-medium">
                <span className="mr-1">View Community</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};