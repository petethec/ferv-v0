import { Community } from '../types';

export const communities: Community[] = [
  // ... existing communities remain unchanged
  {
    id: 'c5',
    name: 'Design Innovators',
    description: 'Where technology meets art and design.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    memberCount: 8450,
    endorsedProjects: ['6'],
    category: 'Art & Design'
  },
  {
    id: 'c6',
    name: 'Urban Art Movement',
    description: 'Supporting public art initiatives and community expression.',
    imageUrl: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8',
    memberCount: 6280,
    endorsedProjects: ['7'],
    category: 'Public Art'
  },
  {
    id: 'c7',
    name: 'Rural Impact Network',
    description: 'Bringing essential services to underserved rural communities.',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
    memberCount: 4920,
    endorsedProjects: ['8'],
    category: 'Social Impact'
  }
];