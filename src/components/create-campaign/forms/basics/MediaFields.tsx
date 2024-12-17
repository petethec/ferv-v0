import React from 'react';
import { FormField } from '../../shared/FormField';

interface MediaFieldsProps {
  data: {
    imageUrl: string;
    tagline: string;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export const MediaFields: React.FC<MediaFieldsProps> = ({
  data,
  errors,
  onChange
}) => {
  return (
    <>
      <FormField
        label="Campaign Image"
        required
        error={errors.imageUrl}
        tooltip="Add a compelling main image for your campaign"
      >
        <input
          type="url"
          value={data.imageUrl}
          onChange={(e) => onChange('imageUrl', e.target.value)}
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

      <FormField
        label="Tagline"
        required
        error={errors.tagline}
        tooltip="Write a compelling one-liner that describes your campaign"
      >
        <textarea
          value={data.tagline}
          onChange={(e) => onChange('tagline', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500"
          rows={2}
          placeholder="Enter a brief description"
        />
      </FormField>
    </>
  );
};