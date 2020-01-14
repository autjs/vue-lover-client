import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log('有人和我说话啦', data);
    cn.data.dispatch('chat/pushChatInfo', data.chatInfo)
}