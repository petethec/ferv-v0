import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    return {
      path,
      label: label
    };
  });

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-900 font-medium">{crumb.label}</span>
            ) : (
              <Link
                to={crumb.path}
                className="text-gray-500 hover:text-gray-700"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};