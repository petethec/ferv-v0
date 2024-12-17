import React from 'react';
import { AdminAction } from '../../types/admin';
import { Clock, FileText, User, MessageSquare } from 'lucide-react';

interface AuditLogTableProps {
  logs: AdminAction[];
}

export const AuditLogTable: React.FC<AuditLogTableProps> = ({ logs }) => {
  const getEntityIcon = (type: string) => {
    switch (type) {
      case 'campaign':
        return FileText;
      case 'user':
        return User;
      case 'comment':
        return MessageSquare;
      default:
        return Clock;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Timestamp
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Target
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Admin
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {logs.map((log) => {
            const Icon = getEntityIcon(log.targetType);
            return (
              <tr key={log.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {log.timestamp.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-blue-100 text-blue-800">
                    {log.action.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <Icon className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="capitalize">{log.targetType} #{log.targetId}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin #{log.adminId}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {log.details}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};