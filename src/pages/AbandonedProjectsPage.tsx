import React, { useState } from 'react';
import { Search, Filter, AlertCircle } from 'lucide-react';
import { AbandonedProjectCard } from '../components/abandoned/AbandonedProjectCard';
import { isProjectReclaimable, calculateMonthsInactive } from '../utils/abandonedCalculations';
import { abandonedProjects } from '../data/abandonedProjects';
import type { AbandonedProject } from '../types/abandoned';

export const AbandonedProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minInactiveMonths, setMinInactiveMonths] = useState(6);

  const filteredProjects = abandonedProjects.filter(project => {
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    const isInactiveLongEnough = calculateMonthsInactive(project.lastActivityDate) >= minInactiveMonths;
    
    return matchesSearch && matchesCategory && isInactiveLongEnough && isProjectReclaimable(project);
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Abandoned Projects</h1>
        <p className="mt-2 text-gray-600">
          Discover and revitalize promising projects that need new leadership
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search abandoned projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <select
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="px-4 py-2 border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Design">Design</option>
            <option value="Games">Games</option>
          </select>

          <select
            value={minInactiveMonths}
            onChange={(e) => setMinInactiveMonths(Number(e.target.value))}
            className="px-4 py-2 border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value={6}>6+ Months Inactive</option>
            <option value={12}>1+ Year Inactive</option>
            <option value={24}>2+ Years Inactive</option>
          </select>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <AlertCircle className="w-4 h-4 mr-2" />
          <span>{filteredProjects.length} reclaimable projects found</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <AbandonedProjectCard
            key={project.id}
            project={project}
            onReclaim={() => {
              // Handle reclaim action
              console.log('Reclaiming project:', project.id);
            }}
          />
        ))}
      </div>
    </main>
  );
};