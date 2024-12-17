import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FormSection } from '../shared/FormSection';
import { RewardFields } from '../forms/rewards/RewardFields';
import { StepNavigation } from '../shared/StepNavigation';

interface RewardsStepProps {
  data: {
    rewards: Array<{
      title: string;
      description: string;
      amount: number;
      estimatedDelivery: string;
      shippingLocation: string;
    }>;
  };
  errors: Record<string, string>;
  onChange: (rewards: any[]) => void;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
}

export const RewardsStep: React.FC<RewardsStepProps> = ({
  data,
  errors,
  onChange,
  onNext,
  onBack,
  isValid
}) => {
  const [newReward, setNewReward] = useState({
    title: '',
    description: '',
    amount: 0,
    estimatedDelivery: '',
    shippingLocation: 'Worldwide'
  });

  const handleAddReward = () => {
    onChange([...data.rewards, { ...newReward, id: Date.now() }]);
    setNewReward({
      title: '',
      description: '',
      amount: 0,
      estimatedDelivery: '',
      shippingLocation: 'Worldwide'
    });
  };

  const handleRemoveReward = (index: number) => {
    const updatedRewards = [...data.rewards];
    updatedRewards.splice(index, 1);
    onChange(updatedRewards);
  };

  return (
    <div className="space-y-6">
      <FormSection
        title="Reward Tiers"
        description="Create compelling rewards for your backers"
      >
        {data.rewards.map((reward, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-gray-900">Reward #{index + 1}</h4>
              <button
                type="button"
                onClick={() => handleRemoveReward(index)}
                className="text-red-600 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
            <RewardFields
              data={reward}
              errors={errors}
              onChange={(field, value) => {
                const updatedRewards = [...data.rewards];
                updatedRewards[index] = {
                  ...updatedRewards[index],
                  [field]: value
                };
                onChange(updatedRewards);
              }}
            />
          </div>
        ))}

        <div className="mt-6">
          <button
            type="button"
            onClick={handleAddReward}
            className="w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Reward Tier
          </button>
        </div>
      </FormSection>

      <StepNavigation
        onNext={onNext}
        onBack={onBack}
        isFirstStep={false}
        isLastStep={false}
        isValid={isValid}
      />
    </div>
  );
};