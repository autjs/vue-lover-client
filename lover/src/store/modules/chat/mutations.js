import Vue from 'vue'
const mutations = {
    SET_CHAT(state, chats) { // 这个是好友列表
        state.chats.splice(0, state.chats.length)
        for(let i = 0; i < chats.length; i++) {
            let r = chats[i]
            if(r) state.chats.push(r)
        }
        console.log('chat --> mutations --> state.chats: ', state.chats)
    },
    PUSH_CHAT_INFO(state, { chatInfo, user }) { // 这个是私聊 1v1

        let otherUid = chatInfo.from == user.id ? chatInfo.to : chatInfo.from
        let hasRecords = false
        for(var i = 0; i < state.chats.length; i++) {
            let chatItem = state.chats[i];
            if(chatItem.uid == otherUid) {
                chatItem.msgs.push(chatInfo)
                hasRecords = true
            }
        }
        if(!hasRecords) {
            state.chats.push({})
            let item = state.chats[state.chats.length-1];
            Vue.set(item, 'uid', otherUid);
            Vue.set(item, 'msgs', []);
            item.msgs.push(chatInfo)
        }
        console.log('chat mutations -- 当前chat列表数据为：', state.chats)
    }
};
export default mutations;