import Image from "next/image";
import bg from "../public/Gemini_Generated_Image_9gdq7y9gdq7y9gdq.png";

export default function Hero() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden ">
        {/* Background Image */}
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover object-center blur-sm brightness-50"
          priority
        />

        {/* Overlay Text */}
        <div className="relative z-10 text-center">
          <h1
            className="text-5xl md:text-7xl font-extrabold 
             bg-clip-text text-transparent 
             bg-gradient-to-r from-blue-300 via-pink-400 to-purple-500
             drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]
             tracking-wide
             leading-[1.2] pb-2"
          >
            Welcome to My Blog
          </h1>
          <p className="mt-4 text-lg text-white/80 font-light backdrop-blur-sm">
            Stories, travel, and inspiration — all in one place ✨
          </p>
        </div>
      </section>
    </>
  );
}
