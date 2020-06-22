/*
 * @Author: eds
 * @Date: 2020-06-22 09:18:44
 * @LastEditTime: 2020-06-22 10:31:21
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \dongtou-color-map\src\router\index.ts
 */ 
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
