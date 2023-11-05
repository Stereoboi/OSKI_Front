import axios from "axios";

export const submitTest = (data: any) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_BACK_URL}/tests/submit`, data, {
      withCredentials: true,
    })
    .then((response) => {
      // console.log(response);

      return response;
    })
    .catch((error) => {
      console.error("Помилка при відправці POST-запиту:", error);
    });
};
