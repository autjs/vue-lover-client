<template>
    <div class="chat">
        <div class="chat-title"> 
            <span @click="back">&lt;</span>
            <span>樱桃小丸子</span> 
            <span>...</span>
        </div>
        <div ref="record" class="chat-record">
            <div v-for="(item,index) in messages" :key="index">
                <ChatItem v-if="item.userid==123" class="my-msg" :msg="item.content"/>
                <ChatItem v-else class="other-msg" :msg="item.content"/>
            </div>
        </div>
        <div class="chat-input">
            <button @click="receiveMsg">测试接受消息</button>
            <button @click="sendMsg">测试发送消息</button>
        </div>
    </div>
</template>

<script>

import ChatItem from './chat/ChatItem.vue'

export default {
    components: {
        ChatItem
    },
    data() {
        return {
            messages: [
                // {
                //     time: 89239508523,
                //     content: "",
                //     userid: 123
                // }
            ]
        }
    },
    mounted() {
        this.hide__main__nav();
        this.scrollBottom();
        console.log("mounted");
    },
    updated() {
        this.scrollBottom();
        console.log("updated");
    },
    activated() {
        console.log("activated");
        this.scrollBottom();
        this.hide__main__nav();
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        sendMsg() {
            console.log("发送消息");
            this.messages.push({
                time: new Date().getTime(),
                content: "这是我发送的测试信息",
                userid: 123
            });
            this.scrollBottom();
        },
        receiveMsg() {
            console.log("接收消息");
            this.messages.push({
                time: new Date().getTime(),
                content: "这是接受到的测试信息",
                userid: 456
            });
            this.scrollBottom();
        },
        scrollBottom() {
            var div = this.$refs.record;
            setTimeout(function (){
                div.scrollTop = div.scrollHeight;
            },"100");
        },
        hide__main__nav() {
            this.$store.state.hasNav = false;
        }
    }
}
</script>

<style scoped>
    .chat {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 100;
    }
    .chat-title {
        display: flex;
        justify-content: space-between;
        box-sizing:border-box;
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        height: 50px;
        line-height: 50px;  
        background-color: rgb(78, 78, 78);
        color: rgb(255, 255, 255);
    }
    .chat-record {
        width: 100%;
        height: 400px; 
        flex: 1;
        overflow: scroll;
    }
    .chat-input {
        width: 100%;
        height: 50px;
        background-color: rgb(78, 78, 78);
    }
    .my-msg {
        display: flex;
        flex-direction: row-reverse;
    }
    .other-msg {
        display: flex;
        flex-direction: row;
    }
</style>