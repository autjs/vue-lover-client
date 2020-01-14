<template>
    <div class="loading__first">
        <div v-show="false">
            {{overdue}}
        </div>
    </div>
</template>
<script>
import skt from '@/net/socket/socket'
export default {
    computed: {
        overdue() {
            let _overdue = this.cn.data.state.login.overdue
            if(_overdue == false) {
                console.log('login success。。')
                this.requestInitData()
            }
            else if(_overdue == true) {
                this.toLoginPage()
            }
            return _overdue            
        }
    },
    activated() {
        this.connect();
    },
    methods: {
        check__state() {
            this.cn.data.state.app.connected = skt.connected;
            if(this.cn.data.state.login.completed) {
                this.requestInitData()
            }else {
                let linkId = this.cn.storage.getId()
                if(!linkId) {
                    this.$router.push('selectSex')
                }else {
                    this.requestInitData()
                    // this.cn.c2s.login()
                }
            }
        },
        connect() {
            if(skt.connected()) {
                this.check__state()
            }else {
                skt.Connect(this.check__state)
            }
        },
        requestInitData() {
            this.log('开始请求初始化数据')
            this.cn.c2s.recommend();
            this.cn.c2s.chat();
            this.cn.router.push('home');
        },
        toLoginPage() {
            this.cn.router.push('login');
        }
    }
}
</script>
<style scoped>
    .loading__first {
        width: 100%;
        height: 100%;
        background: url('~@/assets/10016.jpg') no-repeat;
        background-size: 100% 100%;
    }
</style>