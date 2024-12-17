import React, { useState } from 'react';
import { Lock, Smartphone, Shield } from 'lucide-react';

export const SecurityPanel: React.FC = () => {
  const [showTwoFactorSetup, setShowTwoFactorSetup] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
            >
              <Lock className="w-4 h-4 mr-2" />
              Update Password
            </button>
          </div>
        </form>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
        {!showTwoFactorSetup ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">Two-factor authentication is disabled</p>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
            </div>
            <button
              onClick={() => setShowTwoFactorSetup(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Enable
            </button>
          </div>
        ) : (
          <div className="bg-gray-50 p-4 rounded-lg">
            {/* Two-factor setup UI would go here */}
            <p className="text-sm text-gray-600">Two-factor authentication setup UI placeholder</p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Security Log</h3>
        <div className="space-y-4">
          {[
            { event: 'Password changed', date: '2024-03-15', location: 'New York, US' },
            { event: 'New login', date: '2024-03-14', location: 'San Francisco, US' },
            { event: 'New device added', date: '2024-03-13', location: 'Chicago, US' }
          ].map((log, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-900">{log.event}</span>
              </div>
              <div className="text-gray-500">
                {log.date} • {log.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};