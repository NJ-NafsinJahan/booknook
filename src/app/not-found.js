import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-fuchsia-600 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white rounded-xl shadow-md hover:opacity-90 transition duration-300"
        >
          Go Back Home
        </Link>

        {/* Small animation dot */}
        <div className="mt-10 flex justify-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
