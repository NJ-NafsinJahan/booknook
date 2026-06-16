import React from "react";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import RoomCard from "./RoomCard";

const FeaturedPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const Rooms = await res.json();
  //   console.log(Rooms, "from featured page");
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className=" flex justify-between items-center">
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Featured Study Rooms
          </h1>
          <p className="text-lg  text-gray-400 mb-6">
            Our Featured Study Rooms.
          </p>
        </div>
        <Link href="/rooms">
          <Button
            className=" flex justify-between items-center border border-fuchsia-600 text-md"
            variant="outline"
          >
            {" "}
            All Rooms <FaArrowRightFromBracket />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;
