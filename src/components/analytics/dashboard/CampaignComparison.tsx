import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { CampaignMetrics } from '../../../types/marketing';
import { analyzePerformance } from '../../../utils/marketing/metricCalculations';
import { formatMetricChange } from '../../../utils/marketing/formatters';

interface CampaignComparisonProps {
  metrics: CampaignMetrics[];
}

export const CampaignComparison: React.FC<CampaignComparisonProps> = ({ metrics }) => {
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);

  const handleCampaignSelect = (id: string) => {
    if (selectedCampaigns.includes(id)) {
      setSelectedCampaigns(selectedCampaigns.filter(c => c !== id));
    } else if (selectedCampaigns.length < 2) {
      setSelectedCampaigns([...selectedCampaigns, id]);
    }
  };

  const getComparisonData = () => {
    if (selectedCampaigns.length !== 2) return null;
    
    const [campaign1, campaign2] = selectedCampaigns.map(id => 
      metrics.find(m => m.id === id)!
    );

    const performance1 = analyzePerformance(campaign1.metrics.before, campaign1.metrics.after);
    const performance2 = analyzePerformance(campaign2.metrics.before, campaign2.metrics.after);

    return { campaign1, campaign2, performance1, performance2 };
  };

  const comparisonData = getComparisonData();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Campaign Comparison</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((campaign) => (
          <button
            key={campaign.id}
            onClick={() => handleCampaignSelect(campaign.id)}
            className={`p-4 rounded-lg border text-left transition-colors ${
              selectedCampaigns.includes(campaign.id)
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200 hover:border-orange-200'
            }`}
          >
            <h4 className="font-medium text-gray-900">{campaign.name}</h4>
            <p className="text-sm text-gray-500 mt-1">ID: {campaign.id}</p>
          </button>
        ))}
      </div>

      {comparisonData && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{comparisonData.campaign1.name}</span>
            <ArrowRight className="w-4 h-4" />
            <span>{comparisonData.campaign2.name}</span>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm">
                <p className="text-gray-500">Conversion Rate</p>
                <p className="font-medium text-gray-900 mt-1">
                  {formatMetricChange(
                    comparisonData.performance1.conversionRate.value,
                    comparisonData.performance1.conversionRate.percentage
                  )}
                </p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Click-through Rate</p>
                <p className="font-medium text-gray-900 mt-1">
                  {formatMetricChange(
                    comparisonData.performance1.clickThroughRate.value,
                    comparisonData.performance1.clickThroughRate.percentage
                  )}
                </p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500">ROAS</p>
                <p className="font-medium text-gray-900 mt-1">
                  {formatMetricChange(
                    comparisonData.performance1.returnOnAdSpend.value,
                    comparisonData.performance1.returnOnAdSpend.percentage
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};