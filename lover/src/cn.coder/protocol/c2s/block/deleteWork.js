import skt from '@/net/socket/socket'
export default function DeleteWork(workId) {
    let pid = 'deleteWork';
    skt.send({
        pid: pid,
        data: {
            id: workId
        }
    })
}