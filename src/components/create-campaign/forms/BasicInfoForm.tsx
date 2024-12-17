import React from 'react';
import { FormSection } from './components/FormSection';
import { FormField } from './components/FormField';
import { categories } from '../../../data/categories';

interface BasicInfoFormData {
  title: string;
  category: string;
  goal: string;
  duration: number;
  tagline: string;
  imageUrl: string;
}

interface BasicInfoFormProps {
  data: BasicInfoFormData;
  onUpdate: (data: BasicInfoFormData) => void;
  onNext: () => void;
}

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({
  data,
  onUpdate,
  onNext
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormSection 
        title="Essential Details"
        description="Basic information about your campaign"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Campaign Title"
            required
            tooltip="Choose a clear, attention-grabbing title"
          >
            <input
              type="text"
              value={data.title}
              onChange={(e) => onUpdate({ ...data, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
              placeholder="Enter campaign title"
            />
          </FormField>

          <FormField
            label="Category"
            required
            tooltip="Select the most relevant category"
          >
            <select
              value={data.category}
              onChange={(e) => onUpdate({ ...data, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <FormField
            label="Funding Goal"
            required
            tooltip="Set a realistic funding target"
          >
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={data.goal}
                onChange={(e) => onUpdate({ ...data, goal: e.target.value })}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
                placeholder="Enter amount"
              />
            </div>
          </FormField>

          <FormField
            label="Campaign Duration"
            required
            tooltip="Choose how long your campaign will run"
          >
            <select
              value={data.duration}
              onChange={(e) => onUpdate({ ...data, duration: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
            >
              <option value={15}>15 days</option>
              <option value={30}>30 days</option>
              <option value={45}>45 days</option>
              <option value={60}>60 days</option>
            </select>
          </FormField>
        </div>
      </FormSection>

      <FormSection
        title="Campaign Media"
        description="Add visual elements to your campaign"
      >
        <FormField
          label="Campaign Image"
          required
          tooltip="Add a compelling main image for your campaign"
        >
          <input
            type="url"
            value={data.imageUrl}
            onChange={(e) => onUpdate({ ...data, imageUrl: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
            placeholder="Enter image URL"
          />
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              alt="Preview"
              className="mt-2 w-full h-48 object-cover rounded-md"
            />
          )}
        </FormField>
      </FormSection>

      <FormSection
        title="Campaign Summary"
        description="Provide a brief overview"
      >
        <FormField
          label="Tagline"
          required
          tooltip="Write a compelling one-liner that describes your campaign"
        >
          <textarea
            value={data.tagline}
            onChange={(e) => onUpdate({ ...data, tagline: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
            rows={2}
            placeholder="Enter a brief description"
          />
        </FormField>
      </FormSection>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
        >
          Continue
        </button>
      </div>
    </form>
  );
};