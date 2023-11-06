"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton() {
  const router = useRouter();
  const routeChange = () => {
    router.push("/testlab");
    router.refresh();
  };

  return (
    <button
      className=" flex w-fit  items-center text-main font-poppins hover:text-blue-gray-700 mb-[24px] lg:mb-[17px] mt-2"
      type="button"
      onClick={routeChange}
    >
      <BsArrowLeft size={24} />
      <span className="ml-[8px] font-[14px] font-righteous">Back</span>
    </button>
  );
}
