import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { ProjectReport } from '../../types/admin';

interface ReportsTableProps {
  reports: ProjectReport[];
}

export const ReportsTable: React.FC<ReportsTableProps> = ({ reports }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.map((report) => (
            <tr key={report.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900">
                  Project #{report.projectId}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-red-100 text-red-800">
                  {report.type}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-gray-500 line-clamp-2">
                  {report.description}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center text-sm ${
                  report.status === 'pending'
                    ? 'text-yellow-500'
                    : report.status === 'resolved'
                    ? 'text-green-500'
                    : 'text-gray-500'
                }`}>
                  {report.status === 'pending' && <Clock className="w-4 h-4 mr-1" />}
                  {report.status === 'resolved' && <CheckCircle className="w-4 h-4 mr-1" />}
                  {report.status === 'dismissed' && <AlertTriangle className="w-4 h-4 mr-1" />}
                  {report.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {report.createdAt.toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-orange-600 hover:text-orange-900">
                  Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};