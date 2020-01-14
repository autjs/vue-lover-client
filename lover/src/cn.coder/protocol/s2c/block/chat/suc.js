import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log('获取聊天列表成功', data);
    cn.data.dispatch('chat/fillData', data.chat)
}