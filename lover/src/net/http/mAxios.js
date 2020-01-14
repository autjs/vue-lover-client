import Vue from 'vue'
import mAxios from 'axios'
import qs from 'qs'
Vue.prototype.$http = mAxios;

import store from '@/store/store'
import router from '@/router/router'
import appConfig from '../../appConfig';

// 默认设置
mAxios.defaults.timeout = 30000
mAxios.defaults.baseURL = appConfig.server;

mAxios.interceptors.request.use(
    config => {
        config.headers.token = store.state.token;
        config.data = qs.stringify(config.data);
        return config
    },
    err => {
        return Promise.reject(err);
    }
)

mAxios.interceptors.response.use(
    response => {
        // // 这里可以处理数据不对时的逻辑
        if(response.data.code == 10004) {
            console.log('检测到token过期,需要重新登录')
            console.log(router);
            if( router.currentRoute.path != '/login') {
                router.replace('/login')
            }
            return;
        }
        return response
    },
    err => {
        if(err.response) {
            return Promise.reject(err.response.data);
        }
        return Promise.reject(err)
    }
)