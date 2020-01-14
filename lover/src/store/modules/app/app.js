import mutations from './mutations'
import actions from './actions'


export default {
    namespaced:true,
    state: {
        loadingWait: true, // 是否显示loading__wait
        connected: false,
        recommend: [], // 推荐列表
    },
    mutations,
    actions,
    // getters
  }

  