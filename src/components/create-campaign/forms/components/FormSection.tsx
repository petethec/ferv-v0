import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FormSectionProps {
  title: string;
  description?: string;
  optional?: boolean;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  optional = false,
  defaultExpanded = true,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">{title}</span>
            {optional && (
              <span className="ml-2 text-sm text-gray-500">(Optional)</span>
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-500 mt-0.5">{description}</p>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="p-4 bg-white">{children}</div>
      )}
    </div>
  );
};