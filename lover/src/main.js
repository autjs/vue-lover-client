import './base/reset.css'
import './base/ani.css'
import '@ziki/es6-log'

// TODO: 字体大小适配
import './amor/Adaptation'
// TODO: 使用s

// import {} from 'cn.console';
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

// c
import cn from './cn.coder/cn.coder.config'
cn.data = store.state;
Vue.prototype.cn = cn;

Vue.config.productionTip = false

import router from './router/router.js'
require('./net/http/mAxios.js')

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

router.beforeEach((to, from, next) => {
  router.log('from', from)
  router.log('to', to)
  if(!store.state.login.isLogin) {
    if(to.fullPath !== '/') {
      if(to.meta.force) {
        next()
      }else {
        next('/')
      }
    }else {
      next()
    }
  }else {
    next()
  }
  // next()
  // if(to.meta.force) {
  //   next()
  // }else {
  //   if(!store.state.login.isLogin) {
  //     if(from.fullPath == '/') {
  //       next()
  //     }else {
  //       next('/')
  //     }
  //   }else {
  //     next()
  //   }
  // }
})

router.log(router)
new Vue({
  router,
  store,
  render: h => h(App),
  created: () => {
    cn.data = store;
    cn.router = router
  },
}).$mount('#app')
