// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/js/modules/_variabled.js";
import AppInstaller from "@/components/AppInstaller.vue";
import router from "@/router";
// function LoginCheck() {
//   var token = GetCookie("id");
//   getDoc(doc(db, "user", `${token}`)).then(docSnap => {
//     if (docSnap.exists()) {
//       const data = docSnap.data();
//       for (let i = 0; i < user_data_list.length; i++) {
//         if (data[user_data_list[i]]) {
//           chk++;
//           console.log(chk);
//         } else {
//           console.log(`404: ${user_data_list[i]}`)
//           location.href = `/assets/views/login.html`;
//           break;
//         }
//       }
//       if (data[user_data_list.length - 1] == false) {
//         chk--;
//       }
//       if (chk == user_data_list.length) {
//         console.log(chk);
//         location.href = "/assets/views/main.html";
//       }
//     } else {
//       location.href = `/assets/views/login.html`;
//     }
//   })
// }

// function GetCookie(name) {
//   var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
//   return value ? value[2] : null;
// }

export default {
  name: "SplashView",
  components: {
    AppInstaller,
  },
  methods: {
    isRunningStandalone: function () {
      return window.matchMedia("(display-mode: standalone)").matches;
    },
  },
  created() {
    let pushRouter;
    if (this.isRunningStandalone()) {
      console.log("standalone");
      pushRouter = setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      console.log("not standalone");
      clearTimeout(pushRouter);
    }
  },
};
