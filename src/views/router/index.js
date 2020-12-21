import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 主页面
const main = () => 
import('@/views/main/index.vue')

// 预览页面
const preview = () => 
import('@/views/preview/index.vue')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      meta: {
        name: '主页面'
      }
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview,
      meta: {
        name: '预览页面'
      }
    }
  ]
})


export default router;