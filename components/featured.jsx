"use client";

import { motion } from "framer-motion";

export default function Featured() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }} // 👈 animates again on scroll up/down
      >
        Featured In
      </motion.h2>

      {/* Logo Section */}
      <div className="flex flex-wrap justify-center items-center gap-16 sm:gap-24">
        <img
          src="/featured/cnn.svg"
          alt="CNN"
          className="w-[160px] h-[80px] opacity-90 hover:opacity-100 
                     transition-transform duration-300 hover:scale-110 
                     filter invert-0 dark:invert brightness-0 dark:brightness-100"
        />
        <img
          src="/featured/newyorktimes.svg"
          alt="New York Times"
          className="w-[180px] h-[90px] opacity-90 hover:opacity-100 
                     transition-transform duration-300 hover:scale-110 
                     filter invert-0 dark:invert brightness-0 dark:brightness-100"
        />
        <img
          src="/featured/udotsdotnews.svg"
          alt="US News"
          className="w-[190px] h-[90px] opacity-90 hover:opacity-100 
                     transition-transform duration-300 hover:scale-110 
                     filter invert-0 dark:invert brightness-0 dark:brightness-100"
        />
        <img
          src="/featured/vimeo.svg"
          alt="Vimeo"
          className="w-[160px] h-[80px] opacity-90 hover:opacity-100 
                     transition-transform duration-300 hover:scale-110 
                     filter invert-0 dark:invert brightness-0 dark:brightness-100"
        />
      </div>
    </section>
  );
}
