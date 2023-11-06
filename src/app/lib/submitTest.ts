import axios from "axios";
import { toast } from "react-toastify";
export const submitTest = (data: any) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_BACK_URL}/tests/submit`, data, {
      withCredentials: true,
    })
    .then((response) => {


      return response;
    })
    .catch((error) => {
      toast.error("You already pass this test");
    });
};
