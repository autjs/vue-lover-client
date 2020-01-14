<template>
    <div class="chat__item">
        <div class="chat__item__head">
            <HeadPortrait/>
        </div>
        <p class="chat__item__content"> {{msg}} </p>
        <div class="chat__item__space"></div>
    </div>
</template>

<script>
import HeadPortrait from '../userInfo/HeadPortrait.vue'

export default {
    components: {
        HeadPortrait
    },
    props: {
        msg:String
    }
}
</script>

<style scoped>
    .chat__item {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
    }
    .chat__item__content {
        /* margin: 30px 20px 0px 20px; */
        word-wrap:break-word;
        flex: 1;
        overflow: auto;
    }
    .chat__item__head {
        min-width: 60px;
        width: 60px;
        height: 60px;
    }
    .chat__item__space {
        width: 10%;
    }
</style>