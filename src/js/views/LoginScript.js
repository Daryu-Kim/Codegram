import { loginEmail } from "@/js/modules/_variabled.js";
import { Toast } from "@/js/components/ToastMessage.js";

window.addEventListener("DOMContentLoaded", () => {
  const input_boxs = document.querySelectorAll(".content-input-item-box");
  const input_ips = document.querySelectorAll(".content-input");
  const input_phs = document.querySelectorAll(".content-input-ph");
  const input_eye = document.querySelector(".content-input-eye-check");
  const submit_btn = document.querySelector(".content-login-btn");

  const load_box = document.querySelector(".loading-box");
  load_box.style.display = "none";

  window.addEventListener("beforeunload", () => {
    load_box.style.display = "flex";
  });

  input_ips.forEach((element, index) => {
    element.addEventListener("input", () => {
      if (element.value != "") {
        element.classList.add("input-focusing");
        input_phs[index].classList.add("ph-focusing");
      } else {
        element.classList.remove("input-focusing");
        input_phs[index].classList.remove("ph-focusing");
      }
    });

    element.addEventListener("focusin", () => {
      input_boxs[index].classList.add("input-box-focusing");
    });

    element.addEventListener("focusout", () => {
      input_boxs[index].classList.remove("input-box-focusing");
    });
  });

  input_eye.addEventListener("change", () => {
    if (input_eye.checked) {
      input_ips[1].setAttribute("type", "text");
    } else {
      input_ips[1].setAttribute("type", "password");
    }
  });

  submit_btn.addEventListener("click", (e) => {
    // Email 형식 확인
    e.preventDefault();
    if (!input_ips[0].value) {
      Toast("이메일을 입력하세요!");
      input_ips[0].focus();
    } else {
      if (!checkEmail(input_ips[0].value)) {
        Toast("이메일 형식이 잘못되었습니다!");
        input_ips[0].focus();
      } else {
        if (!input_ips[1].value) {
          Toast("비밀번호를 입력해주세요!");
        } else {
          loginEmail(input_ips[0].value, input_ips[1].value)
            .then((result) => {
              console.log(result.user.uid);
              // const user = result.user;
            })
            .catch((error) => Toast(error));
        }
      }
    }
  });

  function checkEmail(str) {
    var reg_email = /^([0-9a-zA-Z\\.-]+)@([.0-9a-zA-z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
      return false;
    } else {
      return true;
    }
  }
});

import ToastMessage from "@/js/components/ToastMessage.js";
export default {
  name: "LoginView",
  components: {
    ToastMessage,
  },
  methods: {
    checkEmail: function (str) {
      var reg_email = /^([0-9a-zA-Z\\.-]+)@([.0-9a-zA-z_-]+){1,2}$/;
      if (!reg_email.test(str)) {
        return false;
      } else {
        return true;
      }
    },
  },
  created() {},
};
