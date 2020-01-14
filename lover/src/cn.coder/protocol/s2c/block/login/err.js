import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log('err', data);
    cn.data.dispatch('login/err', data.msg)
}