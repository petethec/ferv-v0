import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: true, // For demo purposes, normally this would be false by default
  user: null,
  login: async (credentials) => {
    // Implement actual login logic here
    set({ isAuthenticated: true });
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  }
}));