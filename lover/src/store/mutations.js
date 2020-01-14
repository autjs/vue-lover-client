import Vue from 'vue'
export default {
    SET_USER: (state, data) => {
        if(state[data.id]) {
            state.users[data.id] = data;
        }else {
            Vue.set(state.users, data.id, data)
        }
        state.users.v = Date.now();
        console.log('SET_USER version --> ', state.users.v)
    },
    /**删除照片 */
    DELETE_PHOTO(state, id) {
        let arr = state.user.works;
        for(var i = 0; i < arr.length; i++) {
            let item = arr[i];
            if(item.id == id) {
                arr.splice(i,1);
                return;
            }
        }
    },
    /**
     * 推荐列表
     * @param {*} state 
     * @param {要添加的数组} arr 
     */
    ADD_RECOMMEND(state, arr) {
        arr.forEach(function(el){
            state.home.reconmmend.push(el);
            console.log('添加每条数据到推荐列表');
        })
    },
    
    /**
     * 添加作品
     * @param {*} state 
     * @param {要添加的数组} arr 
     */
    CONCAT_WORKS(state, arr) {
        // vue 貌似没有重写 .concat 方法
        // 修改为使用push
        arr.forEach(el => {
            state.user.works.push(el);
        });
    },


    ADD_WORKS(state, data) {
        state.user.works.push(data);
    },

    /**
     * 我的相册
     * @param {*} works 
     */
    SAVE__MINE__WORKS(state, works) {
        state.user.works = works;
    },

    saveToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        console.log('设置token:\n' + token);
    },
    saveUser(state, data) {
        let isObj = Object.prototype.toString.call(data) === '[object Object]';
        console.log('设置User: \n:' + data)
        if( isObj ) {
            for(var k in data) {
                if(state.user.hasOwnProperty(k)) {
                    state.user[k] = data[k];
                }
            }
            // local storage 只保存部分数据
            let saved = { }
            localStorage.setItem('user', JSON.stringify(saved));
        }
    },
    init(state) {
        var u = localStorage.getItem('user');
        if(u == 'undefined' || u == null) {
            localStorage.removeItem('user');
            localStorage.removeItem('token'); 
        }else {
            let userData = JSON.parse(u);
            for(let key in userData) {
                state.user[key] = userData[key];
            }
            // state.user = JSON.parse(u); 
            state.token = localStorage.getItem('token'); 
        }
    }
}