import { BookingCancelAlert } from "@/components/BookingCancelAlart";
import { auth } from "@/lib/auth";
import { Button, Separator } from "@heroui/react";
import { Badge } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  //   console.log(user, "user data from bookingCard");
  //   console.log(session, "session data from bookingCard");

  // jwt token cookies
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookings = await res.json();
  console.log(bookings, "data from booking card");

  return (
    <div className="max-w-5xl mx-auto px-4  mt-5 mb-7 ">
      <div className=" flex justify-between items-center">
        <div className="">
          <h1 className="text-3xl font-semibold text-fuchsia-600  pt-5">
            My Bookings
          </h1>
          <p className="my-5">Here Are Your All Bookings</p>
        </div>
        <Button
          className=" flex justify-between items-center border border-fuchsia-600 text-md"
          variant="outline"
        >
          {" "}
          <IoMdArrowRoundBack /> Back
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-[#1E103F] shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={booking.image}
                alt={booking.roomName}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              {/* Status Badge */}
              <div className="absolute top-2 right-2">
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  Confirmed
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h1 className="text-2xl text-fuchsia-500 font-semibold">
                {booking.roomName}
              </h1>
              <Separator></Separator>

              <p className="text-fuchsia-100 text-md">
                {" "}
                <span className="text-xl">Date : </span>
                {new Date(booking.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <p className="text-fuchsia-100 text-md">
                <span className="text-xl">Time : </span> {booking.startTime}
                :00 to {booking.endTime}:00
              </p>

              <p className="text-fuchsia-500 font-semibold text-lg">
                <span className="text-xl">Cost : </span>${booking.totalCost}
              </p>

              {/* Cancel Button */}
              {/* <Button className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white text-md py-2 rounded-lg transition">
                Cancel Booking
              </Button> */}

              <BookingCancelAlert booking={booking}></BookingCancelAlert>
            </div>
          </div>
        ))}
      </div>
    </div>
    // **************
  );
};

export default MyBookingsPage;
