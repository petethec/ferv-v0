import { AdminDashboardData, AdminSettings, Permission, AdminUser } from '../types/admin';
import { projects } from './projects';

export const mockAdminUser: AdminUser = {
  id: 'admin1',
  name: 'John Admin',
  email: 'john@fervor.com',
  avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=john-admin',
  role: 'admin',
  permissions: [
    'manage_campaigns',
    'manage_reports',
    'moderate_comments',
    'view_analytics',
    'manage_users',
    'manage_settings'
  ],
  isCreator: true,
  joinedAt: new Date('2023-01-01'),
  lastLogin: new Date(),
  actionsLog: [],
  backedProjects: [],
  createdProjects: [],
  communities: [],
  referralCount: 0,
  badges: []
};

export const mockDashboardData: AdminDashboardData = {
  stats: {
    totalUsers: 15420,
    activeUsers: 8750,
    totalCampaigns: 2840,
    activeCampaigns: 945,
    totalFundsRaised: 12450000,
    pendingReports: 23,
    successRate: 68
  },
  recentActions: [
    {
      id: 'action1',
      adminId: 'admin1',
      action: 'approve_campaign',
      targetType: 'campaign',
      targetId: 'campaign1',
      timestamp: new Date(),
      details: 'Approved new tech campaign',
      status: 'success'
    },
    {
      id: 'action2',
      adminId: 'admin1',
      action: 'resolve_report',
      targetType: 'report',
      targetId: 'report1',
      timestamp: new Date(),
      details: 'Resolved spam report',
      status: 'success'
    }
  ],
  pendingReports: [
    {
      id: 'report1',
      projectId: 'project1',
      reporterId: 'user1',
      type: 'inappropriate',
      description: 'Campaign contains misleading information',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'report2',
      projectId: 'project2',
      reporterId: 'user2',
      type: 'spam',
      description: 'Multiple identical campaigns created',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  pendingCampaigns: projects.slice(0, 2)
};

export const mockAdminSettings: AdminSettings = {
  platformFees: {
    baseFee: 5,
    paymentProcessingFee: 2.9,
    coFundingFee: 1
  },
  moderation: {
    requireApproval: true,
    autoFlagKeywords: ['scam', 'fraud', 'fake'],
    maxReportsThreshold: 5
  },
  features: {
    coFundingEnabled: true,
    flexibleFundingEnabled: true,
    referralRewardsEnabled: true
  }
};