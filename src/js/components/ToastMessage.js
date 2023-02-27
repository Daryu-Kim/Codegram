export function Toast(string) {
  let removeToast;
  const toast = document.querySelector(".toast");

  if (toast.classList.contains("reveal")) {
    clearTimeout(removeToast),
      (removeToast = setTimeout(function () {
        toast.classList.remove("reveal");
      }, 2000));
  } else {
    removeToast = setTimeout(function () {
      toast.classList.remove("reveal");
    }, 2000);
  }
  toast.classList.add("reveal"), (toast.innerText = string);
}

export default {
  name: "ToastMessage",
  props: {
    msg: String,
  },
};
