export interface AdminUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'moderator' | 'support';
  permissions: Permission[];
  isCreator: boolean;
  joinedAt: Date;
  lastLogin: Date;
  actionsLog: AdminAction[];
  backedProjects: string[];
  createdProjects: string[];
  communities: string[];
  referralCount: number;
  badges: any[];
}

export type Permission = 
  | 'manage_campaigns'
  | 'manage_reports'
  | 'moderate_comments'
  | 'view_analytics'
  | 'manage_users'
  | 'manage_settings';

export interface AdminAction {
  id: string;
  adminId: string;
  action: string;
  targetType: 'campaign' | 'user' | 'comment' | 'report';
  targetId: string;
  timestamp: Date;
  details: string;
  status: 'success' | 'failed' | 'pending';
}

export interface AdminDashboardData {
  stats: {
    totalUsers: number;
    activeUsers: number;
    totalCampaigns: number;
    activeCampaigns: number;
    totalFundsRaised: number;
    pendingReports: number;
    successRate: number;
  };
  recentActions: AdminAction[];
  pendingReports: ProjectReport[];
  pendingCampaigns: Project[];
}

export interface ProjectReport {
  id: string;
  projectId: string;
  reporterId: string;
  type: 'inappropriate' | 'spam' | 'fraud' | 'copyright' | 'other';
  description: string;
  status: 'pending' | 'resolved' | 'dismissed';
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminSettings {
  platformFees: {
    baseFee: number;
    paymentProcessingFee: number;
    coFundingFee: number;
  };
  moderation: {
    requireApproval: boolean;
    autoFlagKeywords: string[];
    maxReportsThreshold: number;
  };
  features: {
    coFundingEnabled: boolean;
    flexibleFundingEnabled: boolean;
    referralRewardsEnabled: boolean;
  };
}