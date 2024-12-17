import React, { createContext, useState, useEffect } from 'react';
import { AdminUser } from '../types/admin';
import { mockAdminUser } from '../data/mockAdminData';

interface AdminContextType {
  currentAdmin: AdminUser | null;
  setCurrentAdmin: (admin: AdminUser | null) => void;
  loading: boolean;
}

export const AdminContext = createContext<AdminContextType>({
  currentAdmin: null,
  setCurrentAdmin: () => {},
  loading: true
});

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentAdmin, setCurrentAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch the admin user from an API
    // For now, we'll use mock data
    setCurrentAdmin(mockAdminUser);
    setLoading(false);
  }, []);

  return (
    <AdminContext.Provider value={{ currentAdmin, setCurrentAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
};