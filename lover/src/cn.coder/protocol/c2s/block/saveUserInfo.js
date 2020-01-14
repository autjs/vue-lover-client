import skt from '@/net/socket/socket'
export default function SaveUserInfo(data) {
    let pid = 'saveUserInfo';
    skt.send({
        pid: pid,
        data: data // {k: v}
    })
}