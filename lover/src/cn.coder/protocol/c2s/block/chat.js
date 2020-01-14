import skt from '@/net/socket/socket'
export default function Chat() {
    let pid = 'chat';
    skt.send({
        pid: pid
    })
}