"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

// Delete API
export function DeleteAlert({ room }) {
  const { _id, roomName, email: roomOwnerEmail } = room; //1st change

  // **** for owner checking
  const { data: session } = authClient.useSession();
  const currentUserEmail = session?.user?.email;

  if (!currentUserEmail || currentUserEmail !== roomOwnerEmail) {
    return null;
  }
  // ****

  const handleDelete = async () => {
    // verify api
    const { data: tokenData } = await authClient.token();
    // console.log(tokenData);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/room/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );
    const data = await res.json();
    toast.error("Room is permanently Deleted");
    redirect("/rooms");
    // console.log(data, "from DeleteAlert");
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
