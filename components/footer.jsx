"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Aperture, ArrowUpFromLine } from "lucide-react";
import { NAV_LINKS } from "../lib/constant";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const destinationSection = NAV_LINKS.find(
    (link) => link.name === "Destination"
  );

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer.jpg"
          alt="Footer Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* --- Main footer grid --- */}
      <div
        className="container mx-auto px-6 py-12 
                   grid grid-cols-1 md:grid-cols-3 
                   gap-12 text-center 
                   justify-items-center 
                   items-start border-t border-white/20"
      >
        {/* --- Column 1: Sponsors --- */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-4">Sponsors</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://www.makemytrip.com"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                MakeMyTrip
              </Link>
            </li>
            <li>
              <Link
                href="https://www.nordvpn.com"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                NordVPN
              </Link>
            </li>
            <li>
              <Link
                href="https://www.airalo.com"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                Airalo eSIM
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Column 2: Destinations --- */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-4">Destinations</h3>
          <ul className="space-y-2">
            {destinationSection?.subLinks?.map((dest) => (
              <li key={dest.name}>
                <Link
                  href={dest.href}
                  className="hover:text-gray-300 transition"
                >
                  {dest.name}
                </Link>
              </li>
            )) || <li>No destinations found</li>}
          </ul>
        </div>

        {/* --- Column 3: Socials --- */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center justify-center gap-2 hover:text-gray-300 transition"
              >
                <Instagram /> Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="flex items-center justify-center gap-2 hover:text-gray-300 transition"
              >
                <Twitter /> Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://pinterest.com"
                target="_blank"
                className="flex items-center justify-center gap-2 hover:text-gray-300 transition"
              >
                <Aperture /> Pinterest
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom bar --- */}
      <div className="border-t border-white/20 py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm bg-black/40">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-gray-300 hover:text-white transition"
        >
          <ArrowUpFromLine /> Back to Top
        </button>
        <p className="text-gray-300">
          © {new Date().getFullYear()} TravelX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
