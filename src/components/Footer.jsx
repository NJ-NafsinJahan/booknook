import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1E103F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Project Title */}
          <div>
            <h2 className="text-3xl font-bold">BooKnooK</h2>

            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              Discover cozy stays, beautiful rooms, and memorable experiences
              with BooKnooK.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-fuchsia-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="hover:text-fuchsia-500 transition"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link href="" className="hover:text-fuchsia-500 transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-gray-300 text-sm">
              <p>Email: hello@booknook.com</p>
              <p>Phone: +880 1234-567890</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF4D6D] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF4D6D] transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF4D6D] transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF4D6D] transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2026 BooKnooK. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
