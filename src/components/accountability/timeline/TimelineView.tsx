import React from 'react';
import { Check, Clock } from 'lucide-react';
import { useConsequenceTimeline } from '../hooks/useConsequenceTimeline';
import type { Consequence } from '../../../types/accountability';

interface TimelineViewProps {
  consequence: Consequence;
  className?: string;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  consequence,
  className = ''
}) => {
  const { timelineEvents } = useConsequenceTimeline(consequence);

  return (
    <div className={`space-y-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900">Execution Timeline</h3>

      <div className="relative">
        <div className="absolute top-0 left-4 h-full w-px bg-gray-200" />

        {timelineEvents.map((event, index) => (
          <div key={index} className="relative pl-10 pb-8 last:pb-0">
            <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${
              event.status === 'completed'
                ? 'bg-green-100'
                : event.status === 'active'
                ? 'bg-orange-100'
                : 'bg-gray-100'
            }`}>
              {event.status === 'completed' ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Clock className="w-4 h-4 text-gray-400" />
              )}
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  event.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : event.status === 'active'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </div>
              
              <p className="mt-1 text-sm text-gray-600">{event.description}</p>
              <div className="mt-2 text-sm text-gray-500">
                {event.date.toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};