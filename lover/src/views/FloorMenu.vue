<template>
    <div class="main-nav">
        <FloorSingleButton msg="首页" src="/home"/>
        <FloorSingleButton msg="聊天" src="/chat__list"/>
        <FloorSingleButton msg="我" src="/usrinfo"/>
    </div>
</template>

<script>
import FloorSingleButton from './floorMenu/FloorSingleButton.vue'

export default {
    name: 'floormenu',
    components: {
        FloorSingleButton
    },
    
}
</script>

<style scoped>
    .main-nav {
        width: 100%;
        height: 260px;
        background-color: rgb(59, 57, 57);
        box-sizing:border-box;
        display: flex;
        justify-content: space-between;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0px;
        padding: 0 41px 0 41px;
        z-index: 99998;
        background: url('~@/assets/main_nav_bg.png') no-repeat;
        background-size: 100% 189px;
        background-position: bottom;
    }
</style>