import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log('发布作品成功', data);
    cn.data.dispatch('work/saveWork', data.work)
}