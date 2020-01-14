<template>
    <div class="portrait__mask" @click="$emit('click')">
        <img class='head__portrait' :src="pimg" />
    </div>
</template>

<script>
import defaultPortrait from '@/assets/10007.jpg'
export default {
    props:{
        porImage: {
            type: String,
            default: defaultPortrait
        }
    },
    computed: {
        pimg() {
            return this.porImage || defaultPortrait
        }
    }
}
</script>

<style scoped>
    .portrait__mask, .portrait__mask img {
        width: 100%; height: 100%;
    }
    .portrait__mask {
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        overflow: hidden;
    }
    /* .head__portrait { } */
</style>