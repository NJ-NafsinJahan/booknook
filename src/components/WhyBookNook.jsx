import React from "react";

const WhyBookNook = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Why Choose BookNook?
        </h1>

        <p className="text-center text-gray-400 mb-12">
          A smarter way to find, book, and manage rooms with ease.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-pink-500 transition">
            <h2 className="text-xl font-semibold mb-2">Easy Booking</h2>
            <p className="text-gray-400">
              Book rooms in just a few clicks with a simple and clean interface.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-fuchsia-500 transition">
            <h2 className="text-xl font-semibold mb-2">Verified Listings</h2>
            <p className="text-gray-400">
              All rooms are verified to ensure safety, accuracy, and trust.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition">
            <h2 className="text-xl font-semibold mb-2">Affordable Pricing</h2>
            <p className="text-gray-400">
              Get the best deals on rooms without any hidden charges.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-pink-500 transition">
            <h2 className="text-xl font-semibold mb-2">User Friendly</h2>
            <p className="text-gray-400">
              Smooth experience designed for both mobile and desktop users.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-fuchsia-500 transition">
            <h2 className="text-xl font-semibold mb-2">Fast Performance</h2>
            <p className="text-gray-400">
              Lightning fast loading with optimized Next.js architecture.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition">
            <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
            <p className="text-gray-400">
              We are always here to help you with your booking needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBookNook;
