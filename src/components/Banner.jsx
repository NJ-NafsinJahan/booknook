import Link from "next/link";
// import bannerImg from "/assets/banner4.png";

export default function Banner() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(/assets/banner4.png)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        {/* Small Heading */}
        <p className="uppercase tracking-[6px] text-sm md:text-base text-gray-300 mb-5">
          Quiet • Comfortable • Productive
        </p>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Find Your Perfect <br />
          <span className="bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600  bg-clip-text text-transparent">
            Study Room
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          Browse and book quiet, private study rooms in your library. List your
          own room and earn while helping students find the perfect place to
          focus.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/rooms"
            className="px-8 py-4 rounded-full bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600  text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Explore Rooms
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
