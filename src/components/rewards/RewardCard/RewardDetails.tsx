import React from 'react';
import { Calendar, Package } from 'lucide-react';

interface RewardDetailsProps {
  description: string;
  estimatedDelivery: Date;
  shippingLocation: string;
  itemsAvailable?: number;
  itemsClaimed: number;
}

export const RewardDetails: React.FC<RewardDetailsProps> = ({
  description,
  estimatedDelivery,
  shippingLocation,
  itemsAvailable,
  itemsClaimed
}) => {
  return (
    <div className="space-y-4 mb-6">
      <p className="text-gray-600">{description}</p>
      
      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex items-center">
          <Package className="w-4 h-4 mr-2" />
          {itemsAvailable ? (
            <span>
              {itemsAvailable - itemsClaimed} of {itemsAvailable} available
            </span>
          ) : (
            <span>Unlimited</span>
          )}
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span>
            Estimated delivery: {estimatedDelivery.toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};