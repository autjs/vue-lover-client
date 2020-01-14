<template>
  <div ref="works__upload" class="works__upload">
    <div class="works__upload__preview">
      <img class="works__upload__image" :src="image__png__transparent" alt='' ref='works__upload__image'/>
      <div class="works__upload__topbar">
        <span @click="met__back">取消</span>
        <span @click="met__next">下一步</span>
      </div>
    </div>
    <div v-show="bool__show__mood" class="works__upload__mymood">
      <div class="works__upload__topbar none__bg__color">
        <span @click="met__back">取消</span>
        <span @click="met__save">保存</span>
      </div>
      <textarea v-model="str__mood" class="works__upload__input" type="text" placeholder='我的心情有点美...' autofocus/>
      <span>最大文本数量：{{int__cur}} / {{int__max}}</span>
    </div>
  </div>
</template>

<style scoped>

  .works__upload {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6) url('~@/assets/10013.jpg') no-repeat center center;
    background-size: cover;
  }
  .works__upload__image {
    width: 100%;
    position: relative;
    top: 50%;
    /* margin-top: -50%; */
    transform: translateY(-50%);
  }
  .works__upload__preview {
    color: white;
    height: 100%;
  }
  .works__upload span {
    margin: 20px;
  }
  .works__upload__cancel {
    /* position: absolute; */
    /* left: 0; top: 0; */
  }
  .works__upload__next {
    /* position: absolute; */
    /* right: 0; top: 0; */
  }
  .works__upload__mymood {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #2c3e50;
    width: 100%;
    height: 100%;
  }
  .works__upload__input {
    outline-style: none ;
    border: 0px;
    height: 200px;
    background-color: rgb(173, 174, 175);
    font-size: 24px;
    margin-top: 60px;
    width: 90%;
  }
  .works__upload__topbar {
    background-color: rgb(0, 0, 0, .4);
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .none__bg__color {
    background-color: transparent;
  }
  
</style>

<script>
import png__transparent from '@/assets/transparent.png';
import img__bg from '@/assets/10013.jpg'
// import * as cnCompose from 'cn.compose'
import Amor from 'amor-photo'
export default {
    data() {
        return {
          int__max:140,
          int__cur:0,
          str__mood: '',
          bool__show__mood: false,
          image__png__transparent: png__transparent
        }
    },
    watch: {
      str__mood(val,oldVal) {
        if(val.length > this.int__max) {
          this.str__mood = oldVal;
        } else {
          this.int__cur = val.length;
        }
      }
    },
    activated() {
      let state = this.$store.state;
      state.hasNav = false;
      if( !state.file ) {
        this.met__back();
      } else {
        this.met__fill__image();
      }
    },
    methods: {
      met__back() { // 后退
        this.$router.go(-1); 
      },
      met__next() { // 下一步
        this.bool__show__mood = true;
      },
      met__save() { // 保存
        let _this = this;
        let appHeight = this.$refs.works__upload.clientHeight

        let img = {
          src: this.image__png__transparent,
          y: this.$refs.works__upload__image.offsetTop  - this.$refs.works__upload__image.clientHeight/2,
          w: this.$refs.works__upload__image.width,
          h: this.$refs.works__upload__image.height
        }

        let cvs = {
          w: img.w,
          h: Math.max(img.h, appHeight)
        }

        
        Amor
          .init(cvs.w, cvs.h)
          .assign([
            {src: img__bg, x: 0, y: 0, w: cvs.w, h: appHeight},
            {src: img.src, x: 0, y: img.y, w: img.w, h: img.h}
          ])
          .cut(0,0,cvs.w, appHeight)
          .end((base64) => {
            _this.cn.c2s.publishWork(base64, _this.str__mood);
            _this.str__mood = '';
          })
        
        this.bool__show__mood = false;
        this.met__back();
      },
      met__fill__image() { // 显示图像
        if(!window.FileReader) {
          this.met__back();
        } else {
          let _this = this;
          let fileReader = new FileReader();
          fileReader.onloadend = function() {
              _this.image__png__transparent = this.result;
          }
          fileReader.readAsDataURL(this.$store.state.file);
        }
      }
    }
}
</script>