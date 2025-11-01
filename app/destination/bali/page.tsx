'use client';

import { motion } from "framer-motion";
import Hero from "../../../components/dhero";

export default function BaliPage() {
  const destinations = [
    {
      name: "Ubud",
      desc: "A serene escape surrounded by rice terraces, art, and spirituality.",
      img: "/places/ubud.png",
    },
    {
      name: "Seminyak",
      desc: "Chic beaches, fine dining, and vibrant nightlife await you here.",
      img: "/places/seminyak.png",
    },
    {
      name: "Uluwatu",
      desc: "Clifftop temples, golden sunsets, and world-class surf breaks.",
      img: "/places/uluwatu.png",
    },
    {
      name: "Nusa Penida",
      desc: "A wild paradise of blue waters, cliffs, and hidden beaches.",
      img: "/places/nusapenida.png",
    },
  ];

  return (
    <>
      <Hero title="Bali" image="/place_hero/bali.jpg" />

      {/* --- About Section --- */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          About Bali
        </motion.h2>

        <p className="text-justify text-lg leading-relaxed text-muted-foreground">
          Bali, often called the “Island of the Gods,” is one of Indonesia’s
          most famous destinations, known for its stunning beaches, vibrant
          culture, and serene landscapes. The island’s lush jungles, ancient
          temples, and welcoming people make it a paradise for travelers from
          around the world.
          <br />
          <br />
          From the peaceful rice terraces of Ubud to the lively beach clubs of
          Seminyak, Bali offers something for every type of traveler. Whether
          you’re looking to surf the waves at Canggu, enjoy a yoga retreat, or
          explore traditional art and dance, Bali delivers a perfect blend of
          adventure, relaxation, and spirituality.
          <br />
          <br />
          The island blends breathtaking beaches, lush rice terraces, ancient
          temples, and lively arts. Visitors come to experience its surf-friendly
          waves, colorful ceremonies, and warm hospitality. Beyond the beaches,
          Bali offers tranquil villages, yoga retreats, waterfalls hidden in
          jungles, and a thriving food scene that fuses traditional Balinese
          flavors with modern cuisine.
        </p>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent my-12" />

      <section
        id="top-destinations"
        className="flex flex-col items-center justify-center p-8 bg-background text-foreground"
      >
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Most Visited
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${dest.img})` }}
              />

    
              <div className="absolute inset-0 bg-black/10 group-hover:brightness-125 transition-all duration-300" />

              <div className="absolute bottom-0 p-6 text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-sm opacity-90">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
