import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Header from './components/Header.vue'
import Guding from './components/Guding.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component("my-dh", Guding)//右侧固定 微信 微博...
Vue.component("my-header", Header);//头部

new Vue({

  render: h => h(App),
  router

}).$mount('#app')