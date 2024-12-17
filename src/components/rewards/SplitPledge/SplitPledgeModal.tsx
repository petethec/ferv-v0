import React, { useState } from 'react';
import { Users, Clock, Share2, AlertCircle } from 'lucide-react';
import { ContributionForm } from './ContributionForm';
import { ContributorsProgress } from './ContributorsProgress';
import { InviteOptions } from './InviteOptions';
import type { Reward } from '../../../types';

interface SplitPledgeModalProps {
  reward: Reward;
  onClose: () => void;
}

export const SplitPledgeModal: React.FC<SplitPledgeModalProps> = ({
  reward,
  onClose
}) => {
  const [step, setStep] = useState<'form' | 'invite'>('form');
  const [contribution, setContribution] = useState<number>(reward.amount * 0.25);
  const [maxContributors, setMaxContributors] = useState<number>(5);

  const handleInitiate = () => {
    // TODO: Implement split pledge creation
    setStep('invite');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Split Contribution</h2>
              <p className="mt-1 text-gray-600">Share the cost of this reward with others</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-orange-900">Reward Details</h3>
                <p className="mt-1 text-sm text-orange-800">
                  {reward.title} - ${reward.amount}
                </p>
                <p className="mt-2 text-sm text-orange-700">
                  Split this reward's cost between 2-10 backers. Each backer must
                  contribute at least 25% of the total cost.
                </p>
              </div>
            </div>
          </div>

          {step === 'form' ? (
            <>
              <ContributionForm
                reward={reward}
                contribution={contribution}
                maxContributors={maxContributors}
                onContributionChange={setContribution}
                onMaxContributorsChange={setMaxContributors}
              />

              <ContributorsProgress
                totalAmount={reward.amount}
                currentAmount={contribution}
                maxContributors={maxContributors}
              />

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleInitiate}
                  className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
                >
                  Continue to Invite
                </button>
              </div>
            </>
          ) : (
            <InviteOptions
              reward={reward}
              contribution={contribution}
              maxContributors={maxContributors}
              onBack={() => setStep('form')}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};