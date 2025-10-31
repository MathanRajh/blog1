'use client';

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Resources() {
  const images = [
    "/clicks/img1.jpg",
    "/clicks/img2.jpg",
    "/clicks/img3.jpg",
    "/clicks/img4.jpg",
    "/clicks/img5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  });

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6 transition-colors duration-300">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-12 mt-10 text-center">
        Top Clicks
      </h1>

      {/* Main Slider */}
      <div className="relative w-full max-w-3xl h-96 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 backdrop-blur-md p-3 rounded-full transition-colors"
        >
          <ArrowLeft className="text-foreground" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-foreground/10 hover:bg-foreground/20 backdrop-blur-md p-3 rounded-full transition-colors"
        >
          <ArrowRight className="text-foreground" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-8">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
              currentIndex === idx
                ? "border-foreground scale-110"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
