import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log('登录成功', data);
    cn.data.dispatch('user/fillData', data.user)
    cn.data.dispatch('login/correct')
    this.checkFailedTask()
}