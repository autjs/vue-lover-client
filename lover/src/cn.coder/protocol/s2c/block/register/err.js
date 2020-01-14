import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    this.log(data)
    cn.data.dispatch('login/regErr', data.msg)
}