import skt from '@/net/socket/socket'
export default function Login(phone, pwd) {
    let pid = 'login';
    skt.send({
        pid: pid,
        data: {
            phone: phone,
            pwd: pwd
        }
    })
}