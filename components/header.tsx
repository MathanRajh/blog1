"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Aperture, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { NAV_LINKS } from "../lib/constant";
import logo from "../public/Logo.svg";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 250);
  };

  const handleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={36} height={36} className="rounded-full" />
          <span className="text-yellow-400 text-lg font-semibold">TravelX</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-foreground">
          {NAV_LINKS.map((link) => (
            <div
              key={link.name}
              className="relative group dropdown"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              {link.subLinks ? (
                <>
                  <button className="hover:text-blue-400 transition-colors flex items-center gap-1">
                    {link.name} <ChevronDown size={14} />
                  </button>

                  {openDropdown === link.name && (
                    <div
                      className="
                        absolute left-0 mt-2 w-40 
                        bg-white/70 dark:bg-black/50 
                        backdrop-blur-md border border-black/10 dark:border-white/20 
                        rounded-lg shadow-lg overflow-hidden 
                        transition-all duration-200
                      "
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="
                            block px-4 py-2 
                            text-gray-800 dark:text-white 
                            hover:bg-black/10 dark:hover:bg-white/20 
                            hover:text-blue-500 
                            transition-colors
                          "
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href} className="hover:text-blue-400 transition-colors">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-yellow"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Right Socials */}
        <div className="hidden md:flex gap-4 text-yellow">
          <Link href="https://instagram.com" target="_blank" className="hover:text-pink-400">
            <Instagram size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-sky-400">
            <Twitter size={20} />
          </Link>
          <Link href="https://pinterest.com" target="_blank" className="hover:text-red-400">
            <Aperture size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/70 dark:bg-black/60 backdrop-blur-md shadow-md px-6 py-4">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="border-b border-gray-300/20 py-2">
              {link.subLinks ? (
                <>
                  <button
                    className="w-full flex justify-between items-center text-left font-medium text-gray-800 dark:text-gray-100"
                    onClick={() => handleMobileDropdown(link.name)}
                  >
                    {link.name}
                    <ChevronDown
                      className={`transform transition-transform ${
                        mobileDropdown === link.name ? "rotate-180" : ""
                      }`}
                      size={16}
                    />
                  </button>

                  {mobileDropdown === link.name && (
                    <div className="mt-2 ml-4 flex flex-col gap-1">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block text-gray-800 dark:text-gray-100 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
