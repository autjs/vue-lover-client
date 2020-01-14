import Vue from 'vue'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import appConfig from '../../appConfig';
import cn from '@/cn.coder/cn.coder.config'
let s2c = require('@/cn.coder/protocol/s2c/s2c');
function Socket() {
    this.__task = []
    this.connected = function() {
        return Socket.net && Socket.net.connected;
    }
    this.Connect = function(onconnect) {
        this.onconnect = onconnect;
        if(!Socket.net) {
            Socket.net = io(appConfig.server);
            Vue.use(VueSocketIOExt, Socket.net);
        }
        Socket.net.on('connect', __connect.bind(this))
        Socket.net.on('disconnect', disconnect.bind(this))
        Socket.net.on('reconnect', reconnect.bind(this))
    }

    this.send = function( data ) {
        if(Socket.net) {
            // console.log('发送消息：%s', data.pid, data)
            this.log(data)
            Socket.net.send(data);
        }else {
            this.__task.push(data)
            console.log('socket 未连接，还不能发送请求 %s', data.pid);
            cn.data.dispatch('app/showLoadingWait');

        }
    }

    this.checkFailedTask = function() {
        if(cn.data.state.login.isLogin) {
            this.__task = Array.from(new Set(this.__task))
            this.__task.forEach((item) => {
                this.send(item)
            })
        }
    }

    function __connect() {
        console.log('链接到服务器');
        this.checkFailedTask()
        cn.data.dispatch('app/hideLoadingWait');
        Socket.net.on('message', __onmessage.bind(this))
        let _this = this;
        setTimeout(() => {
            _this.onconnect()
        }, 10);
    }

    function __onmessage(msg) {
        this.log(msg)
        let h = s2c[msg.pid || msg.err];
        if(h) {
            h.apply(this, [ msg ]);
        }else {
            console.log('协议未定义：%s', msg.pid)
        }
    }

    function disconnect() {
        console.log('断开链接');
        cn.data.dispatch('app/showLoadingWait');
    }

    function reconnect() {
        console.log('重新链接到服务器');
        cn.data.dispatch('app/hideLoadingWait');
    }
}



export default new Socket();


// TODO: onAbort(err); 这里经常报错