import { SetCookie, db, signupEmail, database } from '/assets/js/modules/_variabled.js';
import { Toast } from '/assets/js/modules/toast.js';
import { ref, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

const install_app_container = document.querySelector(".install-app-btn-container");
const install_app = document.querySelector(".install-app-btn-container > i");

const input_boxs = document.querySelectorAll(".content-input-item-box");
const input_ips = document.querySelectorAll(".content-input");
const input_phs = document.querySelectorAll(".content-input-ph");
const input_eye = document.querySelector(".content-input-eye-check");
const submit_btn = document.querySelector(".content-login-btn");

const load_box = document.querySelector(".loading-box");

let defferred_prompt;
var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
var device_inf = navigator.userAgent.toLowerCase();

window.addEventListener("DOMContentLoaded", () => {
    load_box.style.display = "none";
});

window.addEventListener("beforeunload", (e) => {
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
        input_ips[3].setAttribute("type", "text");
    } else {
        input_ips[3].setAttribute("type", "password");
    }
});

input_ips[2].addEventListener("input", (event) => {
    const regExp = /[^0-9a-zA-Z]/g;
    const element = event.target;

    if (regExp.test(element.value)) {
        element.value = element.value.replace(regExp, "");
    }
});


console.log(`${mobile}\n${device_inf}`);
if (mobile) {
    console.log(device_inf);
    if (device_inf.indexOf("android") > -1) {
        console.log("Android")
        if (isRunningStandalone()) { console.log("Standalone"); }
        else {
            console.log("Not Standalone")
        }
    } else if (
        device_inf.indexOf("iphone") > -1 ||
        device_inf.indexOf("ipad") > -1 ||
        device_inf.indexOf("ipod") > -1
    ) {
        console.log("iOS")
        if (isRunningStandalone()) { console.log("Standalone"); }
        else {
            console.log("Not Standalone");
        }
    } else {
        console.log("Other OS");
        console.log("Not Compatible");
    }
} else {
    console.log("Desktop")
    if (isRunningStandalone()) { console.log("Standalone"); }
    else {
        console.log("Not Standalone");
    }
}

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
                Toast("성명을 입력해주세요!");
            } else {
                if (!input_ips[2].value) {
                    Toast("사용자 이름을 입력해주세요!");
                } else {
                    if (!input_ips[3].value) {
                        Toast("비밀번호를 입력해주세요!");
                    } else {
                        signupEmail(input_ips[0].value, input_ips[3].value)
                            .then((result) => {
                                console.log(result.user.uid);
                                const user = result.user;
                                registerAccount(result.user.uid, user);
                            })
                            .catch((error) => Toast(error));
                    }
                }
            }

        }
    }
});

window.addEventListener('beforeinstallprompt', (e) => { beforeInstallPrompt(e) });

function registerAccount(uid, data) {
    set(ref(database, 'users/' + uid), data);
}
// function CheckAccount(id) {
//     let chk = 0;
//     getDoc(doc(db, "user", id)).then(docSnap => {
//         if (docSnap.exists()) {
//             const data = docSnap.data();
//             for (let i = 0; i < user_data_list.length; i++) {
//                 if (data[user_data_list[i]]) {
//                     chk++;
//                     console.log(chk);
//                 } else {
//                     console.log(`404: ${user_data_list[i]}`)
//                     location.href = `/assets/views/user/register-${user_data_list[i]}.html`;
//                     break;
//                 }
//             }
//             if (data[user_data_list.length - 1] == false) {
//                 chk--;
//             }
//             if (chk == user_data_list.length) {
//                 console.log(chk);
//                 location.href = "/assets/views/main.html";
//             }
//         } else {
//             setDoc(doc(db, "user", id), {});
//             setTimeout(() =>
//                 location.href = "/assets/views/user/register-phone.html"
//                 , 3000);
//         }
//     });
// }

function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
}

function beforeInstallPrompt(e) {
    e.preventDefault();

    defferred_prompt = e;
    install_app_container.style.display = "flex";

    install_app.addEventListener('click', () => { installApp() });
}

function installApp() {
    defferred_prompt.prompt();
    defferred_prompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        defferred_prompt = null;
    });
}

function checkEmail(str) {
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([.0-9a-zA-z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
        return false;
    } else {
        return true;
    }
}