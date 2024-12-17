import React, { useState } from 'react';
import { PersonalInfoPanel } from '../components/profile/PersonalInfoPanel';
import { SecurityPanel } from '../components/profile/SecurityPanel';
import { PaymentPanel } from '../components/profile/PaymentPanel';
import { NotificationPanel } from '../components/profile/NotificationPanel';
import { currentUser } from '../data/mockUser';

type SettingsTab = 'account' | 'security' | 'billing' | 'notifications';

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('account');

  const tabs: Array<{ id: SettingsTab; label: string }> = [
    { id: 'account', label: 'Account' },
    { id: 'security', label: 'Security' },
    { id: 'billing', label: 'Billing' },
    { id: 'notifications', label: 'Notifications' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <PersonalInfoPanel user={currentUser} />;
      case 'security':
        return <SecurityPanel />;
      case 'billing':
        return <PaymentPanel />;
      case 'notifications':
        return <NotificationPanel />;
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex space-x-8">
        <nav className="w-64 flex-shrink-0" aria-label="Settings navigation">
          <ul className="space-y-1">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === tab.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1 bg-white rounded-lg shadow">
          <div className="p-6">{renderContent()}</div>
        </div>
      </div>
    </main>
  );
};