<template>
    <div class="mod__head">
        <img ref="box" class="mod__head__bg" :src="usr.portrait" alt="">
        <div class="mod__head__blank"></div>
        <div ref="msk" class="mod__head__mask"
            @touchstart="f_msk_mousedown"
            @touchmove ="f_msk_mousemove"
        >
            <img ref="mski" class="mod__head__i" :src="usr.portrait" alt="">
        </div>
        <div class="mod__head__ui">
            <button @click="f_btn_cancel">取消</button>
            <button @click="f_btn_upload">确定</button>
        </div>
    </div>
</template>

<script>

import Amor from 'amor-photo'

export default {
    data() {
        return {
            usr: this.$store.state.user,
            msx: 0,
            msy: 0,
        }
    },
    computed: {  },
    beforeCreate() {
        let g = this.$store.state;
        g.hasNav = false;
        
        console.log('head .. beforeCreate')
    },
    activated() {
        this.f_init()
    },
    created() {
        console.log('created')
    },
    mounted(){
        this.f_init();   
    },
    beforeRouteEnter(to, from, next) {
        console.log('enter')
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('leave')
        next();
    },
    methods: {
        f_init() {
            let o = this.$store.state;
            o.hasNav = false;
            let t = this;
            console.log('head .. mounted')

            if(!o.file) {
                console.log('您还没有选择要上传的图片')
                this.f_btn_cancel();
                return;
            }
            // 显示图片
            if (!window.FileReader) {
                console.log('您的浏览器不支持FileReader');
                this.f_btn_cancel();
                return;
            } 

            let reader = new FileReader()
            reader.onloadend = function () {
                t.usr.portrait = this.result;
                setTimeout(t.f_mask_reset, 16);
            }
            reader.readAsDataURL(o.file) // 这里是最关键的一步，转换就在这里
        },

        // 重置mask的位置
        f_mask_reset() {
            let refs = this.$refs;
            let msk = refs.msk;
            let sw = refs.box.clientWidth;
            let mw = refs.msk.clientWidth;
            let xx = sw - mw >> 1;
            msk.style.left = xx + 'px';

            let sh = refs.box.clientHeight;
            let mh = refs.msk.clientHeight;
            let yy = sh - mh >> 1;
            if(yy < 0) { yy = 0 }
            msk.style.top = yy + 'px';
        },

        f_msk_mousedown(evt) {
            evt = evt || (evt = window.event);
            if(evt.touches) {
                let t = evt.touches[0];
                this.msx = t.clientX;
                this.msy = t.clientY;
                console.log('mousedown %s , %s', this.msx, this.msy);
            }
            
        },
        f_msk_mousemove(evt) {
            evt = evt || (evt = window.event);
            if(evt.touches) {
                let t = evt.touches[0];
                let ox = t.clientX - this.msx;
                let oy = t.clientY - this.msy;
                this.msx = t.clientX;
                this.msy = t.clientY;
                let m = this.$refs.msk;
                
                let tx = m.offsetLeft + ox;
                if(tx < 0 || tx > this.$refs.box.clientWidth - m.clientWidth) return;
                let ty = m.offsetTop + oy;
                if(ty < 0 || ty > this.$refs.box.clientHeight - m.clientHeight) return;
                m.style.left = tx + 'px';
                m.style.top = m.offsetTop + oy + 'px';
                console.log('滑动距离： %s , %s', ox, oy);
                console.log('位置 %s , %s', m.left, m.top);
            }
        },
        f_btn_cancel() {
            console.log('cancel..');
            let data = this.$store.state;
            data.file = null;  // 清空数据
            this.$router.go(-1);
        },
        f_btn_upload() {
            let _this = this;
            console.log('upload...')
            let refs = this.$refs;
            
            let a_init = { w: refs.box.clientWidth, h: refs.box.clientHeight}
            let a_src  = { src: refs.box.src, x: 0, y: 0, w: a_init.w, h: a_init.h }
            let a_cut  = { x: refs.msk.offsetLeft, y: refs.msk.offsetTop, w: refs.msk.clientWidth, h: refs.msk.clientWidth > a_init.h ? a_init.h : refs.msk.clientWidth} 
            
            Amor
                .init(a_init.w, a_init.h)
                .src(a_src.src, a_src.x, a_src.y, a_src.w, a_src.h)
                .cut(a_cut.x, a_cut.y, a_cut.w, a_cut.h)
                .end((base64) => {
                    _this.cn.c2s.saveUserPortrait(base64)
                    _this.f_btn_cancel()
                    _this.$store.dispatch('user/savePortrait', base64)
                })
           
        },
    }
}
</script>

<style scoped>
    .mod__head { width: 100%; height: 100%; overflow: hidden;}
    .mod__head__bg { width: 100%; }
    .mod__head__blank { 
        position: fixed; width: 100%; height: 100%; 
        background-color: rgba(0, 0, 0, .8);
        top: 0; left: 0;
    }
    .mod__head__mask { 
        width: 240px; height: 240px;
        position: fixed;
        top: 0; left: 0;
        border-radius: 50%; -moz-border-radius: 50%; -webkit-border-radius: 50%;
        overflow: hidden;
    }
    .mod__head__i {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
    }
    .mod__head__ui {
        position: fixed;
        bottom: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
    .mod__head__ui button{
        margin: 0px 30px;
        width: 160px;
        height: 80px;
        font-size: 50px;
        color: slategray;
    }
    .mod__head__canvas {
        position: fixed;
        top: 100px; left: 0;
        width: 375px; height: 500px;
    }
</style>