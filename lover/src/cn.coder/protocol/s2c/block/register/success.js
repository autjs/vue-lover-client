import cn from '@/cn.coder/cn.coder.config'
export default function on() {
    this.log()
    cn.storage.setId(cn.data.state.user.id)
    this.checkFailedTask()
}