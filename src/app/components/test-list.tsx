import React from "react";
import TestCard from "./test-card";
import { getAllTests } from "../lib/getAllTests";
import { Test, ApiResponse } from "../../../types/test-list.types";
import CustomButton from "./button";

export default async function TestList() {
  const fetchResult = await getAllTests();

  return (
    <div className="grid grid-cols-3 gap-4 mt-[20px] font-montserrat_Alternates">
      {fetchResult.data.map((el: Test) => {
        return (
          <div key={el._id} className=" ">
            <div className="bg-blue-gray-300 rounded-lg flex flex-col justify-between h-[150px] p-2">
              <h2 className="text-center font-bold text-lg">{el.title}</h2>
              <p className="text-center">{el.description}</p>
              {el.completed_by[0] ? (
                <div className="flex justify-between">
                  <p className="rounded-lg bg-light-green-700 p-2 max-w-[100px] flex-row-reverse">
                    {el.completed_by[0].status}
                  </p>
                  <p className="rounded-lg bg-blue-gray-700 p-2 max-w-[100px] flex-row-reverse">
                    {el.completed_by[0].mark}
                  </p>
                </div>
              ) : (
                <p className="rounded-lg bg-blue-gray-700 p-2 max-w-[120px] flex-row-reverse text-center">
                  not passed
                </p>
              )}
            </div>

            <CustomButton testId={el.testId}>START TEST</CustomButton>
          </div>
        );
      })}
    </div>
  );
}
