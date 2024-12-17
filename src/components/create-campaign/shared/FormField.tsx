import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  tooltip?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  required,
  tooltip,
  children
}) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {tooltip && (
          <div className="group relative">
            <HelpCircle className="w-4 h-4 text-gray-400" />
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white text-xs rounded p-2 invisible group-hover:visible z-10">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      {children}
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
};