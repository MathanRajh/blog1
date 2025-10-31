"use client";

import { motion } from "framer-motion";
import Hero from "../../../components/dhero";

export default function NairobiPage() {
  const destinations = [
    {
      name: "Nairobi National Park",
      desc: "A unique wildlife park just minutes from the city center.",
      img: "/places/nairobinationalpark.png",
    },
    {
      name: "Karen Blixen Museum",
      desc: "The historic home of the famous 'Out of Africa' author.",
      img: "/places/museum.png",
    },
    {
      name: "Giraffe Centre",
      desc: "Get up close and feed endangered Rothschild giraffes.",
      img: "/places/giraffecenter.png",
    },
    {
      name: "David Sheldrick Wildlife Trust",
      desc: "A heartwarming sanctuary for orphaned baby elephants.",
      img: "/places/Wildlife-Trust.png",
    },
  ];

  return (
    <>
      <Hero title="Nairobi" image="/place_hero/nairobi.jpg" />

      {/* --- About Section --- */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-3xl font-bold mb-6"
        >
          About Nairobi
        </motion.h2>

        <p className="text-justify text-lg leading-relaxed text-muted-foreground">
          Nairobi, the vibrant capital of Kenya, is a city where modern urban
          energy meets wild African beauty. Known as the “Green City in the Sun,”
          Nairobi blends skyscrapers, rich cultural heritage, and lush
          landscapes into a one-of-a-kind travel experience.
          <br />
          <br />
          The city is home to the world’s only wildlife park within a capital —
          the Nairobi National Park — where lions, giraffes, and rhinos roam
          freely against a backdrop of city buildings. Visitors can explore the
          city’s thriving art scene, local markets, and diverse cuisines that
          reflect Kenya’s multicultural identity.
          <br />
          <br />
          Whether you’re feeding giraffes at the Giraffe Centre, exploring the
          colonial charm of the Karen Blixen Museum, or relaxing in the serene
          Karura Forest, Nairobi offers travelers a perfect mix of adventure,
          history, and authentic African hospitality. It’s more than a stopover —
          it’s a destination full of life and soul.
        </p>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent my-12" />

      {/* --- Top Destinations Section --- */}
      <section
        id="top-destinations"
        className="flex flex-col items-center justify-center p-8 bg-background text-foreground"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false}}
          className="text-3xl font-bold mb-10 text-center"
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
