import { createRouter, createWebHistory } from "vue-router";
import SplashView from "../views/SplashView.vue";
import LoginView from "../views/LoginView.vue";
// import RegisterView from "../views/RegisterView.vue";
// import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "SplashView",
    component: SplashView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: RegisterView,
  // },
  // {
  //   path: "/main",
  //   name: "main",
  //   component: MainView,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
