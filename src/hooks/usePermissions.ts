import { useContext } from 'react';
import { AdminContext } from '../contexts/AdminContext';
import { Permission } from '../types/admin';

export const usePermissions = () => {
  const { currentAdmin } = useContext(AdminContext);

  const hasPermission = (permission: Permission): boolean => {
    if (!currentAdmin) return false;
    return currentAdmin.permissions.includes(permission);
  };

  const hasAnyPermission = (permissions: Permission[]): boolean => {
    if (!currentAdmin) return false;
    return permissions.some(permission => currentAdmin.permissions.includes(permission));
  };

  const hasAllPermissions = (permissions: Permission[]): boolean => {
    if (!currentAdmin) return false;
    return permissions.every(permission => currentAdmin.permissions.includes(permission));
  };

  return {
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    permissions: currentAdmin?.permissions || []
  };
};