import cn from '@/cn.coder/cn.coder.config'
export default function on(data) {
    console.log('修改用户头像信息成功', data);
    cn.data.dispatch('user/savePortrait', data.user.portrait)
}