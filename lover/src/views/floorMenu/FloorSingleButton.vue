<template>
    <div class="main-nav-btn">
        <!-- <a href="#"  rel="noopener"> {{msg}} </a> -->
        <router-link :to="src" exact>{{msg}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'FloorSingleButton',
    props: {
    msg: String,
    src: String
  }
}
</script>

<style scoped>
    .main-nav-btn {
        width: 260px;
        height: 241px;
        display: flex;
        background: url('~@/assets/main_nav_btn_bg.png');
        background-size: auto 100%;
        font-size: 72px;
        align-items:center;
        justify-content: center;
    }
    .main-nav-btn a {
        color: #000;
        text-decoration:none;
        margin-top: 70px;
    }
    .main-nav-btn a:active {
        color: crimson;
    }
</style>