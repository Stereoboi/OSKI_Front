/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex w-[600px] h-screen mx-auto  flex-col justify-center items-center font-righteous ">
      <h1 className=" text-2xl text-center">
        Welcome to the Testify platform where you can test your knowledge on any
        topic. To get started, simply click on the 'Sign in' button.
      </h1>
      <Button
        variant="outlined"
        className="font-righteous text-base bg-white hover:bg-blue-gray-500
          mt-10
          "
        onClick={() => {
          localStorage.setItem("status", "auth");
          router.push(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/google`);
        }}
      >
        SIGN IN
      </Button>
      <ToastContainer />
    </main>
  );
}
