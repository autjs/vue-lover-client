import skt from '@/net/socket/socket'
export default function SaveUserPortrait(base64) {
    let pid = 'saveUserPortrait';
    skt.send({
        pid: pid,
        data: {
            portrait: base64
        }
    })
}