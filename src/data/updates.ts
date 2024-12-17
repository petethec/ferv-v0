import { Update } from '../types';

export const updates: Update[] = [
  {
    id: 'u1',
    projectId: '1',
    title: 'Production Update: Molds are Ready!',
    content: 'We are excited to announce that our production molds are complete and have passed quality testing.',
    date: new Date('2024-02-15'),
    author: 'Sarah from EcoInnovators'
  },
  {
    id: 'u2',
    projectId: '2',
    title: 'App Development Milestone',
    content: 'We have completed the core features of our mobile app and are now entering beta testing.',
    date: new Date('2024-03-01'),
    author: 'Mike from GreenTech'
  },
  {
    id: 'u3',
    projectId: '3',
    title: 'Art Book Preview',
    content: 'Check out these preview pages from the companion art book!',
    date: new Date('2024-02-28'),
    author: 'Lisa from GameArtistry'
  }
];