import { MergeRequest } from '../features/merge/types';

export const mergeRequests: MergeRequest[] = [
  {
    id: 'mr1',
    sourceProjectId: 'eco-retreat',
    targetProjectId: 'tech-collab',
    status: 'pending',
    message: "Our eco-friendly retreat would benefit greatly from your smart workspace technology. Let's create a truly innovative sustainable workspace experience.",
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15'),
    combinedGoal: 225000,
    keepRewards: true
  },
  {
    id: 'mr2',
    sourceProjectId: 'art-collective',
    targetProjectId: 'edu-platform',
    status: 'accepted',
    message: "Combining our interactive art installation with your global learning platform would create amazing educational experiences.",
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-12'),
    combinedGoal: 245000,
    keepRewards: true
  },
  {
    id: 'mr3',
    sourceProjectId: 'tech-collab',
    targetProjectId: 'art-collective',
    status: 'rejected',
    message: "We could integrate your art installations into our smart workspace environment.",
    createdAt: new Date('2024-03-08'),
    updatedAt: new Date('2024-03-09'),
    combinedGoal: 195000,
    keepRewards: false
  }
];