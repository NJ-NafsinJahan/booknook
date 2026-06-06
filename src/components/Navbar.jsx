"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full  h-16 px-6 flex items-center justify-between shadow-md bg-white relative z-50">
      {/* Logo Container */}

      <div className="flex items-center h-full">
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          width={200}
          height={80}
          priority
          className="h-auto w-24 sm:w-28 md:w-32 lg:w-36 object-contain drop-shadow-sm"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
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
      <ul className="hidden  md:flex items-center gap-5 text-gray-700 font-medium">
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
