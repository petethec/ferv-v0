import React from 'react';
import { FormField } from '../../shared/FormField';
import { categories } from '../../../../data/categories';

interface BasicInfoFieldsProps {
  data: {
    title: string;
    category: string;
    goal: string;
    duration: number;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: string | number) => void;
}

export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({
  data,
  errors,
  onChange
}) => {
  return (
    <>
      <FormField
        label="Campaign Title"
        required
        error={errors.title}
        tooltip="Choose a clear, attention-grabbing title"
      >
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          placeholder="Enter campaign title"
        />
      </FormField>

      <FormField
        label="Category"
        required
        error={errors.category}
        tooltip="Select the most relevant category"
      >
        <select
          value={data.category}
          onChange={(e) => onChange('category', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </FormField>

      <FormField
        label="Funding Goal"
        required
        error={errors.goal}
        tooltip="Set a realistic funding target"
      >
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="number"
            value={data.goal}
            onChange={(e) => onChange('goal', e.target.value)}
            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
            placeholder="Enter amount"
          />
        </div>
      </FormField>

      <FormField
        label="Campaign Duration"
        required
        error={errors.duration}
        tooltip="Choose how long your campaign will run"
      >
        <select
          value={data.duration}
          onChange={(e) => onChange('duration', Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
        >
          <option value={15}>15 days</option>
          <option value={30}>30 days</option>
          <option value={45}>45 days</option>
          <option value={60}>60 days</option>
        </select>
      </FormField>
    </>
  );
};