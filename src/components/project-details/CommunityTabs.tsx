import React, { useState } from 'react';
import { MessageSquare, Bell, Video, Calendar, Users } from 'lucide-react';
import { Project, Update, LiveSession, FeedbackThread } from '../../types';

interface CommunityTabsProps {
  project: Project;
}

type TabType = 'updates' | 'comments' | 'live-sessions' | 'feedback';

export const CommunityTabs: React.FC<CommunityTabsProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<TabType>('updates');

  const tabs = [
    { id: 'updates', label: 'Updates', icon: Bell },
    { id: 'live-sessions', label: 'Live Sessions', icon: Video },
    { id: 'feedback', label: 'Feedback Forum', icon: MessageSquare },
  ] as const;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'updates':
        return <UpdatesList updates={project.updates} />;
      case 'live-sessions':
        return <LiveSessionsList sessions={project.liveSessions} />;
      case 'feedback':
        return <FeedbackList threads={project.feedbackThreads} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="border-b border-gray-200">
        <div className="flex space-x-8 px-6">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabType)}
              className={`py-4 relative ${
                activeTab === id
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">{renderTabContent()}</div>
    </div>
  );
};

const UpdatesList: React.FC<{ updates: Update[] }> = ({ updates }) => {
  return (
    <div className="space-y-8">
      {updates.map((update) => (
        <div key={update.id} className="border-b border-gray-100 last:border-0 pb-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900">{update.title}</h3>
            <time className="text-sm text-gray-500">
              {new Date(update.date).toLocaleDateString()}
            </time>
          </div>
          <p className="text-gray-600 mb-4">{update.content}</p>
          <div className="flex items-center space-x-2 text-sm">
            <img
              src={`https://api.dicebear.com/7.x/personas/svg?seed=${update.author}`}
              alt={update.author}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-gray-600">{update.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const LiveSessionsList: React.FC<{ sessions: LiveSession[] }> = ({ sessions }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">Upcoming & Recent Sessions</h3>
        <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
          View All Sessions
        </button>
      </div>

      {sessions.map((session) => (
        <div
          key={session.id}
          className={`border rounded-lg p-4 ${
            session.status === 'live'
              ? 'border-orange-200 bg-orange-50'
              : 'border-gray-200'
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              {session.status === 'live' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1"></span>
                  Live Now
                </span>
              )}
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {session.title}
              </h4>
              <p className="text-sm text-gray-600 mb-3">{session.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>
                    {new Date(session.startTime).toLocaleDateString()} at{' '}
                    {new Date(session.startTime).toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{session.attendees} attending</span>
                </div>
              </div>
            </div>

            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                session.status === 'live'
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : session.status === 'upcoming'
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {session.status === 'live'
                ? 'Join Now'
                : session.status === 'upcoming'
                ? 'Set Reminder'
                : 'Watch Recording'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const FeedbackList: React.FC<{ threads: FeedbackThread[] }> = ({ threads }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Feedback Forum</h3>
          <p className="text-sm text-gray-600">Share your ideas and suggestions</p>
        </div>
        <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
          New Thread
        </button>
      </div>

      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  thread.category === 'feature'
                    ? 'bg-purple-100 text-purple-800'
                    : thread.category === 'design'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                } mb-2`}>
                  {thread.category}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {thread.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{thread.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span>{thread.responses.length} responses</span>
                  </div>
                  <span>•</span>
                  <span>Created {new Date(thread.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <button className="text-gray-500 hover:text-orange-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <span className="text-lg font-semibold text-gray-900">{thread.votes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};