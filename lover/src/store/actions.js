export default {
    saveUserToPool({commit}, user) {
        if(user) {
            commit('SET_USER', user)
        }
    }
}