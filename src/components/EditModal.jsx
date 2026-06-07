"use client";

import { useState } from "react";

import { Button, Modal, Surface } from "@heroui/react";
import { FaEdit } from "react-icons/fa";

export function EditModal({ room }) {
  const [formData, setFormData] = useState({
    // _id: room?._id || "",
    roomName: room?.roomName || "",
    description: room?.description || "",
    image: room?.image || "",
    floor: room?.floor || "",
    capacity: room?.capacity || "",
    hourlyRate: room?.hourlyRate || "",
    amenities: room?.amenities || [],
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
    setFormData({ ...formData, [name]: value });
  };

  // checkbox change
  const handleAmenityChange = (amenity) => {
    setFormData((prev) => {
      const exists = prev.amenities.includes(amenity);

      return {
        ...prev,
        amenities: exists
          ? prev.amenities.filter((a) => a !== amenity)
          : [...prev.amenities, amenity],
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "form DAta");

    const res = await fetch(`http://localhost:5000/room/${room?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data, "Updated patch data");

    alert("Room Details Updated!");
  };

  return (
    <Modal>
      <Button className="w-full mt-4 py-3  rounded-lg text-white font-medium bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:opacity-80 transition flex justify-center items-center gap-3">
        <FaEdit className="text-lg" /> Edit Details
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl h-[90vh] overflow-y-auto">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-2xl font-bold">
                Update Room Details
              </Modal.Heading>
            </Modal.Header>
            {/* Form */}
            <Modal.Body className="p-7">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="space-y-4">
                  {/* Room Name */}
                  <input
                    type="text"
                    name="roomName"
                    placeholder="Room Name"
                    required
                    value={formData.roomName}
                    onChange={handleChange}
                    className=" text-base w-full p-3 border rounded-md bg-gray-800"
                  />

                  {/* Description */}
                  <textarea
                    name="description"
                    placeholder="Description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className=" text-base w-full p-3 border rounded-md bg-gray-800"
                  />

                  {/* Image URL */}
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                    className=" text-base w-full p-3 border rounded-md bg-gray-800"
                  />

                  {/* Floor */}
                  <input
                    type="text"
                    name="floor"
                    placeholder="Floor (e.g. 3rd Floor)"
                    value={formData.floor}
                    onChange={handleChange}
                    className="text-base w-full p-3 border rounded-md bg-gray-800"
                  />

                  {/* Capacity + Rate */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="capacity"
                      placeholder="Capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      className="text-base w-full p-3 border rounded-md bg-gray-800"
                    />

                    <input
                      type="number"
                      name="hourlyRate"
                      placeholder="Hourly Rate ($)"
                      value={formData.hourlyRate}
                      onChange={handleChange}
                      className="text-base w-full p-3 border rounded-md bg-gray-800"
                    />
                  </div>

                  {/* Amenities */}
                  <div>
                    <p className="font-semibold text-lg mb-2">Amenities</p>

                    <div className="grid grid-cols-2 gap-2">
                      {amenitiesList.map((item) => (
                        <label
                          key={item}
                          className=" text-base flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            checked={formData.amenities.includes(item)}
                            onChange={() => handleAmenityChange(item)}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>
                  <Modal.Footer>
                    {/* Submit btn*/}
                    <button
                      type="submit"
                      className="w-full py-1  bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white rounded-md hover:opacity-80 transition"
                    >
                      Save
                    </button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
