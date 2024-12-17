import type { Project } from '../../types';

export const generatePreviewData = (project: Project) => {
  return {
    title: project.title,
    description: project.description,
    goal: project.goal,
    category: project.category,
    rewards: project.rewards,
    previewUrl: `https://fervor.app/campaign/preview/${project.id}`,
    testUrl: `https://fervor.app/campaign/test/${project.id}`,
    socialPreview: {
      title: project.title,
      description: project.description,
      image: project.imageUrl,
      url: `https://fervor.app/campaign/${project.id}`
    }
  };
};