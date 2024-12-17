import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BasicInfoForm,
  StoryForm,
  RewardsForm,
  SettingsForm,
  PreviewForm
} from '../components/create-campaign/forms';
import { UrlImportForm } from '../components/create-campaign/forms/UrlImportForm';
import { StepNumbers } from '../components/create-campaign/steps';
import { steps, type Step } from '../components/create-campaign/steps/types';
import { useFormData } from '../components/create-campaign/hooks/useFormData';
import { importProjectFromUrl } from '../utils/projectImport';
import { generateCampaignTestUrl, validateCampaignUrl } from '../utils/campaign/urlUtils';

export const CreateCampaignPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('basics');
  const { formData, updateFormData } = useFormData();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the preview URL if it exists
    const storedPreviewUrl = sessionStorage.getItem('newCampaignPreview');
    if (storedPreviewUrl && validateCampaignUrl(storedPreviewUrl)) {
      setPreviewUrl(storedPreviewUrl);
      sessionStorage.removeItem('newCampaignPreview');
    }
  }, []);

  const handleImport = async (url: string) => {
    const importedProject = await importProjectFromUrl(url);
    updateFormData('basics', {
      title: importedProject.title || '',
      category: importedProject.category || '',
      goal: importedProject.goal?.toString() || '',
      duration: 30,
      tagline: importedProject.description || '',
      imageUrl: importedProject.imageUrl || ''
    });
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as Step);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as Step);
    }
  };

  const handleSubmit = async () => {
    try {
      // Generate test URL for the new campaign
      const testUrl = generateCampaignTestUrl({
        ...formData.basics,
        id: `campaign-${Date.now()}`,
        currentAmount: 0,
        backers: 0,
        downvotes: 0,
        rewards: formData.rewards,
        updates: [],
        communities: [],
        allowCoFunding: formData.settings.allowCoFunding,
        liveSessions: [],
        feedbackThreads: []
      });

      // Navigate to the test URL
      window.open(testUrl, '_blank');
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to create campaign:', error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'basics':
        return (
          <>
            <UrlImportForm onImport={handleImport} />
            <BasicInfoForm
              data={formData.basics}
              onUpdate={data => updateFormData('basics', data)}
              onNext={handleNext}
            />
          </>
        );
      case 'story':
        return (
          <StoryForm
            data={formData.story}
            onUpdate={data => updateFormData('story', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'rewards':
        return (
          <RewardsForm
            rewards={formData.rewards}
            onUpdate={rewards => updateFormData('rewards', rewards)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'settings':
        return (
          <SettingsForm
            data={formData.settings}
            onUpdate={data => updateFormData('settings', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'preview':
        return (
          <PreviewForm
            data={formData}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        );
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Your Campaign</h1>
        <p className="mt-2 text-gray-600">
          Share your idea with the world and get the funding you need
        </p>
      </div>

      <StepNumbers steps={steps} currentStep={currentStep} />
      
      <div className="mt-8">
        {renderStep()}
      </div>
    </main>
  );
};