import { LiveSession } from '../types';

export const liveSessions: LiveSession[] = [
  {
    id: 'ls1',
    projectId: '1',
    title: 'Live Build: Prototype Testing',
    description: 'Watch us test the latest prototype of our self-cleaning mechanism and share your feedback.',
    startTime: new Date('2024-03-20T15:00:00Z'),
    duration: 60,
    status: 'upcoming',
    attendees: 156,
    type: 'build'
  },
  {
    id: 'ls2',
    projectId: '1',
    title: 'Q&A: Manufacturing Process',
    description: 'Learn about our sustainable manufacturing process and ask questions about production.',
    startTime: new Date('2024-03-15T18:00:00Z'),
    duration: 45,
    status: 'completed',
    attendees: 234,
    recordingUrl: 'https://example.com/recording/ls2',
    type: 'qa'
  },
  {
    id: 'ls3',
    projectId: '2',
    title: 'Live Demo: AI Plant Recognition',
    description: 'See our AI technology in action as it identifies different plant species and provides care recommendations.',
    startTime: new Date('2024-03-18T20:00:00Z'),
    duration: 90,
    status: 'upcoming',
    attendees: 312,
    type: 'build'
  }
];