import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App)
}).$mount("#app");
import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";

import "bootstrap/dist/css/bootstrap.min.css";

new Vue({
  render: h => h(App)
}).$mount("#app");
