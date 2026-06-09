"use client";

import { Modal, Separator } from "@heroui/react";
import React from "react";
import { DateField, Label, TimeField, Description } from "@heroui/react";
import { useState } from "react";

import { Button, Card } from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineBookmarkAdd, MdOutlineBookmarks } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const BookingCard = ({ room }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user, "booking card");

  console.log(room);
  const { _id, roomName, hourlyRate, image } = room;

  const [date, setDate] = useState(null);
  console.log(new Date(date), "setDate");

  // Total
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const calculateTotalPrice = () => {
    if (!startTime || !endTime) return hourlyRate;

    const startHour = startTime.hour;
    const endHour = endTime.hour;

    const totalHours = endHour - startHour;
    console.log(totalHours, "total hours");

    if (totalHours <= 0) return 0;
    const totalCost = totalHours * hourlyRate;

    console.log(totalCost, "total price");

    return totalCost;
  };

  //   Confirm Booking
  const handleConfirmBooking = async () => {
    // if (!user) return;
    if (!user) {
      return <p>Loading user...</p>;
    }
    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      userEmail: user?.email,
      roomId: _id,
      roomName,
      image,
      date: new Date(date),
      totalCost: calculateTotalPrice(),
    };
    console.log(bookingData, "Booking data");

    // API call
    const res = await fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    console.log(data);
    if (data) {
      toast.success("Room booked successfully !");
      //   redirect("/");
    }
    if (error) {
      toast.error(error.message || "Booking failed");
    }
  };
  //   if (!user) return;
  if (!user) {
    return <p>Loading user...</p>;
  }

  return (
    <Card className="rounded-r-lg">
      <Modal>
        <div className=" flex justify-between gap-6 items-center">
          <p className="text-[16px] font-mono text-fuchsia-600 italic">
            "It's a great place to study and have discussions quietly"
          </p>
          <Button className="w-md  rounded-lg text-white text-lg font-medium bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:opacity-80 transition flex justify-center items-center gap-3">
            <MdOutlineBookmarks className="text-2xl" />
            Book Now
          </Button>
        </div>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-90">
              <Modal.CloseTrigger />
              {/* Head */}
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <MdOutlineBookmarkAdd className="size-5" />
                </Modal.Icon>
                <Modal.Heading className=" text-2xl text-fuchsia-600 font-bold">
                  {roomName}
                </Modal.Heading>
              </Modal.Header>

              {/* Body */}
              <Modal.Body>
                <div className="  p-3 mb-3">
                  <p className="">
                    Booking run on hour. Pick a date & time slot.{" "}
                  </p>

                  {/* date field */}
                  <DateField
                    onChange={setDate}
                    className="w-[256px] mt-2 mb-2"
                    name="date"
                  >
                    <Label className="text-lg">Date</Label>
                    <DateField.Group>
                      <DateField.Input className={"bg-[#3b3a3b]"}>
                        {(segment) => <DateField.Segment segment={segment} />}
                      </DateField.Input>
                    </DateField.Group>
                  </DateField>

                  {/* Time */}

                  <div className="flex  gap-4">
                    <TimeField
                      className="w-[256px] mt-2 mb-4"
                      name="time"
                      value={startTime}
                      onChange={setStartTime}
                    >
                      <Label className="text-lg">Start time</Label>
                      <TimeField.Group>
                        <TimeField.Input className={"bg-[#3b3a3b]"}>
                          {(segment) => <TimeField.Segment segment={segment} />}
                        </TimeField.Input>
                      </TimeField.Group>
                      <Description>Enter the start time</Description>
                    </TimeField>
                    <TimeField
                      className="w-[256px]  mt-2 mb-4"
                      name="end-time"
                      value={endTime}
                      onChange={setEndTime}
                    >
                      <Label className="text-lg">End time</Label>
                      <TimeField.Group>
                        <TimeField.Input className={"bg-[#3b3a3b]"}>
                          {(segment) => <TimeField.Segment segment={segment} />}
                        </TimeField.Input>
                      </TimeField.Group>
                      <Description>Enter the end time</Description>
                    </TimeField>
                  </div>

                  {/* Price */}
                  <Separator></Separator>
                  <p className="text-lg text-white mt-3">
                    Total Cost:{" "}
                    <span className="text-2xl text-fuchsia-600">
                      $ {calculateTotalPrice()}
                    </span>
                  </p>
                </div>
              </Modal.Body>

              {/* footer */}
              <Modal.Footer>
                <Button
                  onClick={handleConfirmBooking}
                  className="w-full bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:opacity-80 transition text-lg"
                  slot="close"
                >
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </Card>
  );
};

export default BookingCard;
