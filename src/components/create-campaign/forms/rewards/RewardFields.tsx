import React from 'react';
import { FormField } from '../../shared/FormField';

interface RewardFieldsProps {
  data: {
    title: string;
    description: string;
    amount: number;
    estimatedDelivery: string;
    shippingLocation: string;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: string | number) => void;
}

export const RewardFields: React.FC<RewardFieldsProps> = ({
  data,
  errors,
  onChange
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Reward Title"
          required
          error={errors.title}
        >
          <input
            type="text"
            value={data.title}
            onChange={(e) => onChange('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          />
        </FormField>

        <FormField
          label="Amount ($)"
          required
          error={errors.amount}
        >
          <input
            type="number"
            min="1"
            value={data.amount}
            onChange={(e) => onChange('amount', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          />
        </FormField>
      </div>

      <FormField
        label="Description"
        required
        error={errors.description}
      >
        <textarea
          value={data.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          rows={2}
        />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Estimated Delivery"
          required
          error={errors.estimatedDelivery}
        >
          <input
            type="date"
            value={data.estimatedDelivery}
            onChange={(e) => onChange('estimatedDelivery', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          />
        </FormField>

        <FormField
          label="Shipping Location"
          required
          error={errors.shippingLocation}
        >
          <select
            value={data.shippingLocation}
            onChange={(e) => onChange('shippingLocation', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          >
            <option value="Worldwide">Worldwide</option>
            <option value="US Only">US Only</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </select>
        </FormField>
      </div>
    </>
  );
};