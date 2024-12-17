import React from 'react';
import { Permission } from '../../types/admin';
import { usePermissions } from '../../hooks/usePermissions';

interface PermissionGuardProps {
  children: React.ReactNode;
  permissions: Permission[];
  requireAll?: boolean;
  fallback?: React.ReactNode;
}

export const PermissionGuard: React.FC<PermissionGuardProps> = ({
  children,
  permissions,
  requireAll = false,
  fallback = null
}) => {
  const { hasAnyPermission, hasAllPermissions } = usePermissions();
  const hasAccess = requireAll ? hasAllPermissions(permissions) : hasAnyPermission(permissions);

  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};