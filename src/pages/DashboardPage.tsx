import React, { useState } from 'react';
import { currentUser } from '../data/mockUser';
import { projects } from '../data/projects';
import { communities } from '../data/communities';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ContributionsPanel } from '../components/dashboard/ContributionsPanel';
import { CreatorPanel } from '../components/dashboard/CreatorPanel';
import { CommunitiesPanel } from '../components/dashboard/CommunitiesPanel';

type TabType = 'contributions' | 'campaigns' | 'communities';

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('contributions');
  const userProjects = projects.filter(p => currentUser.createdProjects.includes(p.id));
  const backedProjects = projects.filter(p => 
    currentUser.backedProjects.some(bp => bp.projectId === p.id)
  );
  const userCommunities = communities.filter(c => currentUser.communities.includes(c.id));

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contributions':
        return <ContributionsPanel backedProjects={backedProjects} />;
      case 'campaigns':
        return <CreatorPanel projects={userProjects} />;
      case 'communities':
        return <CommunitiesPanel communities={userCommunities} />;
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DashboardHeader user={currentUser} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-8">{renderTabContent()}</div>
    </main>
  );
};