"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

type CustomButtonProps = {
  children: React.ReactNode;
  testId: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ children, testId }) => {
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      className="font-righteous text-base bg-white hover:bg-blue-gray-500
          mt-10
          "
      onClick={() => router.push(`/testlab/${testId}`)}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
