// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//vuex
import store from './store'

Vue.use(ElementUI);

Vue.config.productionTip = false

//挂载vue的原型
Vue.prototype.$http = axios

//全局配置
axios.defaults.baseURL = "/api";
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
