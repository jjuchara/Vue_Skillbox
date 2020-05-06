import Vue from 'vue';
import App from './App.vue';
// import {first, second} from './first';
// import alertFunc from "./second";

Vue.config.productionTip = false

// alertFunc(first);
// alertFunc(second);

new Vue({
  render: h => h(App),
}).$mount('#app')
