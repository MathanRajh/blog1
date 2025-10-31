"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { user, loginWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
                    bg-gradient-to-br from-blue-50 via-white to-blue-100 
                    dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
                    transition-colors duration-500">
      
      <div className="relative w-full max-w-md p-10 rounded-3xl
                      bg-white/80 dark:bg-gray-900/60 
                      backdrop-blur-md shadow-2xl border border-gray-200/40 dark:border-gray-700/40 
                      transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/Logo.svg"
            alt="TravelX Logo"
            className="w-16 h-16 drop-shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text font-[var(--font-playfair)]">
          Welcome to TravelX 
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Sign in instantly with your Google account to explore the world.
        </p>

        {/* Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-3
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     text-white shadow-md hover:shadow-lg active:scale-[0.98]
                     transition-all duration-200"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 bg-white rounded-full"
          />
          Continue with Google
        </button>

        {/* Subtle Footer Text */}
        <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-500">
          Secure Google sign-in — no password required.
        </p>

        {/* Decorative background glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
}
