"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Resources() {
  const images = [
    "/clicks/img1.jpg",
    "/clicks/img2.jpg",
    "/clicks/img3.jpg",
    "/clicks/img4.jpg",
    "/clicks/img5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6 transition-colors duration-300">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold mb-12 mt-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Top Clicks
      </motion.h1>

      {/* Manual Slider */}
      <div className="relative w-full max-w-3xl h-96 rounded-2xl overflow-hidden shadow-lg">
        <AnimatePresence custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            custom={direction}
            className="absolute w-full h-full object-cover rounded-2xl"
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 backdrop-blur-md p-3 rounded-full transition-colors"
        >
          <ArrowLeft className="text-foreground" />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 backdrop-blur-md p-3 rounded-full transition-colors"
        >
          <ArrowRight className="text-foreground" />
        </button>
      </div>

      {/* Thumbnails*/}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
              currentIndex === idx
                ? "border-foreground scale-110"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
