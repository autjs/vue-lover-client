const mutations = {
    SET__LOADING__WAIT__STATE(state, isShow) {
        state.loadingWait = isShow;
    },
    PUSH_RECOMMEND(state, rec) {
        for(let i = 0; i < rec.length; i++) {
            let r = rec[i]
            if(r) state.recommend.push(r)
        }
        console.log('1575182904', '设置作品展示信息', 'mutations', state.recommend)
    }
};
export default mutations;