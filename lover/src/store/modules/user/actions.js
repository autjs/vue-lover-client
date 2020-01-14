const actions = {
    fillData({commit}, user) {
        if(user) {
            commit('SET_USER', user)
        }
    },
    savePortrait({commit}, url) {
        if(url) {
            commit('SET_USER', {portrait: url})
        }
    },
    sex({commit}, sex) {
        if(typeof sex !== 'number') {
            console.log('参数类型不匹配')
            return
        }
        sex = Math.max(sex, 1)
        sex = Math.min(sex, 2)
        commit('SET_SEX', sex)
    },
    nickname({commit}, nickname) {
        if(typeof nickname !== 'string') {
            console.log('参数类型不匹配')
            return
        }
        if(nickname === '') {
            console.log('""不是一个有效的值')
            return;
        }
        commit('SET_NICKNAME', nickname)
    },
    id({commit}, id) {
        if(typeof id !== 'string') {
            console.log('参数类型不匹配')
            return
        }
        if(id === '') {
            console.log('""不是一个有效的值')
            return;
        }
        commit('SET_ID', id)
    }
};
export default actions;