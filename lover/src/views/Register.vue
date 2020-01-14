
<template>
  <div class="register">
    <div class="logo">
      <img src="../assets/10002.png" alt />
    </div>
    <div class="infobox">
      <div class="phone input-box">
        <input v-model="phone_num" type="text" :change="check_phone()" placeholder="请输入手机号" />
      </div>
      <div class="key input-box">
        <input v-model="key_num" type="text" :change="check_key()" placeholder="请输入验证码" />
        <span>| 获取验证码</span>
      </div>
      <div class="pwd input-box">
        <input ref="pwd_input" type="password" placeholder="请输入密码" />
      </div>
    </div>
    <div class="errtips">{{err}}</div>
    <div class="register-button" @click="register">注册</div>
    <div>
      已有账号？
      <span class="tologin" @click="toLogin">立即登录</span>
    </div>
    <span v-show="false">{{login}} {{success}}</span>
  </div>
</template>

<script>
// TODO: 如何使用微信登录？ 是否需要微信登录，如何使用手机号登录

// TODO: 统一的UI样式


export default {
  data() {
    return {
      phone_num: "",
      key_num: ""
    };
  },

  computed: {
    err() {
      let _err = this.$store.state.login.regErr;
      if (_err != "") {
        this.delayClearErr();
      }
      return _err;
    },
    login() {
      return this.$store.state.login.completed;
    },
    success() {
      let _suc = this.$store.state.login.regSuccess;
      if (_suc == true) {
        this.toInitPage();
      }
      return _suc;
    }
  },

  activated() {
    this.checkLoginStatus();
  },

  methods: {
    checkLoginStatus() {
      if (this.login) {
        this.toInitPage();
      } else {
        this.hideMainNav();
      }
    },
    //限制
    check_phone: function() {
      // this.check(this.phone_num)
      var tempNum = this.phone_num;
      tempNum = tempNum.replace(/[^\d]/g, ""); // 清除“数字”和“.”以外的字符
      if (tempNum.indexOf(".") < 0 && tempNum != "") {
        // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        tempNum = parseInt(tempNum);
      }
      this.phone_num = tempNum + "";
    },
    check_key: function() {
      var tempNum = this.key_num;
      tempNum = tempNum.replace(/[^\d]/g, ""); // 清除“数字”和“.”以外的字符
      if (tempNum.indexOf(".") < 0 && tempNum != "") {
        // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        tempNum = parseInt(tempNum);
      }
      this.key_num = tempNum + "";
    },

    register: function() {
      // 点击注册按钮，执行此方法
      if (this.phone_num.length != 11) {
        this.setTips("无效的手机号");
        return;
      }

      if (this.$refs.pwd_input.value.length < 6) {
        this.setTips("密码太短啦");
        return;
      }

      this.cn.c2s.register(this.phone_num, this.$refs.pwd_input.value);
    },

    toLogin() {
      this.$router.replace("/login");
    },
    toInitPage() {
      this.cn.router.replace("/");
    },
    delayClearErr() {
      let _this = this;
      setTimeout(() => {
        _this.$store.dispatch("login/clearRegErr");
      }, 2000);
    },
    hideMainNav() {
      this.$store.state.hasNav = false;
    }
  }
};
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
.key {
  height: 50px;
  /* background-image: url('../assets/10003.png'); */
  background-size: 10%;
  background-repeat: no-repeat;
  /* background-color: rgb(209, 208, 207); */
  line-height: 50px;
}
.key input {
  width: 70%;
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

.tologin {
  color: rgb(179, 70, 27);
}

.errtips {
  color: #ff0000;
}
</style>