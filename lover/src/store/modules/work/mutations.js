import Vue from 'vue'
const mutations = {
    SAVE_WORK(state, work) {
        console.log('work -> mutations -> start')
        let _w = new state.work();
        for(var key in work) {
            if(_w.hasOwnProperty(key)) {
                _w[key] = work[key]
            }
        }
        let _works = state.works[_w.uid];
        if(!_works) {
            _works = []
            _works.push(_w)
            Vue.set(state.works, _w.uid, _works);
        } else {
            _works.push(_w)
        }
        console.log('work -> mutations -> end')
        console.log('我的作品列表数据变更',state.works)
        state.worksSize = _works.length;
        console.log('作品长度有变化 %s', state.worksSize)
    },
    DELETE_WORK(state, {uid, id}) {
        let _works = state.works[uid]
        if(_works) {
            _works.splice(_works.findIndex(v => v.id === id), 1)
        }
    }
};
export default mutations;