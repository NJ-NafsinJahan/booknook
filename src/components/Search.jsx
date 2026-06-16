"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const SearchPage = ({
  searchText,
  setSearchText,
  selectedAmenities,
  handleAmenityChange,
  handleReset,
}) => {
  const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  return (
    <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold tracking-wide">Search</h2>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
        >
          <IoMdClose className="text-base" /> Reset
        </button>
      </div>

      {/* name search */}
      <div className="mb-6">
        <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
          Search by name
        </label>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="e.g. Quiet Place"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-[#181E19] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-fuchsia-600 transition"
          />
        </div>
      </div>

      {/* amenities */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-3 uppercase tracking-wider">
          Amenities
        </label>
        <div className="space-y-3">
          {amenitiesList.map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer text-sm font-medium text-gray-300 hover:text-white transition select-none"
            >
              <input
                type="checkbox"
                checked={selectedAmenities.includes(item)}
                onChange={() => handleAmenityChange(item)}
                className="w-4 h-4 rounded-full border-gray-700 bg-transparent text-fuchsia-600 focus:ring-0 cursor-pointer accent-fuchsia-600"
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
