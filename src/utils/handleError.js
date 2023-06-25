import { toast } from "react-toastify";

const handleError = (err) => {
  if (err?.message === "Request failed with status code 404"){
    toast.error("Oops! Not found");
  }else if (err || err?.response) {
    if(err?.status === 401){
      toast.error(err?.data?.error);
    } else {
      const error =
        err?.error ||
        err?.data?.error ||
        err?.data?.message ||
        err?.data?.data?.err ||
        (err?.data?.data?.data && err?.data?.data?.data?.responseMessage) || err?.message;
      toast.error(error);
    }
  } else if (err?.message === "Network Error") {
    toast.error("It's not you, it's us. Please try again after some time");
  }
};

export default handleError;
