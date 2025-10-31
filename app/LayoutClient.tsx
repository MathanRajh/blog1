'use client';

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../context/AuthContext";
import { usePathname } from "next/navigation";
import Header from "../components/header";
import Social from "../components/social";
import Footer from "../components/footer";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname === "/signup";

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthProvider>
        {!hideLayout && <Header />}
        {!hideLayout && <Social />}
        {children}
        {!hideLayout && <Footer />}
      </AuthProvider>
    </ThemeProvider>
  );
}
