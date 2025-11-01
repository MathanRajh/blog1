"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          quality={100}
          className="object-cover scale-110 blur-md"
        />
      </div>

      <div className="absolute inset-0 bg-black/30" />

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8">{title}</h1>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="#about"
            className="px-6 py-2 border border-white/40 rounded-full 
                       bg-white/10 hover:bg-white/30 
                       transition-all duration-300"
          >
            About
          </Link>

          <Link
            href="#top-destinations"
            className="px-6 py-2 border border-white/40 rounded-full 
                       bg-white/10 hover:bg-white/30 
                       transition-all duration-300"
          >
            Top Destinations
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
