import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router
import UsrInfo from '@/views/UserInfo.vue'
import Home from '@/views/home/home'
// import Register from '@/views/Register.vue'
// import Login from '@/views/Login.vue'
import editInfo from '@/views/user/editInfo'
import EditItemPage from '@/views/userInfo/EditItemPage.vue'
import nickname from '@/views/user/editItems/nickname'
import profile from '@/views/user/editItems/profile'
import distpacker from '@/views/user/editItems/distpacker'
import single from '@/views/user/editItems/single'
import age from '@/views/user/editItems/age'
import uHeight from '@/views/user/editItems/height'
import uWeight from '@/views/user/editItems/weight'
import head from '@/views/user/editItems/head'
import works__photo from '@/views/user/works/works__photo'
import works__upload from '@/views/user/works/works__upload'
import chat__list from '@/views/chat/chat__list'
import chat__panel from '@/views/chat/chat__panel'
import loading__first from '@/views/loading/loading__first'
import selectSex from '@/views/login/SelectSex'
import selectUser from '@/views/login/SelectUser'
import selectEnter from '@/views/login/SelectEnter'

// test
import user__album from '@/views/user/album/user__album'

 
Vue.use(Router) //使用vue-router

let routes = [];
routes.push({
    path: "/",
    name: 'enter',
    component: loading__first,
    meta: {
        force: true
    }
})
function Add(key, vm, force) {
    force = typeof force === 'undefined' ? false : force;
    routes.push({
        path: '/' + key,
        name: key ,
        component: vm,
        meta: {
            force: force
        }
    })
}

// Add('init', loading__first, true);


// Add('register', Register);
// Add('login', Login, );
Add('home', Home);
Add('chat__list', chat__list);
Add('usrinfo', UsrInfo);
Add('edititempage', EditItemPage);
Add('editInfo', editInfo);
Add('nickname', nickname);
Add('profile', profile);
Add('distpacker', distpacker);
Add('single', single);
Add('age', age);
Add('height', uHeight);
Add('weight', uWeight);
Add('head', head);
Add('works__photo', works__photo);
Add('works__upload', works__upload);
Add('user__album', user__album);
Add('chat__panel', chat__panel);
Add('selectSex', selectSex,true);
Add('selectUser', selectUser,true)
Add('selectEnter', selectEnter,true)



export default new Router({
    routes: routes
})