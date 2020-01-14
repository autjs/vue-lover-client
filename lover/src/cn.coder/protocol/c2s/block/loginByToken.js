import skt from '@/net/socket/socket'
import ste from '@/cn.coder/storage/localStorage'
export default function LoginByToken() {
    let pid = 'LoginByToken';
    let tk = ste.getToken();
    if(tk) {
        skt.send({
            pid: pid,
            data: {
                tk: tk
            }
        })
    }else {
        console.warn('tk 不存在');
    }
}