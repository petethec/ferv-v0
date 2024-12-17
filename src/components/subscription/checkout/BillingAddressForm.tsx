import React from 'react';
import { useForm } from 'react-hook-form';
import { countries } from '../../../data/countries';

interface BillingAddressFormData {
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface BillingAddressFormProps {
  onSubmit: (data: BillingAddressFormData) => void;
  onBack: () => void;
}

export const BillingAddressForm: React.FC<BillingAddressFormProps> = ({ onSubmit, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<BillingAddressFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input
          type="text"
          {...register('streetAddress', { required: 'Street address is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
        {errors.streetAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.streetAddress.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            {...register('city', { required: 'City is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">State / Province</label>
          <input
            type="text"
            {...register('state', { required: 'State is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          {errors.state && (
            <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            {...register('postalCode', { required: 'Postal code is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          {errors.postalCode && (
            <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select
            {...register('country', { required: 'Country is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
        >
          Continue
        </button>
      </div>
    </form>
  );
};