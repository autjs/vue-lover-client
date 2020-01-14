<template>
    <div class="chat__list">
        <div v-if="m__my__friends.length != 0">
            <ul>
                <li  v-for="(item, index) in m__my__friends" :key="index">
                    <chatBar :userId='item.uid'/>
                </li>
            </ul>
        </div>
        <div v-else>
            <span class="chat__list__empty">您还没有聊天对象,加油哦</span>
        </div>
    </div>
</template>

<style scoped>
    .chant__list__user__bar {
        width: 100%;
        height: 100px;
        border: 2px solid rgba(red, green, blue, alpha)
    }
    .chat__list__empty {
        display: block;
        padding-top: 100px;
    }
</style>

<script>
import chatBar from './chat__list__bar'

export default {
    components: { chatBar },
    data() {
        return {
            chats: this.$store.state.chat.chats
        }
    },
    computed: {
        m__my__friends() {
            console.log('chat__list 列表有更新', this.chats)
            return this.chats;
        }
    },
    watch: {
        chats() {
            console.log('chat__list.vue --> 检测到chat 列表有变更', this.chats)
        }
    },
    mounted() {
        console.log('初始化 chat.vue成功')
        // this.cn.c2s.chat();
    },
    activated() {
        this.$store.state.hasNav = true;
    }
}
</script>