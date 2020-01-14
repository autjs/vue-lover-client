import mutations from './mutations'
import actions from './actions'
import defaultPortrait from '@/assets/10007.jpg'

export default {
    namespaced:true,
    state: {
        id:'', // uid
        nickname: '未设置',
        phone: '未设置',
        profile: '未设置',
        city: '未设置',
        location: '未知',
        singleIndex: 0,
        age: 24,
        height: 168,
        weight: 50,
        portrait: defaultPortrait,
        sex: 1 // 1: 男 2: 女
    },
    mutations,
    actions,
    // getters
  }

  