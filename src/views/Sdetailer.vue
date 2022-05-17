<template>
  <div class="sdetail">
    <div class="sdt-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <ul class="sdt-ul1">
      <li class="sdt-li1 sdt-li2">
        <b>游在西安||秦始皇帝陵博物院</b>
      </li>
      <li class="sdt-li1 sdt-li3">
        <span
          ><b>文章摘要：</b> 秦始皇帝陵博物院位于陕西省西安市临潼区，是以秦始皇兵马俑博物馆为基础，以秦始皇帝陵遗址公园（丽山园）为依托的一座大型遗址博物院；也是以秦始皇帝陵及其众多陪葬坑为主体，基于考古遗址本体及其环境的保护与展示，融合了教育、科研、游览、休闲等多项功能的公共文化空间。</span
        >
      </li>
      <li class="sdt-li1">
        <img src="/jingqu/jq2.png" alt="" />
        <h5>景点介绍</h5>
        <h5>基本信息</h5>
        <h5>游览用时参考</h5>
        <p>建议1-3小时</p>
        <h5>交通</h5>
        <p>公交:市区乘坐14路、23路、40路118路、208路、214 路、221 路、223路、 232
          路、706路、402路、512路、619路、704路、800路、游6路、258路公交车临潼区</p>
        <h5>门票</h5>
        <p>120元/人</p>
        <h5>tips:</h5>
        <p>本馆全面执行“线上购票、分时预约、错峰限流”政策，每日接待人数不超过最大承载量75%。请您通过官方微信公众号“西安碑林博物馆”提前预约购票。</p>
        <h5>时间</h5>
        <p> 3月16日-11月15日 08:30-17:00；11月16日-次年3月15日 08:30-16:30</p>
        <h5>联系</h5>
        <p>
          电话:029-87210764 票 务:029-87253331 讲 解:029-87213868
        </p>
        <p>
          秦始皇帝陵博物院位于陕西省西安市临潼区，是以秦始皇兵马俑博物馆为基础，以秦始皇帝陵遗址公园（丽山园）为依托的一座大型遗址博物院；也是以秦始皇帝陵及其众多陪葬坑为主体，基于考古遗址本体及其环境的保护与展示，融合了教育、科研、游览、休闲等多项功能的公共文化空间。
        </p>
        <p>
          2007年，秦始皇帝陵博物院获评首批国家AAAAA旅游景区，景点包括秦始皇兵马俑博物馆和丽山园。两个景点相距2200米，观众可乘坐免费旅游专车往返。2008年，秦始皇兵马俑博物馆获评首批国家一级博物馆。2009年，秦始皇兵马俑博物馆取得团体考古领队资格。
        </p>
        <p>
          秦始皇帝陵博物院自2022年4月16日起暂停开放，恢复开放时间另行通知。
        </p>
        <ul>
          <li v-for="(item, index) in imgs" :key="index">
            <img :src="item" alt="" />
          </li>
        </ul>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        "/jingqu/jq2-1.png",
        "/jingqu/jq2-2.png",
        "/jingqu/jq2-3.png",
        "/jingqu/jq2-4.png"
      ],
    };
  },
};
</script>
<style>
.sdt-img img {
  width: 100%;
  height: 400px;
}
.sdt-ul1 {
  width: 70%;
  margin-left: 15%;
  background: white;
  padding-top: 40px;
}
.sdt-li1 {
  width: 80%;
  margin-left: 10%;
}
.sdt-li1 h5 {
  padding: 20px 0;
}
.sdt-li1 img {
  width: 76%;
  margin-left: 12%;
}
.sdt-li2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
}
.sdt-li3 {
  background: #e1efff;
  padding: 20px;
  margin-bottom: 20px;
}
</style>