<template>
    <div class="main">
        <TopBar :title="mTitle"/>
        <input type="text" placeholder="">
    </div>
</template>
<script>
import TopBar from "../../components/TopBackToolBar.vue";
export default {
    props: {
        title: String
    },
    components: {
        TopBar
    },
    computed: {
        mTitle: function() {
            var ret = this.$route.query
            return ret.title;
        }
    }
}
</script>