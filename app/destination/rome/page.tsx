"use client";

import { motion } from "framer-motion";
import Hero from "../../../components/dhero";

export default function RomePage() {
  const destinations = [
    {
      name: "Colosseum",
      desc: "A monumental symbol of Rome’s ancient empire and gladiatorial past.",
      img: "/places/colosseum.png",
    },
    {
      name: "Trevi Fountain",
      desc: "An ornate Baroque masterpiece where wishes come true with a coin toss.",
      img: "/places/tervi-fountain.png",
    },
    {
      name: "Vatican City",
      desc: "The spiritual heart of Catholicism, home to St. Peter’s Basilica and the Sistine Chapel.",
      img: "/places/vactican-city.png",
    },
    {
      name: "Pantheon",
      desc: "An architectural marvel that connects the past with the present effortlessly.",
      img: "/places/pantheon.png",
    },
  ];

  return (
    <>
      <Hero title="Rome" image="/place_hero/rome.jpg" />

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7,ease: "easeOut" }}
          viewport={{ once: false}}
        >
          About Rome
        </motion.h2>

        <p className="text-justify text-lg leading-relaxed text-muted-foreground">
          Rome, the Eternal City, is where history, art, and architecture blend
          into a timeless masterpiece. From the grandeur of ancient ruins to the
          charm of cobblestone streets, every corner reveals a story from
          centuries past.
          <br />
          <br />
          Wander through the Colosseum’s arches, toss a coin into the Trevi
          Fountain, or marvel at Michelangelo’s frescoes in the Sistine Chapel.
          Rome’s blend of spirituality, culture, and cuisine makes it a journey
          for both the soul and senses.
          <br />
          <br />
          Whether savoring authentic pasta in Trastevere or watching the sunset
          over the Tiber River, Rome invites travelers to relive the glory of an
          empire that still inspires the world.
        </p>
      </section>

      {/* Divider Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent my-12" />

      {/* Top Destinations Section */}
      <section
        id="top-destinations"
        className="flex flex-col items-center justify-center p-8 bg-background text-foreground"
      >
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7,ease: "easeOut" }}
          viewport={{ once: false}}
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
