"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

// Delete API
export function DeleteAlert({ room }) {
  const { _id, roomName } = room;
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/room/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    redirect("/rooms");
    console.log(data, "from DeleteAlert");
  };
  return (
    <AlertDialog>
      <Button variant="danger" className={" rounded-lg w-full"}>
        {" "}
        <FaTrashAlt /> Delete Room
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete This Room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This awesome study room{" "}
                <strong className="text-red-500 text-xl"> {roomName} </strong>{" "}
                will permanently delete and all of its data. This action cannot
                be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
