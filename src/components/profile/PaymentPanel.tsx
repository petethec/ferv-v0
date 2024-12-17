import React from 'react';
import { CreditCard, Plus, Trash2 } from 'lucide-react';

export const PaymentPanel: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Methods</h3>
        <div className="space-y-4">
          {/* Example payment method */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
            </div>
            <button className="text-red-600 hover:text-red-700">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <button className="w-full flex items-center justify-center px-4 py-4 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-orange-300 hover:text-orange-600">
            <Plus className="w-5 h-5 mr-2" />
            Add Payment Method
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Billing History</h3>
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[
                { date: '2024-03-01', description: 'Monthly Subscription', amount: '$24.99', status: 'Paid' },
                { date: '2024-02-01', description: 'Monthly Subscription', amount: '$24.99', status: 'Paid' },
                { date: '2024-01-01', description: 'Monthly Subscription', amount: '$24.99', status: 'Paid' }
              ].map((payment, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">{payment.date}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{payment.description}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{payment.amount}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};