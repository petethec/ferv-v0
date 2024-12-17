import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { MergeSuggestionCard } from './MergeSuggestionCard';
import { MergeRequestModal } from './MergeRequestModal';
import type { Project } from '../../types';

interface MergeDashboardProps {
  currentProject: Project;
  suggestedProjects: Array<{
    project: Project;
    similarityScore: number;
  }>;
}

export const MergeDashboard: React.FC<MergeDashboardProps> = ({
  currentProject,
  suggestedProjects
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [minSimilarity, setMinSimilarity] = useState(70);

  const filteredSuggestions = suggestedProjects
    .filter(({ project, similarityScore }) => 
      similarityScore >= minSimilarity &&
      (searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => b.similarityScore - a.similarityScore);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campaign Merge Suggestions</h2>
          <p className="text-gray-600 mt-1">
            Find complementary campaigns to merge with and increase your success potential
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={minSimilarity}
              onChange={(e) => setMinSimilarity(Number(e.target.value))}
              className="px-3 py-2 border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value={90}>90%+ Match</option>
              <option value={80}>80%+ Match</option>
              <option value={70}>70%+ Match</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSuggestions.map(({ project, similarityScore }) => (
          <MergeSuggestionCard
            key={project.id}
            sourceProject={currentProject}
            targetProject={project}
            similarityScore={similarityScore}
            onRequestMerge={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <MergeRequestModal
          sourceProject={currentProject}
          targetProject={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSubmit={(message) => {
            console.log('Merge requested:', { sourceProject, targetProject: selectedProject, message });
            setSelectedProject(null);
          }}
        />
      )}
    </div>
  );
};