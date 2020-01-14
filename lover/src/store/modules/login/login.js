import mutations from './mutations'
import actions from './actions'


export default {
    namespaced:true,
    state: {
        isLogin: false,
        err:'',
        completed: false,
        overdue: null,
        regSuccess: false,
        regErr: ''
    },
    mutations,
    actions,
    // getters
  }

  