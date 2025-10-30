"use client";

import Link from "next/link";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center p-8 bg-background text-foreground">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-8">
        Top <span className="text-primary">Destinations</span>
      </h2>

      {/* Destination Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Paris */}
        <Link
          href="/destination/paris"
          className="w-60 bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
        >
          <img
            src="/places/paris.png"
            alt="Paris"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold font-serif text-lg text-card-foreground">Paris</h3>
          </div>
        </Link>

        {/* Tokyo */}
        <Link
          href="/destination/tokyo"
          className="w-60 bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
        >
          <img
            src="/places/tokyo.png"
            alt="Tokyo"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold font-serif text-lg text-card-foreground">Tokyo</h3>
          </div>
        </Link>

        {/* Rome */}
        <Link
          href="/destination/rome"
          className="w-60 bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
        >
          <img
            src="/places/rome.png"
            alt="Rome"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold font-serif text-lg text-card-foreground">Rome</h3>
          </div>
        </Link>

        {/* Nairobi */}
        <Link
          href="/destination/nairobi"
          className="w-60 bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
        >
          <img
            src="/places/nairobi.png"
            alt="Nairobi"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold font-serif text-lg text-card-foreground">Nairobi</h3>
          </div>
        </Link>

        {/* Bali */}
        <Link
          href="/destination/bali"
          className="w-60 bg-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
        >
          <img
            src="/places/bali.png"
            alt="Bali"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold font-serif text-lg text-card-foreground">Bali</h3>
          </div>
        </Link>
      </div>
    </main>
  );
}
