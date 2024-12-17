import React, { useState, useMemo } from 'react';
import { Search, Filter, Users } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { FilterPanel } from '../components/explore/FilterPanel';
import { CategoryBar } from '../components/explore/CategoryBar';
import { RecommendedStrip } from '../components/explore/RecommendedStrip';

type SortOption = 'trending' | 'most-funded' | 'newest' | 'ending-soon';

export const ExplorePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('trending');
  const [showCoFundingOnly, setShowCoFundingOnly] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        const matchesSearch = searchQuery === '' || 
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.creator.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = !selectedCategory || project.category === selectedCategory;
        const matchesCoFunding = !showCoFundingOnly || project.allowCoFunding;

        return matchesSearch && matchesCategory && matchesCoFunding;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'most-funded':
            return b.currentAmount - a.currentAmount;
          case 'newest':
            return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
          case 'ending-soon':
            return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
          default: // trending
            return b.backers - a.backers;
        }
      });
  }, [searchQuery, selectedCategory, sortBy, showCoFundingOnly]);

  const recommendedProjects = useMemo(() => {
    return projects
      .filter(p => p.allowCoFunding)
      .sort((a, b) => b.currentAmount - a.currentAmount)
      .slice(0, 3);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Explore Projects</h1>
          <p className="mt-2 text-gray-600">
            {filteredProjects.length} innovative projects to discover
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-2 border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="trending">Trending</option>
            <option value="most-funded">Most Funded</option>
            <option value="newest">Recently Added</option>
            <option value="ending-soon">Ending Soon</option>
          </select>
        </div>
      </div>

      <CategoryBar 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <FilterPanel
            showCoFundingOnly={showCoFundingOnly}
            onCoFundingToggle={setShowCoFundingOnly}
          />
        </div>

        <div className="lg:col-span-3 space-y-8">
          <RecommendedStrip projects={recommendedProjects} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setShowCoFundingOnly(false);
                }}
                className="mt-4 text-orange-600 hover:text-orange-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};