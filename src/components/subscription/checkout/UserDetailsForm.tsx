import React from 'react';
import { useForm } from 'react-hook-form';

interface UserDetailsFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserDetailsFormProps {
  onSubmit: (data: UserDetailsFormData) => void;
  onBack: () => void;
}

export const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ onSubmit, onBack }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<UserDetailsFormData>();
  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            {...register('firstName', { required: 'First name is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            {...register('lastName', { required: 'Last name is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: value => value === password || 'Passwords do not match'
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
        )}
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