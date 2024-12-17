import React from 'react';
import { categories } from '../../data/categories';

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Campaign Title
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onUpdate({ ...data, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Give your campaign a clear, attention-grabbing title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={data.category}
          onChange={(e) => onUpdate({ ...data, category: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Funding Goal ($)
        </label>
        <input
          type="number"
          min="1"
          value={data.goal}
          onChange={(e) => onUpdate({ ...data, goal: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="How much do you need to raise?"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Campaign Duration (days)
        </label>
        <select
          value={data.duration}
          onChange={(e) => onUpdate({ ...data, duration: Number(e.target.value) })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="15">15 days</option>
          <option value="30">30 days</option>
          <option value="45">45 days</option>
          <option value="60">60 days</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Short Description
        </label>
        <textarea
          value={data.tagline}
          onChange={(e) => onUpdate({ ...data, tagline: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={2}
          placeholder="Write a compelling one-liner that describes your campaign"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Campaign Image URL
        </label>
        <input
          type="url"
          value={data.imageUrl}
          onChange={(e) => onUpdate({ ...data, imageUrl: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter the URL of your campaign's main image"
          required
        />
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt="Campaign preview"
            className="mt-2 w-full h-48 object-cover rounded-md"
          />
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};