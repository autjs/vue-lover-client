<template>
    <div class="main">
        <TopBar 
            title="修改昵称"
            more='保存'
            :moreAction=save
        />
        <div class="content">
            <p>我的昵称</p>
            <div class="input-box">
                <input v-model="value" class="input" type="text">
                <img @click="clear" class="clear" src="@/assets/10005.jpg">
            </div>
            <p>{{curSize}}/{{maxSize}}</p>
        </div>
    </div>
</template>
<script>
import TopBar from "@/components/TopBackToolBar.vue";
export default {
    data() {
        return {
            oldValue: this.$store.state.user.nickname,
            value: this.$store.state.user.nickname,
            curSize: 0,
            maxSize: 20
        }
    },
    components: {
        TopBar
    },
    methods: {
        save: function() {
            var reg = /^[\u4e00-\u9fa5]+|[a-zA-Z0-9]+$/;
            if (reg.test(this.value)==false) {
                console.log('昵称中存在无效字符');
                return;
            }

            if(this.value == this.oldValue) {
                console.log('没有任何修改');
                return;
            }
            this.cn.c2s.saveUserInfo({
                nickname: this.value
            })
            this.$store.state.user.nickname = this.value;
            this.$router.go(-1)
        },
        clear: function() {
            console.log('点击了clear')
            this.value = ''
        }
    },
    watch: {
        value(nv,ov) {
            if(nv == ov) {
                return
            }
            if(nv.length > this.maxSize) {
                this.value = ov;
                return;
            }
            console.log(nv)
            this.curSize = nv.length
        }
    }
}
</script>
<style scoped>
    .main {
        text-align: left;
    }
    .content {
        width: 90%;
        margin: 0 auto;
    }
    .clear {
        width: 24px;
        height: 24px;
    }
    .input {
        outline-style: none ;
        border: 0px;
        flex: 1;
        /* background-color: rgb(190, 191, 192); */
        font-size: 24px;
    }
    .input-box {
        margin: 0 auto;
        display: flex;
        padding-bottom: 5px;
        border-bottom: 2px solid #000;
    }
</style>