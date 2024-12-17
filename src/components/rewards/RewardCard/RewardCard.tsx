import React from 'react';
import { Calendar, Package } from 'lucide-react';
import { RewardHeader } from './RewardHeader';
import { RewardDetails } from './RewardDetails';
import { RewardActions } from './RewardActions';
import { SplitPledgeButton } from '../SplitPledge/SplitPledgeButton';
import { PaymentScheduleSelector } from './PaymentScheduleSelector';
import { useRewardSchedule } from './hooks/useRewardSchedule';
import type { Reward } from '../../../types';

interface RewardCardProps {
  reward: Reward;
  onPledge: (amount: number) => void;
}

export const RewardCard: React.FC<RewardCardProps> = ({ reward, onPledge }) => {
  const {
    scheduleType,
    splitAmount,
    totalPayments,
    setScheduleType
  } = useRewardSchedule(reward.amount);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-orange-200 transition-colors">
      <RewardHeader
        title={reward.title}
        amount={reward.amount}
        scheduleType={scheduleType}
        splitAmount={splitAmount}
      />
      
      <RewardDetails
        description={reward.description}
        estimatedDelivery={reward.estimatedDelivery}
        shippingLocation={reward.shippingLocation}
        itemsAvailable={reward.itemsAvailable}
        itemsClaimed={reward.itemsClaimed}
      />

      <PaymentScheduleSelector
        amount={reward.amount}
        scheduleType={scheduleType}
        onScheduleChange={setScheduleType}
        splitAmount={splitAmount}
        totalPayments={totalPayments}
      />

      <RewardActions
        reward={reward}
        scheduleType={scheduleType}
        splitAmount={splitAmount}
        onPledge={onPledge}
      />

      <SplitPledgeButton reward={reward} />
    </div>
  );
};