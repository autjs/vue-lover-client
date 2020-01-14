const mutations = {
    SET_USER(state, user) {
        for(var key in user) {
            if(state.hasOwnProperty(key)) {
                if(user[key] != null && typeof user[key] !== 'undefined') {
                    state[key] = user[key]
                }
            }
        }
    },

    SET_SEX(state, sex) {
        state.sex = sex
    },

    SET_NICKNAME(state, nickname) {
        state.nickname = nickname
    },
    SET_ID(state, id) {
        state.id = id
    }
};
export default mutations;