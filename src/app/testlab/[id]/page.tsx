import React from "react";
import { getTestById } from "@/app/lib/getTestById";
import TestCard from "@/app/components/test-card";
import { Test } from "../../../../types/test-list.types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test page",
  description: "Best way to check your knowledge ",
};

type Params = {
  params: {
    id: string;
  };
};

export default async function TestPage({ params: { id } }: Params) {
  const fetchResult = await getTestById(id);

  return (
    <>
      {fetchResult.data.map((el: Test) => {
        return (
          <div key={el._id}>
            <TestCard data={el} />
          </div>
        );
      })}
    </>
  );
}
