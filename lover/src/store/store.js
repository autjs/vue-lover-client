import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import app from './modules/app/app'
import login from './modules/login/login'
import user from './modules/user/user'
import work from './modules/work/work'
import chat from './modules/chat/chat'

var store = new Vuex.Store({
    modules: {
        app:app,
        login:login,
        user:user,
        work:work,
        chat:chat
    },
    state: {
        isconnect: false,
        token: null,
        hasNav: false,
        file: null,
        users: {
            v: 0
        }
        
    },
    actions: actions,
    getters: getters,
    mutations: mutations
});

store.commit('init');

export default store;