'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthChange, loginWithGoogle as firebaseLoginWithGoogle, logout as firebaseLogout } from "../lib/auth";
import { User } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);

      const isAuthPage = pathname === "/login" || pathname === "/signup";

      // ✅ If not logged in → only allow login/signup pages
      if (!firebaseUser && !isAuthPage) {
        router.replace("/login");
      }

      // ✅ If logged in → prevent access to login/signup
      if (firebaseUser && isAuthPage) {
        router.replace("/");
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  const loginWithGoogle = async () => {
    await firebaseLoginWithGoogle();
  };

  const logout = async () => {
    await firebaseLogout();
    setUser(null);
    router.replace("/login");
  };

  // ✅ Show loading screen while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  if (!user && !isAuthPage) {
    return null; // Blocks rendering Home etc.
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
