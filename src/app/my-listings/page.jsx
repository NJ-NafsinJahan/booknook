import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import RoomCard from "@/components/RoomCard";
import Link from "next/link";

const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  console.log(user, "user data from bookingCard");
  //   console.log(session, "session data from bookingCard");

  if (!user) {
    return (
      <div className="p-6 text-center">
        Please log in to view your listings.
      </div>
    );
  }

  // jwt token cookies
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/room?email=${user.email}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const listings = await res.json();
  console.log(listings, "from my-listings");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        My Listings ({listings.length})
      </h1>

      {listings.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-[#1E103F] border border-fuchsia-900 rounded-2xl p-10 my-10 text-center shadow-lg">
          <div className="text-6xl mb-4 text-fuchsia-500">📅</div>
          <h2 className="text-2xl font-bold text-fuchsia-400 mb-2">
            No Rooms Added Yet
          </h2>
          <p className="text-fuchsia-200/70 max-w-sm mb-6">
            Looks like you haven't added any room.
          </p>

          <Link href="/add-room">
            <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium px-6 py-2 rounded-lg transition">
              Add Rooms
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListingsPage;
