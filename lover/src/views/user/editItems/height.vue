
<template>
  <div class="edit-height">
    <TopBar title="修改身高" more="保存" :moreAction="save" />
    <van-picker :columns="columns" :default-index="defaultIndex" @change="onChange" />
  </div>
</template>


<script>
import TopBar from "@/components/TopBackToolBar.vue";

export default {
  data() {
    return {
      defaultIndex: 30, //this.$store.state.user.age,
      value: 0
    };
  },
  components: {
    TopBar
  },
  computed: {
    columns() {
      let arr = [];
      for (let i = 140; i < 200; i++) {
        arr.push(i + "cm");
      }
      return arr;
    }
  },
  methods: {
    onChange(picker, value, index) {
      console.log("当前值: %s, 当前索引： %s", value, index);
      this.defaultIndex = index;
      this.value = parseInt(value.split("c")[0]);
    },
    save() {
      this.cn.c2s.saveUserInfo({
        height: this.value
      });

      this.$store.state.user.height = this.value;
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.edit-height {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.edit-height >>> .van-picker {
  flex: 1;
  overflow: hidden;
}
</style>