import React from 'react';
import { useForm } from 'react-hook-form';
import { CreditCard, Lock } from 'lucide-react';

interface PaymentMethodFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

interface PaymentMethodFormProps {
  onSubmit: (data: PaymentMethodFormData) => void;
  onBack: () => void;
}

export const PaymentMethodForm: React.FC<PaymentMethodFormProps> = ({ onSubmit, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentMethodFormData>();

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const formatExpiryDate = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .substr(0, 5);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <Lock className="w-4 h-4 mr-2" />
          Your payment information is encrypted and secure
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <div className="mt-1 relative">
          <input
            type="text"
            {...register('cardNumber', {
              required: 'Card number is required',
              pattern: {
                value: /^[\d\s]{16,19}$/,
                message: 'Invalid card number'
              },
              onChange: (e) => {
                e.target.value = formatCardNumber(e.target.value);
              }
            })}
            placeholder="1234 5678 9012 3456"
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        {errors.cardNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="text"
            {...register('expiryDate', {
              required: 'Expiry date is required',
              pattern: {
                value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                message: 'Invalid expiry date (MM/YY)'
              },
              onChange: (e) => {
                e.target.value = formatExpiryDate(e.target.value);
              }
            })}
            placeholder="MM/YY"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          {errors.expiryDate && (
            <p className="mt-1 text-sm text-red-600">{errors.expiryDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            {...register('cvv', {
              required: 'CVV is required',
              pattern: {
                value: /^[0-9]{3,4}$/,
                message: 'Invalid CVV'
              }
            })}
            maxLength={4}
            placeholder="123"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          {errors.cvv && (
            <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
        <input
          type="text"
          {...register('cardholderName', { required: 'Cardholder name is required' })}
          placeholder="Name as shown on card"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
        {errors.cardholderName && (
          <p className="mt-1 text-sm text-red-600">{errors.cardholderName.message}</p>
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
          Complete Purchase
        </button>
      </div>
    </form>
  );
};