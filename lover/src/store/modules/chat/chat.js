import mutations from './mutations'
import actions from './actions'


/*
    chat: [
        {
            uid:xxx,
            user: {}
            msgs: [
                { 
                    to: 'xxxx',
                    msg: 'xxx',
                    from: 'x'
                }
            ]
        }
    ]
*/

export default {
    namespaced:true,
    state: {
        chats: []
    },
    mutations,
    actions,
    // getters
  }

  