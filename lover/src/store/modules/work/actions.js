const actions = {
    saveWork({commit}, work) {
        if(work) {
            commit('SAVE_WORK', work)
        }
    },
    saveWorks({commit}, data) {
        console.log('======================')
        if(data) {
            for(var i = 0; i < data.works.length; i++) {
                let _o = data.works[i];
                _o.uid = data.uid;
                commit('SAVE_WORK', _o)
                console.log('action -> saveWorks', _o)
            }
        }
    },
    deleteWork({commit}, {uid, id}) {
        commit('DELETE_WORK', {uid, id})
    }
};
export default actions;