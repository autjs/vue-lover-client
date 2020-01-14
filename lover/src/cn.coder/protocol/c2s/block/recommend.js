import skt from '@/net/socket/socket'
export default function Recommend() {
    let pid = 'recommend';
    skt.send({
        pid: pid
    })
}