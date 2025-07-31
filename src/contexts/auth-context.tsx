"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

interface Admin {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  admin: Admin | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loginMutation = useMutation(api.auth.loginAdmin);

  // Check for existing session on mount
  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      try {
        setAdmin(JSON.parse(storedAdmin));
      } catch (error) {
        localStorage.removeItem("admin");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const adminData = await loginMutation({ email, password });
      setAdmin(adminData);
      localStorage.setItem("admin", JSON.stringify(adminData));
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
