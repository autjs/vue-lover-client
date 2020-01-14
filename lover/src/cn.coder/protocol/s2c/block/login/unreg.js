import cn from '@/store/store'
export default function on(data) {
    console.log('未注册', data);
    cn.dispatch('login/unreg', data.msg)
}