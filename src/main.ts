import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Fant from 'fant2'
import 'fant2/lib/theme-chalk/index.css'
require('./mock/mock')
Vue.use(Fant)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
