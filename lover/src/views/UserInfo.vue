<template>
  <div class="user__info">
    <div class="editor">
      <router-link to="editInfo">
        <img class="editor-button" src="../assets/10004.png" alt />
      </router-link>
    </div>
    <HeadPortrait 
      class="usr__info__portrait" 
      @click="showPortrait" 
      :porImage='usr.portrait'
      />
    <div class="transverse">
      <p>{{nickname}}</p>
    </div>
    <div class="transverse full-w wrap">
      <p class="item-info">{{single}}</p>
      <p class="item-info">{{age}}</p>
      <p class="item-info">{{height}}</p>
      <p class="item-info">{{weight}}</p>
    </div>
    <!--  我的相册 -->
    <div class="user__info__works__container full-w">
      <works__create />
      <div class="user__info__works__mine__works">
        <works__photo
          class="user__info__little__works"
          v-for="(item, index) in mineWorks"
          :key="item.id"
          :info="item"
          @click.native="click__photo(index,item)"
          :show__msg="false"
          :sayhi='false'
        />
      </div>
    </div>
    <div class="user-info-baseline">-------我的是有底线的-------</div>
    <div v-show="bool_show_upload" class="usr__info__head__upload">
      <a href="javascript:;" class="file">
        选择文件
        <input type="file" ref="el_input" @change="met_select" accept="image/jpeg" class="usrinfo-selectinput"/>
      </a>
      <button @click="f_cancel" >取消</button>
    </div>
    <div v-show="false">{{localWorksSize}}{{typeof curWorks}}{{mineWorks.length}}</div>
  </div>
</template>

<script>
import HeadPortrait from "./userInfo/HeadPortrait.vue";
import works__create from "./user/works/works__create";
import works__photo from "./user/works/works__photo";

export default {
  data() {
    return {
      singleState: ["单身", "勿扰"],
      nickname: this.$store.state.user.nickname,
      usr: this.$store.state.user,
      bool_show_upload: false,
      work: this.$store.state.work,
      mineWorks: [],
    };
  },
  components: {
    HeadPortrait,
    works__create,
    works__photo
  },
  computed: {
    age() {
      return this.usr.age + "岁";
    },
    height() {
      return this.usr.height + "cm";
    },
    weight() {
      return this.usr.weight + "kg";
    },
    single() {
      return this.singleState[this.usr.singleIndex];
    },
    localWorksSize() {
      return this.work.worksSize;
    },
    curWorks() {
      return this.work.works[this.usr.id]
    }
  },
  watch: {
    curWorks() {
      console.log('bef-----------mineworks ', this.mineWorks)
      let arr = this.formatArray(this.curWorks || [])
      this.$set(this, 'mineWorks', arr)
      console.log('aft----------------->mineworks ', this.mineWorks)
    }
  },
  activated() {
    this.show__main__nav();
  },
  mounted() {
    this.requestWorks();
    this.show__main__nav();
  },
  methods: {
    showPortrait() {
      this.hide__main__nav();
      this.bool_show_upload = true;
    },
    f_upload() {
      this.show__main__nav();
      this.bool_show_upload = false;
    },
    f_cancel() {
      this.show__main__nav();
      this.bool_show_upload = false;
    },
    met_select() {
      let o = this.$store.state;
      let ipter = this.$refs.el_input;
      if (ipter.files.length == 0) {
        ipter.value = "";
        return;
      }
      this.f_upload();
      o.file = ipter.files[0];
      ipter.value = "";
      this.$router.push({ name: "head" });
    },
    click__photo(photoIndex, itemInfo) {
      if (itemInfo.transparent) {
        return;
      }
      this.$router.push({
        name: "user__album",
        params: {
          index: photoIndex,
          info: itemInfo,
          workCout: this.mineWorks.length
        }
      });
    },
    formatArray(arr) {
      let _arr = arr.slice(0)
      let remainder = _arr.length % 3;
      if (remainder != 0) {
        for (var i = 0; i < 3 - remainder; i++) {
          _arr.push({ transparent: true });
        }
      }
      _arr = _arr.filter((item, index, self) => {
        let count = 0
        for(let i = 0; i < self.length; i++) {
          if(self[i].id == item.id) {
            count++
          }
        }
        return count < 2
      })
      return _arr
    },
    requestWorks() {
      this.cn.c2s.mineWorks();
    },
    show__main__nav() {
      this.$store.state.hasNav = true;
    },
    hide__main__nav() {
      this.$store.state.hasNav = false;
    }
  }
};
</script>

<style scoped>
.user__info {
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: scroll;
}
.id-status {
  margin-left: 10px;
}
.item-info {
  width: 50%;
}

.transverse {
  display: flex;
  flex-direction: row;
}
.full-w {
  width: 100%;
}
.wrap {
  flex-wrap: wrap;
}

/* 编辑按钮 */
.editor {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.editor-button {
  width: 100px;
  height: 100px;
  margin: 40px 40px 0 0;
}

/*查看头像相关*/
.usr-info-popup {
  width: 100%;
}
.popup-head {
  width: 100%;
  height: auto;
}
.usr >>> .van-overlay {
  background-color: rgba(0, 0, 0, 1);
}
.usr__info__head__upload {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.usr__info__head__upload button {
  height: 100px;
  font-size: 50px;
}
.usr__info__file {
  opacity: 1;
  width: 100%;
  height: 100%;
}
/* .usr__info__file_skin { position:absolute;} */

/* network */
.file {
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 100px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
.usr__info__portrait {
  width: 300px;
  height: 300px;
}
.user__info__works__container {
  width: 100%;
}
.user__info__works__mine__works {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: center;
}
user__info__works__mine__works:after {
  content: "";
  flex: auto;
}
.user__info__little__works {
  width: 30%;
  height: 30%;
  margin: 1%;
}
.user-info-baseline {
  margin-top: 30px;
  margin-bottom: 300px;
  color: darkgray;
}
.usrinfo-selectinput {
  height: 100%;
}
</style>