import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  featuredProject: Project;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ featuredProject }) => {
  const progress = (featuredProject.currentAmount / featuredProject.goal) * 100;

  return (
    <div className="relative h-[500px] overflow-hidden rounded-2xl">
      <img
        src={featuredProject.imageUrl}
        alt={featuredProject.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-orange-600 rounded-full text-sm font-medium mb-4">
            Featured Project
          </span>
          
          <h1 className="text-4xl font-bold mb-4">{featuredProject.title}</h1>
          <p className="text-lg text-gray-200 mb-6">{featuredProject.description}</p>

          <div className="mb-6">
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div
                className="bg-orange-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-sm">
              <span>${featuredProject.currentAmount.toLocaleString()} raised</span>
              <span>{progress.toFixed(1)}% of ${featuredProject.goal.toLocaleString()}</span>
            </div>
          </div>

          <Link
            to={`/project/${featuredProject.id}`}
            className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-full text-white font-medium transition-colors"
          >
            Support Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};