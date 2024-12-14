import { toast } from "react-hot-toast";

export const successToast = (text) => {
  toast.success(text, {
    position: "top-left",
    duration: 5000,
    style: {
      background: "#00FF00",
      color: "#000000",
    },
  });
};

export const infoToast = (text) => {
  toast(text, {
    position: "top-left",
    duration: 5000,
    style: {
      background: "#00FF00",
      color: "#000000",
    },
  });
};

export const deleteToast = (text) => {
  toast.error(text, {
    position: "top-left",
    duration: 5000,
    style: {
      background: "	#FF0000",
      color: "#000000",
    },
  });
};
