<template>
  <div class="works__create">
    <span class="works__create__show">上传一张美美的照片吧^.^</span>
    <div class="works__create__line"></div>
    <div class="works__create__photo">
      <img class="works__create__icon" src="@/assets/10009.png" alt="拍照" />
      <input ref="el__file" class="works__create__file" @change="met__selected" type="file" accept="image/jpeg" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    met__selected() { // 保存选择文件
      let files = this.$refs.el__file.files;
      if(files.length < 1) {
        console.log('没有选择任务文件')
      } else {
        this.$store.state.file = this.$refs.el__file.files[0];
        this.$refs.el__file.value = '';
        this.$router.push('works__upload');
      }
    }
  }
};
</script>

<style scoped>
.works__create {
  width: 100%;
  height: 200px;
  background-color: rgb(239, 141, 141);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.works__create__show {
  height: 200px;
  line-height: 200px;
}
.works__create__line {
  margin: 0 30px;
  width: 1px;
  height: 100%;
  background: darkgray;
}
.works__create__photo {
  width: 160px;
  height: 200px;
  overflow: hidden;
}
.works__create__icon,
.works__create__file {
  position: absolute;
  width: 160px;
  height: 180px;
  margin-top: 10px;
}
.works__create__file {
  opacity: 0;
}
</style>