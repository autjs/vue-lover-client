import skt from '@/net/socket/socket'
export default function GetUserById(uid) {
    let pid = 'getUserById';
    skt.send({
        pid: pid,
        data: {
            uid: uid
        }
    })
}