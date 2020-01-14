<template>
  <div class="distpacker">
    <CityPacker v-on:onSave="back"></CityPacker>
  </div>
</template>
<script>
import CityPacker from "./../../common/picker/CityPicker";

let components = { CityPacker }; // { topBar, BestCity }
export default {
  components: components,
  computed: {
    city() {
      return this.$store.state.user.location;
    }
  },
  beforeCreate() {
    this.$store.state.hasNav = false;
  },
  activated() {
    this.$store.state.hasNav = false;
  },
  methods: {
    back(val) {
      console.log(val);
      if (val === this.city) {
        this.$router.go(-1);
        return
      }
      
      let doc = { location: val }
      this.cn.c2s.saveUserInfo(doc);
      this.$store.dispatch('user/fillData', doc)
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.distpacker {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  text-align: left;
  height: 100%;
}
</style>