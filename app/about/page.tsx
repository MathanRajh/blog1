import { Instagram, Twitter, Aperture } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-background text-foreground">
      
      {/* Big Title */}
      <h1 className="text-5xl font-bold mb-4">About Me</h1>
      
      {/* Main About Paragraph */}
      <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-6">
        Hi, I’m Mathan, 
        a passionate developer who loves blending creativity with clean, scalable code. 
        I specialize in crafting modern web experiences that feel intuitive, responsive, and elegant.
      </p>

      {/* Small Paragraph */}
      <p className="max-w-xl text-sm text-muted-foreground mb-10">
        Outside of coding, I explore UI/UX design, content creation, and emerging tech that shapes the future of the web.
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-8">
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-all duration-300 hover:scale-110"
        >
          <Instagram className="w-8 h-8" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-all duration-300 hover:scale-110"
        >
          <Twitter className="w-8 h-8" />
        </a>
        <a
          href="https://pinterest.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-all duration-300 hover:scale-110"
        >
          <Aperture className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
