const mutations = {
    SET_ERR(state, content) {
        state.err = content;
    },
    SET_SUCCESS(state, status) {
        state.completed = status
        state.isLogin = status
    },
    SET_OVERDUE(state, status) {
        state.overdue = status
        state.isLogin = !status
    },
    SET_REG_SUCCESS(state, status) {
        state.regSuccess = status
        state.isLogin = status
    },
    SET_REG_ERR(state, content) {
        state.regErr = content;
    },
};
export default mutations;