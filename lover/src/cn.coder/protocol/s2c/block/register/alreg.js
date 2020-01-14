import cn from '@/store/store'
export default function on(data) {
    console.log('已注册', data);
    cn.dispatch('login/regErr', data.msg)
}