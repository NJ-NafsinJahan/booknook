"use client";

import RoomCard from "@/components/RoomCard";
import SearchPage from "@/components/Search";
import React, { useState, useEffect } from "react";

const RoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const fetchRooms = async () => {
    try {
      const amenitiesQuery = selectedAmenities.join(",");
      const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/room?search=${searchText}&amenities=${amenitiesQuery}`;

      const res = await fetch(url);
      const data = await res.json();

      console.log(data, "from all rooms");

      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [searchText, selectedAmenities]);

  const handleAmenityChange = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(
        selectedAmenities.filter((item) => item !== amenity),
      );
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleReset = () => {
    setSearchText("");
    setSelectedAmenities([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          All Study Rooms
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Browse the full catalog and find the room that suits you best.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
        {/* search */}
        <div>
          <SearchPage
            searchText={searchText}
            setSearchText={setSearchText}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
            handleReset={handleReset}
          />
        </div>

        {/* all rooms */}
        <div className="lg:col-span-3">
          {rooms.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No study rooms found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <RoomCard key={room._id} room={room} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
