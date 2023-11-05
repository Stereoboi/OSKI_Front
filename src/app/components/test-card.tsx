"use client";
// import React, { useState, useEffect } from "react";
// import { RadioVerticalList } from "./radio-button";
// import { Test, ApiResponse } from "../../../types/test-list.types";

// export default function TestCard({ data }: any) {
//   const [answers, setAnswers] = useState({});
//   // console.log(data);
//   useEffect(() => {
//     // console.log(answers);
//   });
//   return (
//     <>
//       {data.questions.map((el: any) => {
//         return (
//           <div
//             key={el.questionId}
//             className="w-[450px] h-[250px] flex flex-col justify-between"
//           >
//             <p className="font-montserrat_Alternates my-auto text-center">
//               {el.text}
//             </p>
//             <RadioVerticalList data={el.options} dataSaving={setAnswers} />
//           </div>
//         );
//       })}
//     </>
//   );
// }

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// export default function TestCard({ data }: any) {
//   const initialValues = {}; // Початкові значення для радіокнопок (пустий об'єкт)

//   const handleSubmit = (values: any) => {
//     const selectedAnswers = Object.values(values);
//     // Обробник події для відправки форми зі зібраними відповідями
//     const formattedAnswers = {
//       testId: data.testId,
//       answers: selectedAnswers,
//     };
//     console.log(formattedAnswers);
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         {data.questions.map((el: any) => (
//           <div key={el.questionId}>
//             <p>{el.text}</p>
//             <Field name={el.questionId}>
//               {({ field }: any) => (
//                 <>
//                   {el.options.map((option: any) => (
//                     <label key={option} htmlFor={`${el.questionId}-${option}`}>
//                       <input
//                         {...field}
//                         type="radio"
//                         id={`${el.questionId}-${option}`}
//                         value={option}
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </>
//               )}
//             </Field>
//           </div>
//         ))}
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// }

import React from "react";
import { Formik, Form, Field } from "formik";
import { RadioVerticalList } from "./radio-button";
import { submitTest } from "../lib/submitTest";
import { Test } from "../../../types/test-list.types";

export default function TestCard({ data }: { data: Test }) {
  const initialValues = {};

  const handleSubmit = (values: any) => {
    const selectedAnswers = Object.values(values);
    const formattedAnswers = {
      testId: data.testId,
      answers: selectedAnswers,
    };

    submitTest(formattedAnswers);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        {data.questions.map((el) => (
          <div key={el.questionId}>
            <p>{el.text}</p>
            <Field
              name={el.questionId}
              component={RadioVerticalList}
              options={el.options}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
