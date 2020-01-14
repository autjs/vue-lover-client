<template>
    <div class="toolbar">
        <span v-if="backAction != null" @click="backAction">&lt;</span>
        <span v-else @click="toBackView">&lt;</span>
        <span>{{title}}</span> 
        <span @click="toMoreView">{{more}}</span>
    </div>
</template>

<script>
export default {
    props: {
        backAction: {type: Function, default: null},
        title: String,
        more: {type: String, default: '...'},
        moreAction: Function
    },
    methods: {
        toBackView() {
            this.$router.go(-1)
        },
        toMoreView() {
            if(this.moreAction) {
                this.moreAction();
            }
            console.log('点击了 toMoreView 按钮')
        }
    }
}
</script>
<style scoped>
    .toolbar {
        display: flex;
        justify-content: space-between;
        box-sizing:border-box;
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        height: 120px;
        line-height: 120px;  
        background-color: rgba(78, 78, 78,.6);
        color: rgb(255, 255, 255);
    }
</style>