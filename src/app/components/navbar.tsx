"use client";
import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function AppNavbar() {
  const status = localStorage.getItem("status");
  const router = useRouter();
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/testlab"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-righteous"
        >
          Testify
        </Typography>
        <div className="hidden gap-2 lg:flex">
          {status ? (
            <Button
              onClick={() => {
                localStorage.removeItem("status");
                router.push(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/logout`);
              }}
              variant="gradient"
              size="sm"
              className="font-righteous"
            >
              Sign out
            </Button>
          ) : (
            <Button
              onClick={() => {
                localStorage.setItem("status", "auth");
                router.push(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/google`);
              }}
              variant="gradient"
              size="sm"
              className="font-righteous"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </Navbar>
  );
}
