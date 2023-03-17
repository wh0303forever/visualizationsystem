import Vue from "vue";
import VueRouter from "vue-router";
import OverView from "../views/OverView.vue";
import Screen from "../views/Screen.vue";
import Trend from "../views/Trend.vue";
import Setting from "../views/Setting.vue";
import Forbidden from "../views/Forbidden.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "OverView",
    component: OverView,
  },
  {
    path: "/Screen",
    name: "Screen",
    component: Screen,
  },
  {
    path: "/Trend",
    name: "Trend",
    component: Trend,
  },
  {
    path: "/Setting",
    name: "Setting",
    component: Setting,
  },
  {
    path: "/Forbidden",
    name: "Forbidden",
    component: Forbidden,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
