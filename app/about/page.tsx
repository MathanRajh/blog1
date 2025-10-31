"use client";

import { Instagram, Twitter, Aperture } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-8 bg-background text-foreground">
      
      {/* Animated Heading */}
      <motion.h1
        className="text-6xl font-extrabold mb-6 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h1>

      {/* Main About Paragraph */}
      <p className="max-w-3xl text-2xl text-muted-foreground leading-relaxed mb-8">
        Hi, I’m <span className="font-semibold text-foreground">Mathan</span>, 
        a passionate developer who loves blending creativity with clean, scalable code. 
        I specialize in crafting modern web experiences that feel intuitive, responsive, and elegant.
      </p>

      {/* Small Paragraph */}
      <p className="max-w-xl text-lg text-muted-foreground mb-14">
        Outside of coding, I explore UI/UX design, content creation, and emerging tech 
        that shapes the future of the web.
      </p>

      {/* Animated Social Media Icons (all together) */}
      <motion.div
        className="flex gap-10"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-all duration-300 hover:scale-125"
        >
          <Instagram className="w-10 h-10" />
        </a>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-all duration-300 hover:scale-125"
        >
          <Twitter className="w-10 h-10" />
        </a>

        <a
          href="https://pinterest.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-all duration-300 hover:scale-125"
        >
          <Aperture className="w-10 h-10" />
        </a>
      </motion.div>
    </section>
  );
}
