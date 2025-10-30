import Hero from "../../../components/dhero";

export default function ParisPage() {
  const destinations = [
    {
      name: "Eiffel Tower",
      desc: "An icon of romance and architecture, offering breathtaking views of Paris.",
      img: "/places/eiffle-tower.png",
    },
    {
      name: "Louvre Museum",
      desc: "Home to timeless masterpieces like the Mona Lisa and Venus de Milo.",
      img: "/places/lovern-museum.png",
    },
    {
      name: "Luxembourg Gardens",
      desc: "A peaceful escape blending art, fountains, and lush greenery.",
      img: "/places/garden.png",
    },
    {
      name: "Notre-Dame Cathedral",
      desc: "A Gothic marvel showcasing centuries of Parisian history and craftsmanship.",
      img: "/places/cathedral.png",
    },
  ];

  return (
    <>
      <Hero title="Paris" image="/place_hero/paris.jpg" />

      <section id="about" className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">About Paris</h2>
        <p className="text-justify text-lg leading-relaxed text-muted-foreground">
          Paris, the City of Light, stands as the world’s epicenter of art,
          fashion, and culture. From its elegant boulevards and iconic monuments
          to its cozy cafés and romantic charm, Paris enchants every traveler.
          <br />
          <br />
          The city is a living museum where every street tells a story — from
          the Eiffel Tower’s glowing majesty to the art-filled halls of the
          Louvre. Visitors can stroll along the Seine, enjoy French pastries in
          Montmartre, or watch the sunset from the steps of Sacré-Cœur.
          <br />
          <br />
          Whether it’s the allure of its world-class art, haute couture,
          exquisite cuisine, or timeless architecture, Paris captures the heart
          like no other destination in the world.
        </p>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent my-12" />

      <section
        id="top-destinations"
        className="flex flex-col items-center justify-center p-8 bg-background text-foreground"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Most Visited</h2>

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
              <div className="absolute inset-0 bg-black/10 group-hover:brightness-125  transition-all duration-300" />
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
