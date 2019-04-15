// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//mint-ui-----start
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../style/style.css'
//mint-ui-----end
//axiox------start
import Axios from 'axios';
//引入自己的挂在器
// import Install from '@/pluginx/installer'
// Vue.use(Install);
//给vue原型挂在$axiox属性
Vue.prototype.$axios = Axios;
//配置默认的URL
Axios.defaults.baseURL = 'https://www.sinys.online/api/';
//axiox------end
Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  MintUI,
  components: { App },
  template: '<App/>'
})
