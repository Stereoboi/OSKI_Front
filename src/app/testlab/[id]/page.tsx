import React from "react";
import { getTestById } from "@/app/lib/getTestById";
import TestCard from "@/app/components/test-card";
import { Test } from "../../../../types/test-list.types";
import { cookies } from "next/headers";

type Params = {
  params: {
    id: string;
  };
};

export default async function TestPage({ params: { id } }: Params) {
  const fetchResult = await getTestById(id);

  console.log(fetchResult);

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
