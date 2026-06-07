"use client";

import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const RegisterPage = () => {
  // Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user, "user Data from register");

    //   for signUp/Register
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    console.log(data, error, "form Register page");

    if (data) {
      redirect("/rooms");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl border rounded-2xl bg-[#1E103F] shadow-xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center py-2 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Join{" "}
            <span className="font-extrabold bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              BooKnooK!
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 mt-2">
            Create your account to start
          </p>
        </div>

        {/* Form */}
        <Card className="bg-transparent shadow-none px-6 pb-8">
          <Form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input className="w-full" placeholder="Your Name" />
              <FieldError />
            </TextField>

            {/* Image */}
            <TextField isRequired name="image" type="url">
              <Label>Image URL</Label>
              <Input className="w-full" placeholder="Image URL" />
              <FieldError />
            </TextField>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input className="w-full" placeholder="Your Email" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Must contain 1 uppercase letter";
                }
                if (!/[a-z]/.test(value)) {
                  return "Must contain 1 lowercase letter";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input className="w-full" placeholder="Enter password" />
              <Description className="text-xs text-gray-400">
                At least 6 chars with 1 uppercase & 1 lowercase
              </Description>
              <FieldError />
            </TextField>

            {/* Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:opacity-90 transition"
              >
                Register
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
