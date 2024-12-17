import { useState } from 'react';

interface FormData {
  basics: {
    title: string;
    category: string;
    goal: string;
    duration: number;
    tagline: string;
    imageUrl: string;
  };
  story: {
    description: string;
    risks: string;
    timeline: string;
  };
  rewards: any[];
  settings: {
    allowCoFunding: boolean;
    flexibleFunding: boolean;
    communityEndorsements: boolean;
  };
}

const initialFormData: FormData = {
  basics: {
    title: '',
    category: '',
    goal: '',
    duration: 30,
    tagline: '',
    imageUrl: ''
  },
  story: {
    description: '',
    risks: '',
    timeline: ''
  },
  rewards: [],
  settings: {
    allowCoFunding: false,
    flexibleFunding: false,
    communityEndorsements: true
  }
};

export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = <K extends keyof FormData>(
    section: K,
    data: FormData[K]
  ) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  return {
    formData,
    updateFormData
  };
};