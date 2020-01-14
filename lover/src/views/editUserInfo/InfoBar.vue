<template>
    <div class="user__editor__info__bar">
            <div class="box">{{title}}</div>
            <div class="box">
                <span>{{content}}</span>
                <span class="tips">&gt;</span>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
    }
}
</script>

<style scoped>
    .user__editor__info__bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .box {
        margin: .2rem;
    }
    .tips {
        margin-left: .2rem;
    }
</style>