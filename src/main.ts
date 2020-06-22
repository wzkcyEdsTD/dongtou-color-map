/*
 * @Author: eds
 * @Date: 2020-06-22 09:18:44
 * @LastEditTime: 2020-06-22 10:37:24
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \dongtou-color-map\src\main.ts
 */ 
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/less/common.less";
import { arcgisApi } from "./api/arcgisApi";

Vue.prototype.$hub = new Vue(); //  全局事件线程
Vue.prototype.$window = window;

arcgisApi((arcgisApi: JSX.EsriObject) => {
  Vue.prototype.$ARCGIS_API = arcgisApi;
  const $vue: JSX.ElementClass = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount("#app");
  (Window as any).$vue = $vue;
});

Vue.config.productionTip = false;
