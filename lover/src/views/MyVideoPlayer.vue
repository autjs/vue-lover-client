<template>
    <div class='demo'>
         <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions0">
         </video-player>
    </div>
</template>

<script>
    export default {
        name: 'MyVideoPlayer',
        props: {
            msg: String
        },
        data(){
            return{
                playerOptions0: {
                        //播放速度
                        playbackRates: [0.5, 1.0, 1.5, 2.0],
                        //如果true,浏览器准备好时开始回放。
                        autoplay: false,
                        // 默认情况下将会消除任何音频。
                        muted: false,
                        // 导致视频一结束就重新开始。
                        loop: false,
                        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                        preload: 'auto',
                        language: 'zh-CN',
                        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        aspectRatio: '16:9',
                        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        fluid: true,
                        sources: [{
                            //类型
                            type: "video/mp4",
                            //url地址
                            src: 'http://v.weishi.qq.com/shg_931453670_1047_218fc30f866e4f6295a3d1e1d9b3vide.f20.mp4'
                        }],
                        //你的封面地址
                        poster: '',
                        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        notSupportedMessage: '此视频暂无法播放，请稍后再试',
                        controlBar: {
                            timeDivider: false,
                            durationDisplay: false,
                            remainingTimeDisplay: false,
                            //全屏按钮
                            fullscreenToggle: false 
                        }
                }
            }
        },
        computed: {
          player() {
            return this.$refs.videoPlayer.player
          }
        },
        
         methods:{
          Stop() {
              console.log("调用了Stop()方法");
              this.$refs.videoPlayer.player.pause();
          }
        },
    }
</script>

<style scoped>
    .demo{
        height: 100%;
        width: auto;
        overflow: hidden;
        background: rgb(0, 0, 0);
    }
    .video-player {
        width: 100%;
        height: 100%;
    }
    .vjs-control-bar {
        display: none;
    }
</style>