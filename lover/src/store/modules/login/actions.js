const actions = {
    unreg( {commit}, content ) {
        commit('SET_ERR', content)
    },
    err( {commit}, content ) {
        commit('SET_ERR', content)
    },
    clearErr( {commit} ) {
        commit('SET_ERR', '')
    },
    success({commit}) {
        commit('SET_SUCCESS', true)
    },
    overdue({commit}) {
        commit('SET_OVERDUE', true)
    },
    correct({commit}) {
        commit('SET_OVERDUE', false)
    },
    regSuccess({commit}) {
        commit('SET_REG_SUCCESS', true)
    },
    regErr({commit}, content) {
        commit('SET_REG_ERR', content)
    },
    clearRegErr( {commit} ) {
        commit('SET_REG_ERR', '')
    },
};
export default actions;