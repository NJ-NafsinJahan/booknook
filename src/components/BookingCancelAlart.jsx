"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

// Delete API
export function BookingCancelAlert({ booking }) {
  const { _id, roomName } = booking;
  console.log(_id, "checking _id");
  const handleCancelBooking = async () => {
    const res = await fetch(`http://localhost:5000/booking/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data, "from Booking Cancel Alert");

    toast.error("Booking cancelled");

    window.location.reload();
  };
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white text-md py-2 rounded-lg transition">
          Cancel Booking
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel This Booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                {/* <strong className="text-red-500 text-xl"> {roomName} </strong>{" "} */}
                <strong className="text-red-500 text-xl"> {roomName} </strong>{" "}
                this study room booking will canceled permanently.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
