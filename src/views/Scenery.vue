<template>
  <div class="scenery">
    <div class="scenery-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>

    <div class="sc-1">
      <p>游在西安</p>
    </div>
    <!-- 单品美食介绍 -->
    <ul class="scu-1">
      <router-link to="/sdetail">
        <li class="sci-1">
          <div class="sci-div-1">
            <img src="/jingqu/jq-1.jpg" alt="" />
          </div>
          <b>旅游景区||西安碑林博物馆</b>
          <p>
            西安碑林博物馆（Forest of Stone Steles Museum）是陕西创建最早的博物馆，它以收藏、陈列和研究历代碑刻、墓志及石刻为主，成为在中国独树一帜的艺术博物馆。
          </p>
        </li>
      </router-link>
        <li class="sci-1">
          <div class="sci-div-1">
            <img src="/food/food-1.jpg" alt="" />
          </div>
          <b> 西安美食||水盆羊肉 </b>
          <p>
            以大碗装盛的水盆羊肉是陕西人喜爱的传统小吃，精心烹制的羊肉汤始终是人们离不开的美味。
            大叔大婶多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多少时诵诗书所时所所所所
          </p>
        </li>
        <li class="sci-1">
          <div class="sci-div-1">
            <img src="/food/food-1.jpg" alt="" />
          </div>
          <b> 西安美食||水盆羊肉 </b>
          <p>
            以大碗装盛的水盆羊肉是陕西人喜爱的传统小吃，精心烹制的羊肉汤始终是人们离不开的美味。
            大叔大婶多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多少时诵诗书所时所所所所
          </p>
        </li>
        <li class="sci-1">
          <div class="sci-div-1">
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
<script>
export default {};
</script>
<style>
.scenery-img img {
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
}
.sc-1 {
  width: 10%;
  margin-left: 44%;
  font-size: 30px;
  font-weight: 700;
}
.scu-1 {
  width: 70%;
  margin-left: 15%;
}
.sci-1 {
  width: 38%;
  height: 400px;
  margin-left: 6%;
  float: left;
  background: #e1efff;
  margin-top: 20px;
  color: black;
}
.sci-1:hover {
  color: #500024;
}
.sci-1 b {
  display: inline-block;
  margin-top: 10px;
}
.sci-1 p {
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
.sci-div-1 {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.sci-1 img {
  width: 100%;
  height: 300px;
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
}
.sci-1 img:hover {
  transform: scale3d(1.2, 1.2, 1);
}
</style>