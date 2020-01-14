import skt from '@/net/socket/socket'

/**
 *
 * @param data { id, sex, nickname}
 * @constructor
 */
export default function Register(data) {
    let pid = 'register';
    skt.send({
        pid: pid,
        data: data
    })
}