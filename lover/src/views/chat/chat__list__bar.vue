<template>
    <div class="chat__list__bar" @click="clickBar">
        <portrait class="chat__list__bar__portrait" :porImage='userPortrait'/>
        <div class="chat__list__bar__content">
            <div class="chat__list__bar__nickname"> {{userNickname}} </div>
            <div class="chat__list__bar__second">
                <span>{{userAge}}</span>
                <span>{{userHeight}}</span>
            </div>
        </div>
        <div v-show="false">{{users.v}}</div>
    </div>
</template>

<script>
import portrait from '@/views/userInfo/HeadPortrait'
export default {
    components:{portrait},
    data() {
        return {
            users: this.$store.state.users,
            userPortrait: '',
            userAge: '加载中...',
            userHeight: '加载中...',
            userNickname: '加载中...',
        }
    },
    props: {
        userId: {
            type: String,
            default: '',
        }
    },
    watch: {
        users() {
            console.log('chat__list__bar -- users -- update')
            this.updateUserInfo();
        }
    },
    mounted() {
        console.log('chat__list__bar --> mounted')
        this.updateUserInfo()
    },
    activated() {
        console.log('chat__list__bar --> activated')
        this.updateUserInfo()
    },
    methods: {
        updateUserInfo() {
            console.log('chat__list__bar --> updateUserInfo')
            let user = this.$store.state.users[this.userId]
            if(!user) {
                this.cn.c2s.getUserById(this.userId)
            }else {
                this.userAge = user.age + '岁';
                this.userHeight = user.height + ' cm';
                this.userPortrait = user.portrait;
                this.userNickname = user.nickname;
            }
        },
        clickBar() {
            console.log('click chat__list__bar', this.userId)
            this.$router.push({name: 'chat__panel', params: {
                uid:this.userId
            }})
        }
    }
}
</script>

<style scoped>
.chat__list__bar {
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    box-sizing: border-box;
    border:10px solid darkslategray;
    border-radius:20px;
    margin: 0 auto;
    margin-top: 60px;
    overflow: hidden;
}
.chat__list__bar__portrait {
    height: 160px;
    width: 160px;
}
.chat__list__bar__content {
    margin-left: 20px;
    flex: 1;
    text-align: left;
    height: 100%;
}
.chat__list__bar__content span {
    margin-right: 20px;
    font-size: 50px;
    color: #a09b4b;
}
.chat__list__bar__nickname {
    font-size: 60px;
}
.chat__list__bar__second {
    margin-top: 5px;
}
</style>