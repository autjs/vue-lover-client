<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <cnNav v-show="isShowMenu" />
    <wait v-show="showWait"/>
  </div>
</template>
<script>
import cnNav from "./views/FloorMenu";
import wait from '@/views/loading/loading__wait'

export default {
  name: "app",
  components: {
    cnNav, wait
  },
  computed: {
    isShowMenu() {
      return this.$store.state.hasNav;
    },
    showWait() {
      return this.cn.data.state.app.loadingWait
    }
  },
  mounted() {
    if(this.$route.fullPath != '/') {
      this.cn.router.push('/');
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
