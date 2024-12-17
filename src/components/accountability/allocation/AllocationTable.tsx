import React from 'react';
import { DollarSign } from 'lucide-react';

interface Allocation {
  category: string;
  amount: number;
  description: string;
}

interface AllocationTableProps {
  allocations: Allocation[];
}

export const AllocationTable: React.FC<AllocationTableProps> = ({ allocations }) => {
  const total = allocations.reduce((sum, allocation) => sum + allocation.amount, 0);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Percentage
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allocations.map((allocation, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {allocation.category}
                    </div>
                    <div className="text-sm text-gray-500">
                      {allocation.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  ${allocation.amount.toLocaleString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {((allocation.amount / total) * 100).toFixed(1)}%
                </div>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
              Total
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
              ${total.toLocaleString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
              100%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};