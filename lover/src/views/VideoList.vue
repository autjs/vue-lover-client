<template>
    <van-swipe @change="onChange" vertical>
        <van-swipe-item v-for="(item, index) in videoList" :key="index">
            <MyVideoPlayer :ref="item.id"/>
        </van-swipe-item>
    </van-swipe>
</template>
<script>
    import Vue from "vue";
    import MyVideoPlayer from './MyVideoPlayer.vue'
    import {
        Swipe,
        SwipeItem
    } from 'vant';

    Vue.use(Swipe).use(SwipeItem);
 
    export default {
        name: 'videolist',
        components: {
            MyVideoPlayer
        },
        data() {
            return {
                curVideoKey: null,
                videoList: [
                    {
                        id: "100000"
                    },
                    {
                        id: "100001"
                    },
                    {
                        id: "100002"
                    },
                    {
                        id: "100003"
                    }
                ]
            }
        },
        beforeCreate() {
            this.$store.state.hasNav = true
        },
        mounted() {
            if( this.curVideoKey == null )
            {
                this.curVideoKey = this.videoList[0].id;
            }
        },
        methods: {
            onChange(index) {
                console.log('当前 Swipe 索引：' + index);

                // 将上一下正在播放的视频暂停
                if(this.curVideoKey != null)
                {
                    this.$refs[this.curVideoKey][0].Stop();
                }
                
                this.curVideoKey = this.videoList[index].id;
                
                console.log(this);
            }
        }
    }
</script>
<style scoped>
  .van-swipe, .van-swipe-item {
      width: 100%;
      height: 100%;
  }
  .van-swipe {
      touch-action: none;
      -ms-touch-action: none;
  }
</style>