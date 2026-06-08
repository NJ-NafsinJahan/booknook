import Image from "next/image";
import { Button } from "@heroui/react";
import React from "react";
import { BsStack } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import BookingCard from "@/components/BookingCard";

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch(`http://localhost:5000/room/${id}`);
  const room = await res.json();
  //   console.log(room, " from Room details page");

  const {
    _id,
    image,
    roomName,
    floor,
    hourlyRate,
    capacity,
    amenities,
    description,
  } = room;
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
        Room Details
      </h1>

      {/* Room Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#1E103F] shadow-lg rounded-2xl overflow-hidden border border-gray-800">
        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-80">
          <Image src={image} alt={roomName} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <HiUsers className="text-lg" />
              <span>{capacity} People</span>
            </div>

            <div className="text-fuchsia-500 font-bold text-2xl">
              ${hourlyRate}/hr
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            {roomName}
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            <span className=" text-xl font-semibold text-white">
              Overview:{" "}
            </span>
            {description}
          </p>

          <p className="flex items-center gap-2 text-gray-300">
            <BsStack />
            {floor} Floor
          </p>

          {/* Amenities */}
          <div>
            <h3 className=" text-xl font-semibold mb-2 text-white">
              Amenities
            </h3>

            <div className="flex flex-wrap gap-2">
              {amenities?.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className=" gap-5 flex justify-center items-center">
            <EditModal room={room}></EditModal>
            <DeleteAlert room={room}></DeleteAlert>
          </div>
          {/* <Button className="w-full mt-4 py-3  rounded-lg text-white font-medium bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:opacity-80 transition flex justify-center items-center gap-3">
            <FaEdit className="text-lg" /> Edit Details
          </Button> */}
        </div>
      </div>

      {/* Booking Card */}
      <BookingCard room={room}></BookingCard>
    </div>
  );
};

export default RoomDetailsPage;
