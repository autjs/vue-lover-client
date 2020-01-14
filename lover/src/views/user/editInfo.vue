<template>
    <div class="user__editor__info">
        <TopBackToolBar
            title="编辑个人信息"
        />
        <!-- <HeadPortrait/> -->

        <!-- <router-link v-for="(item, index) in infos" :key="index" 
            :to="item.link">
            <mInfoBar
                :title="item.title"
                :content="item.content"
            />
        </router-link> -->


        <ul>
            <li class="list-item"
                    v-for="(item, index) in userInfo" :key="index"
                >
                <div class="item-content">
                    <h4>{{item.title}}</h4>
                    <router-link :to="item.link">
                        <p>{{item.content}}<span> &gt; </span></p>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .list-item {
        position: relative;
    }
    .list-item::before { 
        width: 100%;
        border-top: 1PX solid #9e9999;
        content: '';
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .item-content {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
</style>

<script>
// import mInfoBar from '@/views/editUserInfo/InfoBar.vue'
import TopBackToolBar from '@/components/TopBackToolBar.vue'

export default {
    components: {
        // mInfoBar,
        TopBackToolBar
    },
    data(){
        return {
            singleStates: ['单身', '勿扰']
        }
    },
    computed: {
        userInfo: function() {
            
            return [
                {
                    link: 'nickname',
                    title: '昵称',
                    content: this.$store.state.user.nickname,
                },
                {
                    link: 'profile',
                    title: '简介',
                    content: this.$store.state.user.profile
                },
                {
                    link: 'age',
                    title: '年龄',
                    content: this.$store.state.user.age + '岁'
                },
                {
                    link: 'height',
                    title: '身高',
                    content: this.$store.state.user.height + 'cm'
                },
                {
                    link: 'weight',
                    title: '体重',
                    content: this.$store.state.user.weight + 'kg'
                },
                {
                    link: 'distpacker',
                    title: '城市',
                    content: this.$store.state.user.location
                }
            ]
        }
    },
    mounted() {
        this.hide__main__nav();
    },
    activated() {
        this.hide__main__nav();
    },
    methods: {
        hide__main__nav() {
            this.$store.state.hasNav = false;
        }
    }
}
</script>
