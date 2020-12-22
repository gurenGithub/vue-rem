import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
Vue.config.productionTip = false
import './styles/index.scss';
import './styles/normal/index.scss';
import './styles/mobile/index.scss';
new Vue({
  render: h => h(App),
}).$mount('#app')
