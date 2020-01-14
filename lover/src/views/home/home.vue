<template>
    <div class="home">
        <common__swipe ref="swipe"/>
    </div>
</template>

<script>
import common__swipe from './../common/common__swipe'
let components = { common__swipe };

export default {
    components,
    mounted() {
        this.show__main__nav();
    },
    activated() {
        this.show__main__nav();
    },
    methods: {
        show__main__nav() {
            this.$store.state.hasNav = true;
        }
    }
}
</script>

// css ...
<style scoped>
    .home {
        width: 100%; height: 100%;
    }
</style>