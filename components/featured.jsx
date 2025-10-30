"use client";

export default function Featured() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary transition-colors">
        Featured In
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-16 sm:gap-24">
        {/* Each logo auto-adjusts color via filter */}
        <img
          src="/featured/cnn.svg"
          alt="CNN"
          className="w-[160px] h-[80px] opacity-90 hover:opacity-100 
                     transition-transform duration-300 hover:scale-110 
                     filter invert-0 dark:invert brightness-0 dark:brightness-100"
        />

        <img
          src="/featured/newyorktimes.svg"
          alt="New York Times"
          className="w-[180px] h-[90px] opacity-90 hover:opacity-100 
                     transition-transform duration-300 hover:scale-110 
                     filter invert-0 dark:invert brightness-0 dark:brightness-100"
        />

        <img
          src="/featured/udotsdotnews.svg"
          alt="US News"
          className="w-[190px] h-[90px] opacity-90 hover:opacity-100 
                     transition-transform duration-300 hover:scale-110 
                     filter invert-0 dark:invert brightness-0 dark:brightness-100"
        />

        <img
          src="/featured/vimeo.svg"
          alt="Vimeo"
          className="w-[160px] h-[80px] opacity-90 hover:opacity-100 
                     transition-transform duration-300 hover:scale-110 
                     filter invert-0 dark:invert brightness-0 dark:brightness-100"
        />
      </div>
    </section>
  );
}
