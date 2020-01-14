const actions = {
    fillData({commit}, chat) {

        /*
            [
                {
                    uid: 'x'
                    user: {},
                    msgs: [{}]
                }
            ]
        */
        if(chat && chat.length) {
            let _chats = []
            for(var i = 0; i < chat.length; i++) {
                let user = chat[i];
                let obj = {
                    uid: user.id,
                    user: user,
                    msgs: []
                }
                _chats.push(obj)
            }
            console.log('chat -> actions -> fillData -> commit --> chats: ', _chats)
            commit('SET_CHAT', _chats)
        }
    },
    pushChatInfo({commit,rootState},chatInfo) {
        if(chatInfo) {
            commit('PUSH_CHAT_INFO', {chatInfo:chatInfo, user:rootState.user})
        }
    }
};
export default actions;