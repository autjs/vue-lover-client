import Verify from "../net/protocol/verify";
import store from "../store/store";
import handlerConfig from './handlers.config'
import s2c from '@/cn.coder/protocol/s2c/s2c'

export default {
    connect: function () {
        this.send(new Verify(store.state.token))
    },
    message: function (data) {
        if (data.pid == -1) {
            console.log(data.msg);
        } else {
            if (handlerConfig[data.pid]) {
                handlerConfig[data.pid].call(this, store, data);
            }
        }
    }
}