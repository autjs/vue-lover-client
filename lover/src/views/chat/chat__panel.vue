<template>
    <div class="chat__panel">
        <top__bar
            :title="oppUserName"
            :backAction="back"
            more=""
        />
        <div ref="chat__panel__content" class="chat__panel__content">
            <div v-for="(item,index) in record" :key="index">
                <chat__item__mine v-if="item.from==common__user.id" :msg="item.msg"/>
                <chat__item__other v-else :msg="item.msg"/>
            </div>
        </div>
        <div class="chat__panel__input">
            <input v-model="local__msg__content" class="chat__panel__input__el" type="text">
            <button class="chat__panel__btn__send" @click="touch__handler">发送</button>
        </div>
        <div v-show="false">users.v</div>
    </div>
</template>

<script>
import top__bar from "@/components/TopBackToolBar";
import chat__item__mine from '@/views/chat/chat__item__mine'
import chat__item__other from '@/views/chat/chat__item__other'

let default__chat__object = {
    nickname: '...'
}
export default {
    components: { top__bar, chat__item__mine, chat__item__other },
    data() {
        return {
            local__msg__list: [],
            local__chat__object:default__chat__object,
            local__msg__content: '',
            common__user: this.$store.state.user,
            users: this.$store.state.users,
            chats: this.$store.state.chat.chats,
            oppUserId: '',
            oppUserName: '加载中...',
        }
    },
    computed: {
        localUserOther() {
            console.log('9999999999999999','检测到users变更')
            console.log(this.users[this.$route.params.uid])
            return this.users[this.$route.params.uid] || {}
        },
        record() {
            for(var i = 0; i < this.chats.length; i++) {
                let chatItem = this.chats[i];
                if(chatItem.uid == this.$route.params.uid) {
                    if(chatItem.msgs.length != this.local__msg__list.length) {
                        return chatItem.msgs
                    }
                }
            }
            return this.local__msg__list;
        },
        chatInfoBySend() { // 用来发送给服务器
            return {
                portrait: this.common__user.portrait,
                msg: this.local__msg__content,
                to: this.oppUserId,
                from: this.common__user.id
            }
        },
    },
    watch: {
        users() {
            console.log('chat__panel -- users -- update')
            this.updateChat()
        },
        chats() {
            console.log('检测到chats有更新')
        },
        record() {
            console.log('检测到record有更新')
            this.scroll__to__Bottom();
        }
    },
    mounted() {
        this.enterChat();
        this.updateChat();
    },
    activated() {
        this.enterChat();
        this.updateChat();
    },
    methods: {
        enterChat() {
            this.hide__main__bar();
            this.scroll__to__Bottom();
        },
        updateChat() {
            if(!this.$route.params.uid) {
                console.log('uid为不存在')
                return;
            }else {
                this.oppUserId = this.$route.params.uid;
                let oppUser = this.$store.state.users[this.oppUserId]
                if(oppUser) {
                    this.oppUserName = oppUser.nickname
                }else {
                    this.cn.c2s.getUserById(this.oppUserId)
                }
            }
            
        },
        clear() {
            this.local__msg__list = [];
            this.local__chat__object = default__chat__object
        },
        back() {
            this.$router.go(-1);
        },
        hide__main__bar() {
            this.$store.state.hasNav = false;
        },
        touch__handler() {
            console.log('点击了发送按钮');
            this.push__msg(this.chatInfoBySend);
            this.cn.data.dispatch('chat/pushChatInfo', this.chatInfoBySend)
            this.cn.c2s.chatMsg(this.chatInfoBySend);
            this.local__msg__content = '';
        },
        push__msg(msgInfo) {
            console.log(msgInfo.msg);
            this.local__msg__list.push(msgInfo);
            this.scroll__to__Bottom();
        },
        scroll__to__Bottom() {
            let div = this.$refs.chat__panel__content;
            setTimeout(function (){
                div.scrollTop = div.scrollHeight;
            },80);
        },
    }
}
</script>

<style scoped>
.chat__panel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.chat__panel__input {
    width: 100%;
    height: 120px;
    line-height: 120px;
    background-color: rgba(90, 90, 90, 1);
    display: flex;
    box-sizing: border-box;
}
.chat__panel__content {
    flex: 1;
    overflow: scroll;
}
.chat__panel__input__el {
    flex: 1;
    font-size: 60px;
}
.chat__panel__btn__send {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 50px;
    border-radius: 5px;
    height: 100%;
    width: 200px;
}
</style>