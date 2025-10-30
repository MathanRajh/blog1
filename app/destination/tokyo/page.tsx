import Hero from "../../../components/dhero";

export default function TokyoPage() {
  const destinations = [
    {
      name: "Shibuya Crossing",
      desc: "The world’s busiest intersection, alive with neon lights and energy.",
      img: "/places/shibuya-crossing.png",
    },
    {
      name: "Senso-ji Temple",
      desc: "Tokyo’s oldest temple, blending spiritual heritage with vibrant culture.",
      img: "/places/temple.png",
    },
    {
      name: "Tokyo Skytree",
      desc: "An engineering marvel offering sweeping views of the city skyline.",
      img: "/places/skytree.png",
    },
    {
      name: "Ueno Park",
      desc: "A cultural hub with museums, cherry blossoms, and tranquil gardens.",
      img: "/places/ueno-park.png",
    },
  ];

  return (
    <>
      <Hero title="Tokyo" image="/place_hero/tokyo.jpg" />

      <section id="about" className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">About Tokyo</h2>
        <p className="text-justify text-lg leading-relaxed text-muted-foreground">
          A perfect blend of tradition and innovation, Tokyo captivates
          travelers with its dazzling skyline, cuisine, and rich culture. From
          ancient temples to futuristic skyscrapers, the city balances harmony
          and progress like no other.
          <br />
          <br />
          Wander through Shibuya’s vibrant streets, shop in Ginza’s luxury
          boutiques, or find peace at the Meiji Shrine surrounded by towering
          trees. Every district has its own rhythm, making Tokyo endlessly
          fascinating.
          <br />
          <br />
          Whether savoring sushi at Tsukiji, admiring cherry blossoms in Ueno
          Park, or viewing Mount Fuji from the Skytree, Tokyo offers an
          unforgettable journey through the heart of modern Japan.
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
