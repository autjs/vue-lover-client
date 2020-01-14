<template>
    <div class='register'>
        <div class="logo">
            <img src="../assets/10002.png" alt="">
        </div>
        <div class="infobox">
            <div class="phone input-box">
                <input v-model="phone_num" type="text" :change="check_phone()" placeholder="请输入手机号">
            </div>
            <div class="pwd input-box">
                <input ref="pwd_input" type="password" placeholder="请输入密码">
            </div>
        </div>
        <div class="errtips"> {{err}} </div>
        <div class="register-button" @click="requestLogin">登录</div>
        <div>还未注册？<span class="toregister" @click="toRegisterPage">立即注册</span></div>
        <span v-show="completed"></span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            phone_num: "",
            key_num: "",
        }
    },
    computed: {
        err() {
            let _err = this.$store.state.login.err;
            if(_err != '') {
                this.delayClearErr()
            }
            return _err;
        },
        completed() {
            let _completed = this.$store.state.login.completed;
            if(_completed == true) {
                this.toInitPage()
            }
            console.log('login.vue ---> 登录状态 %s', _completed)
            return _completed;
        }
    },
    mounted() {
        this.checkLoginStatus()
    },
    activated() {
        this.checkLoginStatus()
    },
    methods: {
        checkLoginStatus() {
            if(this.completed) {
                this.toInitPage()
            }else {
                this.hideMainNav()
            }
        },
        //限制
        check_phone: function(){
            // this.check(this.phone_num)
             var tempNum = this.phone_num;
            tempNum = tempNum.replace(/[^\d]/g, ''); // 清除“数字”和“.”以外的字符
            if (tempNum.indexOf('.') < 0 && tempNum != '') {
                // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
                tempNum = parseInt(tempNum);
            }
            this.phone_num = tempNum + '';
        },
        check_key: function(){
            // this.check(this.key_num)
            var tempNum = this.key_num;
            tempNum = tempNum.replace(/[^\d]/g, ''); // 清除“数字”和“.”以外的字符
            if (tempNum.indexOf('.') < 0 && tempNum != '') {
                // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
                tempNum = parseInt(tempNum);
            }
            this.key_num = tempNum + '';
        },
        requestLogin() {
            this.cn.c2s.login(this.phone_num, this.$refs.pwd_input.value);
        },
        delayClearErr() {
            let _this = this;
            setTimeout(() => {
                _this.$store.dispatch('login/clearErr')
            }, 2000);
        },
        toInitPage() {
            this.cn.router.replace('/');
        },
        toRegisterPage() {
            this.cn.router.replace('register');
        },
        hideMainNav() {
            this.$store.state.hasNav = false
        }
    }
}
</script>

<style scoped>
    .logo {
        /* background-color: rgb(206, 119, 119); */
        margin: 30px;
    }
    .infobox {
        text-align: left;
        padding: 0px 60px;
    }
    input {
        outline-style: none;
        border: 0px;
        border-radius: 3px;
        padding: 7px 0px;
        width: 100%;
        font-size: 18px;
        font-family: "Microsoft soft";
    }
    .phone {
        height: 50px;
        /* background-image: url('../assets/10003.png'); */
        background-size: 10%;
        background-repeat: no-repeat;
        /* background-color: rgb(209, 208, 207); */
        line-height: 50px;
    }
    .pwd {
        height: 50px;
        /* background-image: url('../assets/10003.png'); */
        background-size: 10%;
        background-repeat: no-repeat;
        /* background-color: rgb(209, 208, 207); */
        line-height: 50px;
    }
    
    .register-button {
        margin: 60px;
        height: 50px;
        line-height: 50px;
        color: rgb(255, 255, 255);
        background-color: rgb(230, 55, 108);
    }

    .input-box {
        border: 2px solid rgb(231, 229, 229);
        margin-top: 5px;
    }
    .toregister {
        color: rgb(179, 70, 27);
    }
    .errtips {
        color: #ff0000;
    }
</style>