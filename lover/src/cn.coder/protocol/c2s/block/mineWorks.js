import skt from '@/net/socket/socket'
export default function MineWorks() {
    let pid = 'mineWorks';
    skt.send({
        pid: pid
    })
}