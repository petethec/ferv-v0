export type Step = 'basics' | 'story' | 'rewards' | 'settings' | 'preview';

export const steps = [
  { id: 'basics' as const, label: 'Basics' },
  { id: 'story' as const, label: 'Story' },
  { id: 'rewards' as const, label: 'Rewards' },
  { id: 'settings' as const, label: 'Settings' },
  { id: 'preview' as const, label: 'Preview' }
] as const;