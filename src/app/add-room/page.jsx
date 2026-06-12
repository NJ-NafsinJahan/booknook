"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddRoomPage() {
  const [room, setRoom] = useState({
    roomName: "",
    description: "",
    image: "",
    floor: "",
    capacity: "",
    hourlyRate: "",
    amenities: [],
  });

  const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  // checkbox change
  const handleAmenityChange = (amenity) => {
    setRoom((prev) => {
      const exists = prev.amenities.includes(amenity);

      return {
        ...prev,
        amenities: exists
          ? prev.amenities.filter((a) => a !== amenity)
          : [...prev.amenities, amenity],
      };
    });
  };

  // submit
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(room);

    // verify api
    const { data: tokenData } = await authClient.token();
    // console.log(tokenData);

    const res = await fetch("http://localhost:5000/room", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(room),
    });

    const data = await res.json();
    toast.success("Add Room Successfully");
    redirect("/rooms");
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto m-4 p-6 bg-[#1E103F]  shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Add Room</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Room Name */}
        <input
          type="text"
          name="roomName"
          placeholder="Room Name"
          required
          value={room.roomName}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-800"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          required
          value={room.description}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-800"
        />

        {/* Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={room.image}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-800"
        />

        {/* Floor */}
        <input
          type="text"
          name="floor"
          placeholder="Floor (e.g. 3rd Floor)"
          value={room.floor}
          onChange={handleChange}
          className="w-full p-3 border rounded-md bg-gray-800"
        />

        {/* Capacity + Rate */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            value={room.capacity}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-800"
          />

          <input
            type="number"
            name="hourlyRate"
            placeholder="Hourly Rate ($)"
            value={room.hourlyRate}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-800"
          />
        </div>

        {/* Amenities */}
        <div>
          <p className="font-semibold mb-2">Amenities</p>

          <div className="grid grid-cols-2 gap-2">
            {amenitiesList.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={room.amenities.includes(item)}
                  onChange={() => handleAmenityChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Submit btn*/}
        <button
          type="submit"
          className="w-full py-3  bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white rounded-md hover:opacity-80 transition"
        >
          Submit Room
        </button>
      </form>
    </div>
  );
}
