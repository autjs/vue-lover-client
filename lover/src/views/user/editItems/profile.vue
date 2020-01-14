// 修改我的简介
<template>
    <div class="main">
        <TopBar 
            title="修改简介"
            more='保存'
            :moreAction=save
        />
        <div class="content">
            <p>我的简介</p>
            <div class="input-box">
                <textarea v-model="value" class="input" type="text"/>
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
            oldValue: this.$store.state.user.profile,
            value: this.$store.state.user.profile,
            curSize: 0,
            maxSize: 140
        }
    },
    components: {
        TopBar
    },
    methods: {
        save: function() {
            console.log('点击了保存按钮');
            if(this.oldValue == this.value) {
                console.log('无任何修改')
                return ;
            }
            this.cn.c2s.saveUserInfo({
                profile: this.value
            })
            this.$store.state.user.profile = this.value
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
        height: 200px;
        background-color: rgb(173, 174, 175);
        font-size: 24px;
    }
    .input-box {
        margin: 0 auto;
        display: flex;
        padding-bottom: 5px;
        border-bottom: 2px solid #000;
    }
</style>