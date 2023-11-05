import React from "react";
import TestCard from "./test-card";
import { getAllTests } from "../lib/getAllTests";
import { Test, ApiResponse } from "../../../types/test-list.types";
import CustomButton from "./button";

export default async function TestList() {
  const fetchResult = await getAllTests();
  console.log(fetchResult);

  return (
    <div className="grid grid-cols-3 gap-4 mt-[20px]">
      {fetchResult.data.map((el: Test) => {
        return (
          <div key={el._id} className="h-[200px]">
            <h2 className="">{el.title}</h2>
            <p className="">{el.description}</p>
            {el.completed_by[0] && <p>{el.completed_by[0].status}</p>}
            <CustomButton testId={el.testId}>START TEST</CustomButton>
          </div>
        );
      })}
    </div>
  );
}
