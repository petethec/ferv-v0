import { create } from 'zustand';
import { Project } from '../types';
import { projects as initialProjects } from '../data/projects';

interface ProjectState {
  projects: Project[];
  toggleDownvote: (projectId: string) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: initialProjects,
  toggleDownvote: (projectId: string) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? { ...project, downvotes: project.downvotes + 1 }
          : project
      ),
    })),
}));