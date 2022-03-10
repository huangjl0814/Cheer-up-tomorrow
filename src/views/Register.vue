<template>
  <div class="register">
    <div class="reg-center">
      <div class="reg-1">
        <ul class="reg-u-1">
          <li class="reg-li-1">
            <span>注册</span
            ><router-link to="/loginn"
              ><span class="reg-qdl">去登录</span></router-link
            >
          </li>
          <li class="reg-li-1">
            <input type="text" placeholder="输入账号" v-model="usename" />
          </li>
          <li class="reg-li-1">
            <input type="password" placeholder="输入密码" v-model="password1" />
          </li>
          <li class="reg-li-1">
            <input
              type="password"
              placeholder="再次输入相同密码"
              v-model="password2"
            />
          </li>
          <li class="reg-li-1">
            <el-button class="reg-li-zc" type="text" @click="open"
              >注册</el-button
            >
            <!-- <input type="submit" value="注册" v-on:click="registerSub"/> -->
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
      password1: "",
      password2: "",
      open2: "注册成功",
    };
  },
  methods: {
    open() {
      console.log(this.usename.length);
      if(this.usename.length==0 || this.usename.length>10){
          this.$confirm("用戶名长度不符合要求，请重新输入长度为0-10的用户名", "提示", {
        confirmButtonText: "确定",
        type: "warning",
      });
      }else if(this.password1.length==0 || this.password1.length>20){
          this.$confirm("密码长度不符合要求，请重新输入长度为0-20的密码", "提示", {
        confirmButtonText: "确定",
        type: "warning",
      });
      }else if(this.password1===this.password2){
          this.$router.push({path:'/loginn'})
            this.$confirm("注册成功，以为您跳转至登录页面", "提示", {
        confirmButtonText: "确定",
        type: "warning",
        });
      }else{
            this.$confirm("请输入确认两次输入的密码完全相同", "提示", {
        confirmButtonText: "确定",
        type: "warning",
        });
      }
    },
    registerSub() {
      console.log(this.usename.length);
      if (this.usename.length == 0) {
        // alert('用戶名不能為空')
      }
    },
  },
};
</script>
<style scoped>
.register {
  width: 100%;
}
.login {
  width: 100%;
}
.reg-center {
  width: 100%;
  height: 500px;
  background-image: url("/login/loginbg.jpg");
  background-size: 100% 100%;
  position: relative;
}
.reg-1 {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 10%;
  right: 10%;
  background: white;
  opacity: 0.7;
}
.reg-li-1 {
  width: 100%;
  height: 60px;
  margin: 20px 0 0 20px;
}
.reg-u-1:nth-child(1) {
  font-size: 22px;
}
.reg-u-1:nth-child(1) span {
  display: inline-block;
}
.reg-li-1 input {
  width: 350px;
  height: 40px;
}
.reg-li-zc {
  width: 350px;
  height: 40px;
  font-size: 18px;
  border: 1px solid black;
  color: black;
}
.reg-qdl {
  margin-left: 20px;
}
</style>