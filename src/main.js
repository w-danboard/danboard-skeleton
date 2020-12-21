import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import router from './views/router/index.js'
import appConfig from '../app.config'          // 系统全局配置

import Request from './request' //请求封装

// 引入样式
import 'element-ui/lib/theme-chalk/index.css'  // element-ui 样式
import '@/styles/base.css'                     // 公共样式

Vue.config.productionTip = false
Vue.use(ElementUI, { locale, size: 'large' })
Vue.use(Request)
Vue.prototype.$config = appConfig

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
