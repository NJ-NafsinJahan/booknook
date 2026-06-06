import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BsPeople, BsStack } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { PiCurrencyDollarBold } from "react-icons/pi";

const RoomCard = ({ room }) => {
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
    <div className="w-full max-w-sm mx-auto bg-[#1E103F] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-800 ">
      {/* Image */}
      <div className="relative w-full h-48 sm:h-52 md:h-56">
        <Image src={image} alt={roomName} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <HiUsers className="text-lg" />
            <span>{capacity} People</span>
          </div>

          <div className="flex items-center justify-center gap-1 text-gray-300 text-sm">
            {/* <PiCurrencyDollarBold className="text-2xl" />{" "} */}
            <p className="text-2xl font-bold text-fuchsia-500">$</p>
            <span className="text-fuchsia-500 text-2xl font-extrabold">
              {hourlyRate}/hr
            </span>
          </div>
        </div>

        <h1 className="text-lg md:text-xl font-semibold text-white ">
          {roomName}
        </h1>

        <p className="text-sm text-gray-500">
          {" "}
          <span className="text-lg font-bold"> Overview : </span>
          {description.length > 50
            ? description.slice(0, 50) + " . . . ."
            : description}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <BsStack />
          {floor} Floor
        </p>

        {/* amenities */}
        <div className="flex flex-wrap gap-2 items-center">
          {amenities?.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border"
            >
              {item}
            </span>
          ))}

          {amenities?.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 border">
              +{amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Button */}
        <button className="w-full mt-3 py-2.5 rounded-lg text-white font-medium bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:opacity-90 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
