import React from "react";

const RoomPage = async () => {
  const res = await fetch("http://localhost:5000/room");
  const rooms = await res.json();
  console.log(rooms, "from mongodb data");

  return (
    <div>
      <h1>All Rooms</h1>

      <div>
        {rooms.map((room) => (
          <div key={room._id}>{room.roomName}</div>
        ))}
      </div>
    </div>
  );
};

export default RoomPage;
