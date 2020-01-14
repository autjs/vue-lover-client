<template>
    <div v-show="show" class="loading__wait">
        <div class="loading__wait_box">
            <img ref="ani" class="loading__wait__box__img" src="@/assets/10012.png" alt="loading">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: this.cn.data.loading
        }
    },
    mounted() {
        this.runAnimation()
    },
    activated() {
        this.runAnimation()
    },
    deactivated() {
        this.stopAnimation()
    },
    methods: {
        runAnimation() {
            this.$refs.ani.classList.add('ani__rotation')
        },
        stopAnimation() {
            this.$refs.ani.classList.remove('ani__rotation')
        }
    }
}
</script>

<style scoped>
.loading__wait {
    width: 100%;
    height: 100%;
    position: fixed;
   z-index: 99999;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0;
}
.loading__wait_box {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .7)
}
.loading__wait__box__img {
    width: 60px;
    height: 60px;
    padding: 30px;
}
.ani__rotation{
    -webkit-animation: rotate 3s linear infinite;
    -moz-animation: rotate 3s linear infinite;
    -o-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
}
@-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
    to{-webkit-transform: rotate(360deg)}
}
@-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
    to{-moz-transform: rotate(359deg)}
}
@-o-keyframes rotate{from{-o-transform: rotate(0deg)}
    to{-o-transform: rotate(359deg)}
}
@keyframes rotate{from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
}
</style>