import RoomCard from "@/components/RoomCard";
import React from "react";

const RoomPage = async () => {
  const res = await fetch("http://localhost:5000/room");
  const rooms = await res.json();
  console.log(rooms, "from mongodb data");

  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        All Study Rooms
      </h1>
      <p className="text-lg  text-gray-400 mb-6">
        Browse the full catalog and find the room that suits you best.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomPage;
