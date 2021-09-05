import Vue from 'vue'
Vue.config.devtools = true

import App from './App.vue'
import Vuelidate from 'vuelidate';
import './assets/styles.scss';

Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
