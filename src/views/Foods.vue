<template>
  <div class="food">
    <!-- 天气预报 -->
    <!-- <a href="https://weathernew.pae.baidu.com/weathernew/pc?query=%E9%99%95%E8%A5%BF%E8%A5%BF%E5%AE%89%E5%A4%A9%E6%B0%94&srcid=4982">123</a> -->
    <div class="food-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <div class="fd-1">
      <p>吃在西安</p>
    </div>
    <!-- 单品美食介绍 -->
    <ul class="fdu-1">
      <router-link to="/fdetail">
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-1.jpg" alt="" />
          </div>
          <b> 西安美食||水盆羊肉 </b>
          <p>
            以大碗装盛的水盆羊肉是陕西人喜爱的传统小吃，精心烹制的羊肉汤始终是人们离不开的美味。
            大叔大婶多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多少时诵诗书所时所所所所
          </p>
        </li>
      </router-link>
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-1.jpg" alt="" />
          </div>
          <b> 西安美食||水盆羊肉 </b>
          <p>
            以大碗装盛的水盆羊肉是陕西人喜爱的传统小吃，精心烹制的羊肉汤始终是人们离不开的美味。
            大叔大婶多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多少时诵诗书所时所所所所
          </p>
        </li>
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-1.jpg" alt="" />
          </div>
          <b> 西安美食||水盆羊肉 </b>
          <p>
            以大碗装盛的水盆羊肉是陕西人喜爱的传统小吃，精心烹制的羊肉汤始终是人们离不开的美味。
            大叔大婶多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多少时诵诗书所时所所所所
          </p>
        </li>
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-1.jpg" alt="" />
          </div>
          <b> 西安美食||水盆羊肉 </b>
          <p>
            以大碗装盛的水盆羊肉是陕西人喜爱的传统小吃，精心烹制的羊肉汤始终是人们离不开的美味。
            大叔大婶多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多少时诵诗书所时所所所所
          </p>
        </li>
      
    </ul>
  </div>
</template>
<style scoped>
.food {
  width: 100%;
}
.food-img {
  width: 100%;
  margin-bottom: 50px;
}
.food-img img {
  width: 100%;
  height: 400px;
}

.fd-1 {
  width: 10%;
  margin-left: 44%;
  font-size: 30px;
  font-weight: 700;
}
.fdu-1 {
  width: 70%;
  margin-left: 15%;
}
.fdi-1 {
  width: 38%;
  height: 400px;
  margin-left: 6%;
  float: left;
  background: #e1efff;
  margin-top: 20px;
  color: black;
}
.fdi-1:hover {
  color: #500024;
}
.fdi-1 b {
  display: inline-block;
  margin-top: 10px;
}
.fdi-1 p {
  margin-top: 10px;
  /* 让文字超出部分变省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 2行后超出部分变省略号 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 14px;
}
.fdi-div-1 {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.fdi-1 img {
  width: 100%;
  height: 300px;
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
}
.fdi-1 img:hover {
  transform: scale3d(1.2, 1.2, 1);
}
</style>
<script>
export default {
  data() {
    return {
      food: [],
    };
  },
  mounted() {
    // this.axios.get("/food").then((res) => {
    //   console.log(res);
    //   this.food = res.data.result;
    //   console.log(this.food);
    // });
  },
};
</script>
    
