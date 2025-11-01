'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Instagram, Twitter, Aperture, Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { NAV_LINKS } from "../lib/constant";
import logo from "../public/Logo.svg";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const handleProfileEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setProfileOpen(true);
  };

  const handleProfileLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setProfileOpen(false), 2000);
  };

  async function handleLogout() {
    try {
      await logout();
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={36} height={36} className="rounded-full" />
          <span className="text-yellow-400 text-lg font-semibold">TravelX</span>
        </Link>

        {/* ---- Desktop Navigation ---- */}
        <nav className="hidden md:flex gap-8 font-medium text-foreground">
          {NAV_LINKS.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              {link.subLinks ? (
                <>
                  <button className="hover:text-blue-400 flex items-center gap-1 transition">
                    {link.name} <ChevronDown size={14} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-44 bg-white/80 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-lg shadow-lg overflow-hidden"
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/20 hover:text-blue-500 transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={link.href} className="hover:text-blue-400 transition">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* ---- Right Side (Desktop) ---- */}
        <div className="hidden md:flex items-center gap-5 text-yellow">
          <Link href="https://instagram.com" target="_blank" className="hover:text-pink-400">
            <Instagram size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-sky-400">
            <Twitter size={20} />
          </Link>
          <Link href="https://pinterest.com" target="_blank" className="hover:text-red-400">
            <Aperture size={20} />
          </Link>

          {/* ---- Profile ---- */}
          {user && (
            <div
              className="relative"
              onMouseEnter={handleProfileEnter}
              onMouseLeave={handleProfileLeave}
            >
              <button onClick={() => setProfileOpen(!profileOpen)}>
                <User className="text-yellow-400 hover:text-blue-400 transition" size={22} />
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-44 bg-white/80 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200 border-b border-gray-300/30 truncate">
                      {user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 transition"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* ---- Mobile Hamburger ---- */}
        <button className="md:hidden text-yellow" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ---- Mobile Menu ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 dark:bg-black/80 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col p-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <>
                      <button
                        className="flex justify-between items-center w-full py-2 text-left text-gray-800 dark:text-gray-200 font-medium"
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.name ? null : link.name)
                        }
                      >
                        {link.name} <ChevronDown size={16} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4"
                          >
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-400 transition"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-400 transition"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {user && (
                <div className="mt-4 border-t border-white/10 pt-3">
                  <div className="text-sm text-gray-800 dark:text-gray-200 mb-2">
                    {user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
