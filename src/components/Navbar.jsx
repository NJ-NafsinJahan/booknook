"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaDoorOpen } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1E103F]  h-16 px-6 flex items-center justify-between shadow-md relative z-50">
      {/* Logo Container */}

      <div className="flex items-center h-full">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600  rounded-xl group-hover:rotate-12 transition-transform">
              {/* <MapPinHouse className="w-6 h-6 font-bold text-white " /> */}
              <FaDoorOpen className="w-6 h-6 font-bold text-white " />
            </div>
            <span className="font-extrabold text-2xl bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600  bg-clip-text text-transparent">
              BooKnooK
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-white font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/rooms">Rooms</Link>
        </li>
        <li>
          <Link href="/my-bookings">My Bookings</Link>
        </li>
        <li>
          <Link href="/add-room">Add Room</Link>
        </li>
        <li>
          <Link href="/my-listings">My Listings</Link>
        </li>
      </ul>

      {/* Right Side */}
      <ul className="hidden  md:flex items-center gap-5 text-white font-medium">
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link
            href="/register"
            className="px-4 py-2 bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600  text-white rounded-lg hover:opacity-90"
          >
            Register
          </Link>
        </li>
      </ul>

      {/* Mobile Button */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start gap-4 p-6 md:hidden z-50">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/rooms" onClick={() => setOpen(false)}>
            Rooms
          </Link>
          <Link href="/my-bookings" onClick={() => setOpen(false)}>
            My Bookings
          </Link>
          <Link href="/add-room" onClick={() => setOpen(false)}>
            Add Room
          </Link>
          <Link href="/my-listings" onClick={() => setOpen(false)}>
            My Listings
          </Link>

          <hr className="w-full" />

          <Link href="/profile" onClick={() => setOpen(false)}>
            Profile
          </Link>
          <Link href="/login" onClick={() => setOpen(false)}>
            Login
          </Link>

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-lg inline-block w-full text-center"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
