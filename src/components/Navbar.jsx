"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightFromBracket, FaDoorOpen } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { Avatar, Button } from "@heroui/react";
import { Dropdown, Label } from "@heroui/react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // console.log(user, " user From Navbar");
  // console.log(session, " session From Navbar");

  const handleSignOut = async () => {
    await authClient.signOut();
  };

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
        {/* ********** */}
        {user ? (
          <>
            <li>
              <Link href="/" className="hover:text-fuchsia-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-fuchsia-500 transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link
                href="/my-bookings"
                className="hover:text-fuchsia-500 transition"
              >
                My Bookings
              </Link>
            </li>
            <li>
              <Link
                href="/add-room"
                className="hover:text-fuchsia-500 transition"
              >
                Add Room
              </Link>
            </li>
            <li>
              <Link
                href="/my-listings"
                className="hover:text-fuchsia-500 transition"
              >
                My Listings
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/" className="hover:text-fuchsia-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-fuchsia-500 transition">
                Rooms
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Right Side */}
      <ul className="hidden  md:flex items-center gap-5 text-white font-medium">
        {/* <li>
          <Link href="/profile">Profile</Link>
        </li> */}

        {user ? (
          // profile dropdown
          <Dropdown>
            <Dropdown.Trigger className="rounded-full">
              <Avatar>
                <Avatar.Image alt="Junior Garcia" src={user?.image} />
                <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
              </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <div className="px-3 pt-3 pb-1">
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                  </Avatar>
                  <div className="flex flex-col gap-0">
                    <p className="text-sm leading-5 font-medium">
                      {user?.name}
                    </p>
                    <p className="text-xs leading-none text-muted">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <Dropdown.Menu aria-label="User Actions">
                <Dropdown.Item key="my-bookings" textValue="My Bookings">
                  <Link href="/my-bookings" className="w-full block">
                    <Label>My Bookings</Label>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="my-listings" textValue="My Listings">
                  <Link href="/my-listings" className="w-full block">
                    <Label>My Listings</Label>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="logout" textValue="Logout" variant="danger">
                  <div
                    onClick={handleSignOut}
                    className="flex w-full items-center justify-between gap-2"
                  >
                    <Label>Log Out</Label>
                    <FaArrowRightFromBracket className="size-3.5 text-danger" />
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        ) : (
          <>
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
          </>
        )}
      </ul>

      {/* Mobile Button */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#3a2765]  shadow-lg flex flex-col items-start gap-4 p-6 md:hidden z-50">
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

          {/* <Link href="/profile" onClick={() => setOpen(false)}>
            Profile
          </Link> */}

          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt="John Doe"
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleSignOut();
                    setOpen(false);
                  }}
                >
                  LogOut
                </Button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
