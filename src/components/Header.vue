
<template>
  <header class="container-fluid p-0">
    <div class="row mb-4">
      <div class="col-3 mt-3">
        <router-link to="/"><img class="ml-3" src="images/index/logo-new.png" alt="" /></router-link>
        <!-- 登录注册 -->
        <ul class="login-1">
          <li>
            <router-link to="/loginn"><span>登录</span></router-link>
          </li>
          <li>
            <router-link to="/register"><span>注册</span></router-link>
          </li>
        </ul>
        <ul class="login-2">
          <li class="hyn">
            <span>您好！欢迎您</span>
          </li>
          <li>
            <span @click="tclogin" class="tcdl">退出登录</span>
          </li>
        </ul>

      </div>
      <ul class="col-9 menu d-flex mt-4 justify-content-end align-items-center">
        <li class="mr-3 p-3"><a class="text-danger" href="/">首页</a></li>
        <li class="mr-3 p-3">
          <router-link to="/trips" class="textc" href="#">旅游攻略</router-link>
        </li>

        <li class="mr-3 p-3">
          <router-link to="/foods" class="textc" href="#">吃在西安</router-link>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/hotels" class="textc" href="#">住在西安</router-link>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/scenery" class="textc" href="#">游在西安</router-link>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/shopping" class="textc" href="#">购在西安</router-link>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/qhea" class="textc" href="#">聊聊西安</router-link>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/" class="textc" href="#">旅游帮助</router-link>
          <ul>
            <li><a href="https://weathernew.pae.baidu.com/weathernew/pc?query=%E9%99%95%E8%A5%BF%E8%A5%BF%E5%AE%89%E5%A4%A9%E6%B0%94&srcid=4982">天气查询</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    tclogin() {
      var nologin = document.querySelector('.login-1')
      var islogin = document.querySelector('.login-2')
      
      nologin.style.display = 'block'
      islogin.style.display = 'none'

      // this.$router.push({path:'/'})
      
    }
  },
};

</script>

   
 <style>
html {
  scroll-behavior: smooth;
}

ul,
li {
  margin: 0;
  padding: 0;
}

.row {
  width: 100%;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  text-decoration: none;
}
/* .breadcrumb-item+.breadcrumb-item::before{content:"";} */

/* 退出登录样式 */

.textc:hover {
  color: red;
}

.textc {
  color: black;
}
.login-1 {
  position: absolute;
  top: 2%;
  left: 300px;
  width: 100px;
  display: block;
}
.login-2 {
  position: absolute;
  top: 2%;
  left: 300px;
  width: 80px;
  display: none;
  cursor:pointer;
}
.hyn {
  font-size: 12px;
}
.tcdl {
  color: blue;
}
.tcdl:hover {
  border: blue;
}
/* 所有二级菜单项鼠标悬停时，都变为红字 */

ul.menu > li > ul > li:hover {
  color: red;
}

ul.menu > li {
  position: relative;
}

/* 设置所有二级菜单项的统一内容 */

ul.menu > li > ul {
  /* 每个二级菜单设置为绝对定位 */
  position: absolute;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  width: 150px;
  left: -25px;
  z-index: 1000;
}

/* 所有二级菜单中每个菜单项的统一样式 */

ul.menu > li > ul > li {
  display: block;
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
}

/* 二级菜单隐藏时的起始样式（含transition和overflow的） */

ul.menu > li > ul {
  /* 如果只做单纯的显示，就这个： */
  display: none;
  opacity: 0;
  /* overflow: hidden; */
}

ul.menu > li:hover > ul {
  /* 如果只做单纯的显示，就这个：*/
  display: block;
  opacity: 1;
}

ul.menu > li > ul::before {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  transform: rotate(135deg);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  background: #fff;
  content: "";
  left: 50%;
  margin-top: -4px;
}

ul.menu > li > ul::after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: "";
  width: 100%;
  height: 10px;
  background: #fff;
}
.icon-hot {
  position: absolute;
  display: inline-block;
  width: 13px;
  height: 13px;
  top: 35px;
  right: 10px;
}

</style>