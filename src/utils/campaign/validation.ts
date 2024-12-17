import { Step } from '../../components/create-campaign/steps/types';

export const validateStep = (step: Step, data: any): Record<string, string> => {
  const errors: Record<string, string> = {};

  switch (step) {
    case 'basics':
      if (!data.title?.trim()) {
        errors.title = 'Title is required';
      } else if (data.title.length < 10) {
        errors.title = 'Title must be at least 10 characters';
      }

      if (!data.category) {
        errors.category = 'Category is required';
      }

      if (!data.goal || data.goal < 100) {
        errors.goal = 'Goal must be at least $100';
      }

      if (!data.tagline?.trim()) {
        errors.tagline = 'Tagline is required';
      }
      break;

    case 'story':
      if (!data.description?.trim()) {
        errors.description = 'Description is required';
      } else if (data.description.length < 100) {
        errors.description = 'Description must be at least 100 characters';
      }

      if (!data.risks?.trim()) {
        errors.risks = 'Risks section is required';
      }

      if (!data.timeline?.trim()) {
        errors.timeline = 'Timeline is required';
      }
      break;

    case 'rewards':
      if (!data.rewards?.length) {
        errors.rewards = 'At least one reward is required';
      }
      break;
  }

  return errors;
};