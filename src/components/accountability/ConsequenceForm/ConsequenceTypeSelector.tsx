import React from 'react';
import { AlertCircle, MessageSquare, Scale, Users } from 'lucide-react';
import type { ConsequenceType } from '../../../types/accountability';

interface ConsequenceTypeSelectorProps {
  selectedType: ConsequenceType;
  onTypeSelect: (type: ConsequenceType) => void;
}

export const ConsequenceTypeSelector: React.FC<ConsequenceTypeSelectorProps> = ({
  selectedType,
  onTypeSelect
}) => {
  const types = [
    {
      id: 'donation',
      label: 'Donation',
      description: 'Donate funds to a competitor or charity',
      icon: AlertCircle
    },
    {
      id: 'campaign',
      label: 'Public Campaign',
      description: 'Launch a targeted awareness campaign',
      icon: MessageSquare
    },
    {
      id: 'protest',
      label: 'Peaceful Protest',
      description: 'Organize peaceful demonstrations',
      icon: Users
    },
    {
      id: 'legal',
      label: 'Legal Action',
      description: 'Fund legal proceedings',
      icon: Scale
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {types.map((type) => (
        <button
          key={type.id}
          onClick={() => onTypeSelect(type.id as ConsequenceType)}
          className={`p-4 rounded-lg border text-left transition-colors ${
            selectedType === type.id
              ? 'border-orange-600 bg-orange-50'
              : 'border-gray-200 hover:border-orange-200'
          }`}
        >
          <div className="flex items-start space-x-3">
            <type.icon className={`w-5 h-5 ${
              selectedType === type.id ? 'text-orange-600' : 'text-gray-400'
            }`} />
            <div>
              <h3 className="font-medium text-gray-900">{type.label}</h3>
              <p className="text-sm text-gray-500 mt-1">{type.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};