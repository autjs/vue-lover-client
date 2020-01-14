<template>
  <div ref="common__swipe" class="common__swipe common___full">
    <CardSwipe  @change="swipe__change" class="common___full">
        <CardSwipeItem v-for="(item, index) in mine__arr" :key="index">
          <div class="common___full">
            <works__photo ref="photo" :info="item" />
          </div>
        </CardSwipeItem>
    </CardSwipe>
    <!-- <div v-show='touch__enable' class="common__swipe__prevent" ></div> -->
  </div>
</template>
<script>
// 导入
import works__photo from "./../user/works/works__photo";
import { CardSwipe, CardSwipeItem } from "@eshengsky/vue-card-swipe";

export default {
  // 注册组件
  components: {
    works__photo,
    CardSwipe,
    CardSwipeItem
  },

  data() {
    return {
      curVideoKey: null,
      mine__arr: [{},{},{},{},{}], // 只在初始化有用。。默认创建多少个
      mine__can__enable: [false,false,false,false,false], // 默认是不能滑动的，当有数据之后才能滑动，数量要和mine__arr保持一致
      app_recommend: this.$store.state.app.recommend,
    };
  },
  watch: {
    app_recommend() {
      console.log('7777777777777777777', '检测到推荐列表有更新')
      this.fillData()
    }
  },
  mounted() {
    console.log('7777777777777777777mt', this.mine__arr)
  },
  activated() {
    console.log('7777777777777777777at', this.mine__arr)
    let info = this.mine__arr[0];
    if(info && info.photo) {
      let len = this.mine__arr.length;
      for(var i=0; i< len; i++) {
        this.$refs.photo[len-1-i].set__info(this.mine__arr[i]);
      }
    }
  },
  methods: {
    swipe__change(lastIndex, index) {
      console.log('swipe__change: %s  %s', lastIndex, index);
      let ctrlIndwx = lastIndex -1;
      this.mine__can__enable[ctrlIndwx] = false;
      this.fillData();
    },
    fillData() {
      this.request__photos();
      let len = this.mine__can__enable.length;
      for(var i = 0; i < len; i++) {
        if( !this.mine__can__enable[i] ) {
          let info = this.app_recommend.shift();
          if(info) {
            this.$refs.photo[len-1-i].set__info(info);
            this.mine__can__enable[i] = true;
            this.mine__arr[i] = info;
          }
        }
      }
    },
    request__photos() {
      if(this.app_recommend.length < 5) {
        this.cn.c2s.recommend();
      }
    }
  }
};
</script>
<style scoped>
/* @import "vue-swipe/dist/vue-swipe.css"; */

/* common */
.common___full {
  width: 100%;
  height: 100%;
}

/* mine */
.common__swipe {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.common__swipe__sidle {
  width: 100%;
  height: 100%;
}

.common__swipe__item__box {
  width: 100%;
  height: 100%;
}

/* 蒙版 -- 阻止事件传递 */
.common__swipe__prevent {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
  background-color: rgba(0, 0, 0, .5)
}
</style>