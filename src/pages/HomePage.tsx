import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { HeroSection } from '../components/HeroSection';
import { projects } from '../data/projects';

export const HomePage: React.FC = () => {
  const featuredProject = projects[0]; // First project as featured
  const trendingProjects = projects.slice(0, 3);
  const allProjects = projects;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <HeroSection featuredProject={featuredProject} />

      <section>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-600 mt-1">Projects gaining momentum in the last 24 hours</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Discover Projects</h2>
            <p className="text-gray-600 mt-1">Explore innovative ideas worth supporting</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
};