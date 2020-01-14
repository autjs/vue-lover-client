import skt from '@/net/socket/socket'
export default function PublishWork(jpg, mood) {
    let pid = 'publishWork';
    skt.send({
        pid: pid,
        data: {
            jpg: jpg,
            mood: mood
        }
    })
}