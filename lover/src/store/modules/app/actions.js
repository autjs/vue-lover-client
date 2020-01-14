const actions = {
    showLoadingWait( {commit} ) {
        commit('SET__LOADING__WAIT__STATE', true);
    },
    hideLoadingWait( {commit} ) {
        commit('SET__LOADING__WAIT__STATE', false);
    },
    pushRecommend({commit}, rec) {
        if(rec && rec.length) {
            commit('PUSH_RECOMMEND', rec)
        }
    }
};
export default actions;