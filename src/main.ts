import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/styles/var.scss'
import Fant from 'fant2'
Vue.use(Fant)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
