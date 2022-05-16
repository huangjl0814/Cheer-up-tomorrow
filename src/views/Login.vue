<template>
  <div class="login">
    <div class="dly-center">
      <div class="dly-1">
        <ul class="dly-u-1">
          <li class="dly-li-1"><span>登录</span></li>
          <li class="dly-li-1">
            <input type="text" placeholder="输入账号" v-model="usename" />
          </li>
          <li class="dly-li-1">
            <input type="password" placeholder="输入密码" v-model="password" />
          </li>
          <li class="dly-li-1">
            <el-button class="dly-li-dlzc" type="text" @click="loginBtn"
              >登录</el-button
            >
          </li>
          <li class="dly-li-1">
            <el-button class="dly-li-dlzc" type="text" @click="toRegister"
              >注册</el-button
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      usename: "",
      password: "",
    };
  },
  methods: {
    loginBtn() {
      var nologin = document.querySelector('.login-1')
      var islogin = document.querySelector('.login-2')
      if (this.usename.length == 0) {
        this.$confirm("请输入用户名", "提示", {
          confirmButtonText: "确定",
          type: "warning",
        });
      } else {
        nologin.style.display = 'none'
        islogin.style.display = 'block'
        this.$router.push({ path: "/" });
        this.$confirm("登录成功，以为您跳转至首页", "提示", {
          confirmButtonText: "确定",
          type: "warning",
        });
      }
    },
    toRegister() {

      this.$router.push({ path: "/register" });
    },
  },
};
</script>
   
<style scoped>
.login {
  width: 100%;
}
.dly-center {
  width: 100%;
  height: 500px;
  background-image: url("/login/loginbg.jpg");
  background-size: 100% 100%;
  position: relative;
}
.dly-1 {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 10%;
  right: 10%;
  background: white;
  opacity: 0.7;
}
.dly-li-1 {
  width: 100%;
  height: 60px;
  margin: 20px 0 0 20px;
}
.dly-u-1:nth-child(1) {
  font-size: 22px;
}
.dly-u-1:nth-child(1) span {
  display: inline-block;
}
.dly-li-1 input {
  width: 350px;
  height: 40px;
}
.dly-li-dlzc {
  width: 350px;
  height: 40px;
  font-size: 18px;
  border: 1px solid black;
  color: black;
}
</style>
