<template>
  <div ref="works__photo" class="works__photo full">
    <img class="works__photo__photo full__x" :src="m__photo" alt />
    <div class="works__photo__right__menu">
      <img v-show="showSayHi" class="works__photo__portrait ani__cake" @click="met__touchSayHi" src="@/assets/10011.png">
    </div>
    <div v-show="show__msg" class="works__photo__left__bottom">
      <p>
        <strong>{{ m__mood }}</strong>
      </p>
      <!-- <p> <strong>{{ m__time }}</strong> </p> -->
    </div>
  </div>
</template>

<script>
import img_loading from "./../../../assets/10012.jpg";

export default {
  data() {
    return {
      m__photo: img_loading,
      m__time: "",
      m__mood: "",
      m__uid: '',
      // m__nickname: '',
      local__users: this.$store.state.users,
      local__getter: this.$store.getters,
      showSayHi: true,
    };
  },
  props: {
    info: Object,
    show__msg: {
      type: Boolean,
      default: true
    },
    sayhi: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    local__users() {
      console.log('users信息改变了');
    }
  },
  mounted() {
    this.set__info(this.info);
  },
  activated() {
    this.set__info(this.info);
  },
  methods: {
    set__info(info) {
      this.showSayHi = this.sayhi;
      if (info && info.photo) {
        this.m__photo = info.photo;
        this.m__time =
          info.time.length > 10 ? info.time.slice(0, 10) : info.time;
        this.m__mood = info.mood;
        this.m__uid = info.uid;
        // console.log(info);
      } else {
        this.m__photo = img_loading;
        this.m__time = "";
        this.m__mood = "";
      }
      if(info) {
        if(info.transparent) {
          this.$refs.works__photo.style.opacity = 0;
        }else {
          this.$refs.works__photo.style.opacity = 1;
        }
      }
    },
    met__touchPortrait() {
     
    },
    met__touchSayHi() {
      console.log('...')
      if(this.m__uid) {
        let chatInfo = {
          uid: this.m__uid,
          nickname: this.m__nickname || ''
        };
        this.$router.push({name: 'chat__panel', params: chatInfo})
      }
    },
    hide__main__nav() {
      this.$store.state.hasNav = false;
    },
    HideSayHiEntry() {
      this.showSayHi = false
    },
    ShowSayHiEntry() {
      this.showSayHi = true
    }
  }
};
</script>

<style scoped>
.full {
  width: 100%;
  height: 100%;
}
.full__x {
  width: 100%;
}

.works__photo {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px/5px;
  position: relative;
}

.works__photo__right__menu {
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -50%;
}
.works__photo__left__bottom {
  position: absolute;
  color: #e4deab;
  text-align: left;
  left: 0px;
  bottom: 300px;
  background-color: rgba(3, 3, 3, 0.4);
  padding: 60px;
  max-width: 80%;
  overflow-wrap: break-word;
  word-break: break-all;
  max-height: 30%;
  overflow: hidden;
  font-size: 40px;
}
.works__photo__left__bottom p {
  margin: 2px;
}
.works__photo__portrait {
  width: 200px;
  height: 200px;
  margin: 10px;
}

.ani__cake{animation:rock 3s 0s infinite;-webkit-animation:rock 3s 0s infinite;transform-origin:bottom;-webkit-transform-origin:bottom;}

@keyframes rock
{
    0%, 65%{ 
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
    70% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    75% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    80% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    85% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    90% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    95% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    100% {  
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
}

@-webkit-keyframes move
{
    0%, 65%{ 
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
    70% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    75% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    80% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    85% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    90% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    95% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    100% {  
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
}
</style>