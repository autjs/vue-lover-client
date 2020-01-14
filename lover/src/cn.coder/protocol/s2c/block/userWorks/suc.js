import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log('收到的作品列表', data);
    cn.data.dispatch('work/saveWorks', data)
}