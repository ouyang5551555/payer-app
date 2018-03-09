// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/stylus/index.styl'
import fastClick from 'fastclick'

import vueLazyLoad from 'vue-lazyload'
//手机端300ms延迟问题
fastClick.attach(document.body)

//图片懒加载
Vue.use(vueLazyLoad, {
  loading: require('./common/image/default.png')
})
Vue.config.productionTip = false

//import { refreshRem } from './assets/js/refresh'
//refreshRem()


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
