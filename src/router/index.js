import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Admin from "../views/Admin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
