<template>
    <div class="chat__item">
        <div class="chat__item__head">
            <HeadPortrait/>
        </div>
        <div class="chat__item__content">
            <p> {{msg}} </p>
        </div>
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
        text-align: left;
    }
    .chat__item__content {
       display: flex;
        flex: 1;
        justify-content:flex-start;
        overflow: auto;
        text-align: left
    }
    .chat__item__content p {
        word-wrap:break-word;
        overflow: auto;
        padding: 10px;
        border-radius: 5px;
        margin-left: 5px;
        color: white;
        background-color: #3c9e34;
    }
    .chat__item__head {
        min-width: 140px;
        width: 140px;
        height: 140px;
    }
    .chat__item__space {
        width: 10%;
    }
</style>