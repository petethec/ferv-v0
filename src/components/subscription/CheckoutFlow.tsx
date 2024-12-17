import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckoutSteps } from './checkout/CheckoutSteps';
import { UserDetailsForm } from './checkout/UserDetailsForm';
import { BillingAddressForm } from './checkout/BillingAddressForm';
import { PaymentMethodForm } from './checkout/PaymentMethodForm';
import { OrderSummary } from './checkout/OrderSummary';
import { subscriptionPlans } from '../../data/subscriptionPlans';
import type { CheckoutStep } from './checkout/CheckoutSteps';
import type { BillingCycle } from '../../types/subscription';

export const CheckoutFlow: React.FC = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('details');
  const [billingCycle] = useState<BillingCycle>('monthly');
  
  // Find the selected plan
  const plan = subscriptionPlans.find(p => p.id === planId);
  
  // Redirect if plan not found
  useEffect(() => {
    if (!plan) {
      navigate('/subscription');
    }
  }, [plan, navigate]);

  if (!plan) {
    return null;
  }

  const handleUserDetails = (data: any) => {
    setCurrentStep('billing');
  };

  const handleBillingAddress = (data: any) => {
    setCurrentStep('payment');
  };

  const handlePaymentMethod = (data: any) => {
    setCurrentStep('confirmation');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Complete Your Subscription</h1>
        <p className="mt-2 text-gray-600">
          You're just a few steps away from accessing premium features
        </p>
      </div>

      <CheckoutSteps currentStep={currentStep} />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {currentStep === 'details' && (
            <UserDetailsForm
              onSubmit={handleUserDetails}
              onBack={() => navigate('/subscription')}
            />
          )}
          {currentStep === 'billing' && (
            <BillingAddressForm
              onSubmit={handleBillingAddress}
              onBack={() => setCurrentStep('details')}
            />
          )}
          {currentStep === 'payment' && (
            <PaymentMethodForm
              onSubmit={handlePaymentMethod}
              onBack={() => setCurrentStep('billing')}
            />
          )}
          {currentStep === 'confirmation' && (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank you for your subscription!
              </h2>
              <p className="text-gray-600">
                Your subscription has been processed successfully.
                You will receive a confirmation email shortly.
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <OrderSummary
            plan={plan}
            billingCycle={billingCycle}
          />
        </div>
      </div>
    </div>
  );
};