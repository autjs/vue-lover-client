import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log('获取xxx用户信息成功', data);
    if(data.user.id != cn.data.state.user.id) {
        cn.data.dispatch('saveUserToPool', data.user)
    }else {
        console.log('查找到我自己的个人信息？？  斩不处理')
    }
}