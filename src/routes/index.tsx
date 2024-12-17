import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';
import { ExplorePage } from '../pages/ExplorePage';
import { ProjectDetailsPage } from '../pages/ProjectDetailsPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CreateCampaignPage } from '../pages/CreateCampaignPage';
import { AbandonedProjectsPage } from '../pages/AbandonedProjectsPage';
import { SubscriptionPage } from '../pages/SubscriptionPage';
import { CheckoutFlow } from '../components/subscription/CheckoutFlow';
import { SettingsPage } from '../pages/SettingsPage';
import { ProfilePage } from '../pages/ProfilePage';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { CampaignAnalyticsPage } from '../pages/analytics/CampaignAnalyticsPage';
import { AccountabilityDashboardPage } from '../pages/accountability/AccountabilityDashboardPage';
import { MarketingPerformancePage } from '../pages/analytics/MarketingPerformancePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'explore',
        element: <ExplorePage />
      },
      {
        path: 'project/:id',
        element: <ProjectDetailsPage />
      },
      {
        path: 'project/:id/accountability',
        element: <AccountabilityDashboardPage />
      },
      {
        path: 'dashboard',
        element: <DashboardPage />
      },
      {
        path: 'create',
        element: <CreateCampaignPage />
      },
      {
        path: 'abandoned-projects',
        element: <AbandonedProjectsPage />
      },
      {
        path: 'subscription',
        element: <SubscriptionPage />
      },
      {
        path: 'subscription/checkout/:planId',
        element: <CheckoutFlow />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'admin',
        element: <AdminDashboardPage />
      },
      {
        path: 'analytics',
        element: <CampaignAnalyticsPage />
      },
      {
        path: 'analytics/marketing',
        element: <MarketingPerformancePage />
      }
    ]
  }
]);