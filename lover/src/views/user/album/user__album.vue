<template>
  <div ref="user__album" class="user__album">
    <works__photo ref="photo" :info="currentInfo" />
    <div class="user__album__page">
      <span>
        <strong>{{currentIndex}} / {{ workCout }}</strong>
      </span>
    </div>
    <div class="user__album__top">
      <top__bar
        title="我的相册"
        :backAction="back"
        more="删除"
        :moreAction="deleteCurrentWork"
      />
    </div>
  </div>
</template>

<script>
import works__photo from "../works/works__photo";
import top__bar from "@/components/TopBackToolBar";

let TypeInfo = {
  id: '',
  mood: '',
  photo: '',
  time: '',
  uid: ''
}


export default {
  data() {
    return {
      currentIndex: 1,
      currentInfo: TypeInfo,
      workCout: 0
    };
  },
  components: {
    works__photo,
    top__bar
  },
  activated() {
    this.renderInfo();
    this.hide__main__nav();
  },
  computed: {},
  mounted() {
    this.renderInfo();
    this.hide__main__nav();
  },
  methods: {
    renderInfo() {
      let photo = this.$refs.photo;
      photo.HideSayHiEntry()
      
      this.currentIndex = this.$route.params.index + 1;
      this.currentInfo = this.$route.params.info;
      photo.set__info(this.currentInfo);
      this.workCout = this.$route.params.workCout;

      console.log(this.currentInfo);
    },
    swipe__to(index) {
      let _this = this;
      _this.$refs.swipe.goto(index);
    },
    swipe__change(index) {
      this.currentIndex = this.currentIndex = index + 1;
    },
    deleteCurrentWork() {
      let c2s = this.cn.c2s
      let evt = this.cn.data
      let info = this.currentInfo
      if(info) {
        evt.dispatch('work/deleteWork', {uid: info.uid, id: info.id}) 
        c2s.deleteWork(info.id)
        this.back()
      }
    },
    back() {
      this.$router.push('usrinfo')
    },
    hide__main__nav() {
      this.$store.state.hasNav = false;
    }
  }
};
</script>

<style scoped>
@import "../../../../node_modules/cn.v.swipe/dist/cn.v.swipe.css";

.user__album {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}
.user__album__photo {
  width: 30%;
  height: 30%;
}
.user__album__page {
  position: absolute;
  width: 60px;
  height: 30px;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}
.user__album__top {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
}
.user__album__delete {
  width: 40px;
  height: 40px;
}
</style>