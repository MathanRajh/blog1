import { Instagram, Twitter, Aperture } from "lucide-react";

export default function Social() {
  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-2xl shadow-lg flex flex-col gap-4 z-50">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition-colors"
      >
        <Instagram size={20} />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-400 transition-colors"
      >
        <Twitter size={20} />
      </a>
      <a
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition-colors"
      >
        <Aperture size={20} />
      </a>
    </div>
  );
}
