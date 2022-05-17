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
            <img src="/jingqu/jq1.png" alt="" />
          </div>
          <b>旅游景区||西安城墙</b>
          <p>
            西安城墙，这座世界上历史最悠久、保存最完整的古代城垣建筑，延续了整个古都长安的历史文脉，并以其独特的魅力向世人绽放着她的恢弘、壮丽和博大，向世界展示着古都的深邃、智慧和兼容并蓄。
          </p>
        </li>
      </router-link>
      <router-link to="/sdetailer">
        <li class="sci-1">
          <div class="sci-div-1">
            <img src="/jingqu/jq2.png" alt="" />
          </div>
          <b> 旅游景区||秦始皇帝陵博物院 </b>
          <p>
            秦始皇帝陵博物院是以秦始皇兵马俑博物馆为基础，以秦始皇帝陵遗址公园(丽山园)为依托的一座大型遗址博物院;也是以秦始皇帝陵及其众多陪葬坑为主体，基于考古遗址本体及其环境的保护与展示，融合了教育、科研、游览、休闲等多项功能的公共文化空间。
          </p>
        </li>
      </router-link>
      <router-link to="/sdetailsan">
        <li class="sci-1">
          <div class="sci-div-1">
            <img src="/jingqu/jq3.png" alt="" />
          </div>
          <b> 旅游景区||大明宫国家遗址公园 </b>
          <p>
            大明宫国家遗址公园是世界文化遗产，全国重点文物保护单位。位于陕西省西安市太华南路，大明宫地处长安城北部的龙首原上，始建于唐太宗贞观八年(634年)，平面略呈梯形。
          </p>
        </li>
      </router-link>
      <router-link to="/sdetailsi">
        <li class="sci-1">
          <div class="sci-div-1">
            <img src="/jingqu/jq4.png" alt="" />
          </div>
          <b> 旅游景区||大唐芙蓉园 </b>
          <p>
            大唐芙蓉园位于陕西省西安市城南的曲江开发区，大雁塔东南侧，它是在原唐代芙蓉园遗址以北，仿照唐代皇家园林式样重新建造的，是中国第一个全方位展示盛唐风貌的大型皇家园林式文化主题公园，占地面积一千亩，其中水域面积三百亩。
          </p>
        </li>
      </router-link>
        
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