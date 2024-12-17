import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectHeader } from '../components/project-details/ProjectHeader';
import { ProjectProgress } from '../components/project-details/ProjectProgress';
import { RewardsList } from '../components/project-details/RewardsList';
import { ProjectDescription } from '../components/project-details/ProjectDescription';
import { CreatorInfo } from '../components/project-details/CreatorInfo';
import { CommunityTabs } from '../components/project-details/CommunityTabs';
import { CoFundingSection } from '../components/project-details/CoFundingSection';
import { MergeDashboard } from '../components/merge/MergeDashboard';
import { analyzeMergeCompatibility } from '../utils/mergeAnalysis';

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [showMergeDashboard, setShowMergeDashboard] = useState(false);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
      </div>
    );
  }

  // Find potential merge candidates
  const suggestedProjects = projects
    .filter(p => p.id !== project.id)
    .map(p => ({
      project: p,
      similarityScore: analyzeMergeCompatibility(project, p).similarityScore
    }))
    .filter(({ similarityScore }) => similarityScore >= 70);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProjectHeader project={project} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ProjectDescription project={project} />
          <CreatorInfo project={project} />
          
          {/* Add Merge Dashboard Toggle Button for Creators */}
          <div className="flex justify-end">
            <button
              onClick={() => setShowMergeDashboard(!showMergeDashboard)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {showMergeDashboard ? 'Hide Merge Suggestions' : 'Explore Merge Opportunities'}
            </button>
          </div>

          {/* Conditionally Show Merge Dashboard */}
          {showMergeDashboard && (
            <MergeDashboard
              currentProject={project}
              suggestedProjects={suggestedProjects}
            />
          )}

          <CoFundingSection project={project} />
          <CommunityTabs project={project} />
        </div>
        
        <div className="lg:col-span-1">
          <ProjectProgress project={project} />
          <div className="mt-8">
            <RewardsList rewards={project.rewards} />
          </div>
        </div>
      </div>
    </main>
  );
};