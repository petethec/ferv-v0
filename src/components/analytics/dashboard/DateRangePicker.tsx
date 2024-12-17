import React from 'react';
import { Calendar } from 'lucide-react';

interface DateRangePickerProps {
  value: [Date, Date];
  onChange: (range: [Date, Date]) => void;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <Calendar className="w-5 h-5 text-gray-400" />
        <input
          type="date"
          value={value[0].toISOString().split('T')[0]}
          onChange={(e) => onChange([new Date(e.target.value), value[1]])}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <span className="text-gray-500">to</span>
        <input
          type="date"
          value={value[1].toISOString().split('T')[0]}
          onChange={(e) => onChange([value[0], new Date(e.target.value)])}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>
  );
};