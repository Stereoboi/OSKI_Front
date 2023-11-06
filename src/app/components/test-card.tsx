"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import { RadioVerticalList } from "./radio-button";
import { submitTest } from "../lib/submitTest";
import { Test } from "../../../types/test-list.types";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import BackButton from "./back-button";
import { toast } from "react-toastify";

export default function TestCard({ data }: { data: Test }) {
  const initialValues = {};
  const router = useRouter();

  const handleSubmit = (values: any) => {
    const selectedAnswers = Object.values(values);
    const formattedAnswers = {
      testId: data.testId,
      answers: selectedAnswers,
    };

    submitTest(formattedAnswers);
  };

  return (
    <>
      <BackButton />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="grid grid-cols-3 gap-4 mt-10 font-montserrat_Alternates">
            {data.questions.map((el) => (
              <div
                key={el.questionId}
                className="max-h-[300px] flex flex-col justify-center bg-blue-gray-700 rounded-lg"
              >
                <p className=" p-5 text-center my-auto ">{el.text}</p>
                <Field
                  name={el.questionId}
                  component={RadioVerticalList}
                  options={el.options}
                />
              </div>
            ))}
          </div>
          <Button
            type="submit"
            variant="outlined"
            className="font-righteous text-base bg-white hover:bg-blue-gray-500
          mt-2
          "
            onClick={() => {
              // router.replace("/testlab");
              router.refresh();
              toast.success("Answers accepted");
              // router.back();
            }}
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
}
