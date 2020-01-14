import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log(data.msg, data);
    cn.data.dispatch('login/overdue')
}