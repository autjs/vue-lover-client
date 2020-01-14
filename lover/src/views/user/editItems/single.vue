<template>
    <div class="single">
        <TopBar 
            title="修改单身状态"
            more='保存'
            :moreAction=save
        />
        <div class="single-state-bar" v-for="(item, index) in states" :key="index" @click="select(index)">
            <label v-if="index==singleIndex" class="single-state-title">
                <strong>{{item}}</strong>
            </label>
            <label v-else class="single-state-title">
                {{item}}
            </label>
            
            <img v-if="index==singleIndex" class="single-state-img" src="../../../assets/10006.png" alt="">
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/TopBackToolBar.vue";
export default {
    data() {
        return {
            states: ['单身', '勿扰'],
            singleIndex: this.$store.state.user.singleIndex
        }
    },
    components: {
        TopBar
    },
    methods: {
        select(index){
            this.singleIndex = index;
            console.log('点击了第' + index + '个')
        },
        save() {
            this.cn.c2s.saveUserInfo({
                singleIndex: this.singleIndex
            })
            this.$store.state.user.singleIndex = this.singleIndex
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .single-state-bar {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }
    .single-state-title {
        flex: 1;
    }
    .single-state-img {
        width: 24px;
        height: 24px;
    }
</style>