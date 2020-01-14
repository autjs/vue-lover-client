import skt from '@/net/socket/socket'
export default function ChatMsg(data) {
    let pid = 'chatMsg';
    skt.send({
        pid: pid,
        data:data
    })
}