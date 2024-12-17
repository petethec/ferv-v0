import { FeedbackThread } from '../types';

export const feedbackThreads: FeedbackThread[] = [
  {
    id: 'ft1',
    projectId: '1',
    title: 'Add Temperature Display Feature',
    description: 'It would be great if the bottle could show the current temperature of the liquid inside.',
    createdAt: new Date('2024-03-10'),
    createdBy: 'EcoEnthusiast',
    status: 'open',
    category: 'feature',
    votes: 45,
    responses: [
      {
        id: 'fr1',
        threadId: 'ft1',
        content: 'Great suggestion! We\'re actually exploring this for our next iteration.',
        createdAt: new Date('2024-03-11'),
        createdBy: 'EcoInnovators',
        isCreator: true
      }
    ]
  },
  {
    id: 'ft2',
    projectId: '2',
    title: 'Improve Mobile App UI',
    description: 'The current plant care schedule view could be more intuitive.',
    createdAt: new Date('2024-03-12'),
    createdBy: 'GreenThumb',
    status: 'open',
    category: 'design',
    votes: 28,
    responses: []
  }
];