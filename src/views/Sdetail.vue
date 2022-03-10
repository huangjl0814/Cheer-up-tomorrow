<template>
  <div class="sdetail">
    <div class="sdt-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <ul class="sdt-ul1">
      <li class="sdt-li1 sdt-li2">
        <b>游在西安||西安碑林博物馆</b>
      </li>
      <li class="sdt-li1 sdt-li3">
        <span
          ><b>文章摘要：</b>西安碑林博物馆（Forest of Stone Steles
          Museum）是陕西创建最早的博物馆，它以收藏、陈列和研究历代碑刻、墓志及石刻为主，成为在中国独树一帜的艺术博物馆。</span
        >
      </li>
      <li class="sdt-li1">
        <img src="/jingqu/jq-1.jpg" alt="" />
        <h5>景点介绍</h5>
        <p>
          西安碑林博物馆(Forest of Stone Steles
          Museum)是陕西创建最早的博物馆,它以收藏、陈列和研究历代碑刻、墓志及石刻为主,成为在中国独树一帜的艺术博物馆。现有馆藏文物11000余件,其中国宝级文物19个号134件,一级文物535件。著名的“昭陵六骏”就有四骏藏于本馆。陈列由碑林、石刻艺术和其它文物展览三部分组成,共12个展室。现有7座碑室、8座碑廊、8座碑亭,加上石刻艺术室和4座文物陈列,陈列面积达到4900平米。
        </p>
        <h5>基本信息</h5>
        <ul>
          <li v-for="(item, index) in imgs" :key="index">
            <img :src="item" alt="" />
          </li>
        </ul>
        <h5>游览用时参考</h5>
        <p>1-2小时</p>
        <h5>交通</h5>
        <p>公交:市区乘坐14路、23路、40路118路、208路、214 路、221 路、223路、 232
          路、706路、402路、512路、619路、704路、800路、游6路、258路公交车到“文昌门”站下,步行5分钟可达</p>
        <h5>门票</h5>
        <p>淡季:全票50人民币/半票25人民币 (12月1日-次年2月28日 周一-周日)</p>
        <p>旺季:全票65人民币/半票37人民币 (3月1日-11月30日 周一-周日)</p>
        <p> 半票:1.2米-1.4米儿童、65岁以上老人;现役军人须、现役残疾军人、现役士兵、残疾人、学生,持有效证件。</p>
        <p>免票:1.2米以下儿童免票。</p>
        <h5>tips:</h5>
        <p>本馆全面执行“线上购票、分时预约、错峰限流”政策，每日接待人数不超过最大承载量75%。请您通过官方微信公众号“西安碑林博物馆”提前预约购票。</p>
        <h5>时间</h5>
        <p> 开放时间 08:00-18:30;停止售票时间:18:45
          (3月1日-6月30日,9月1日-11月30日 周一-周日)
          08:00-19:00;停止售票时间:18:15 (7月1日-8月31日 周一-周日)
          08:00-18:00;停止售票时间:17:15 (12月1日-次年2月28日 周一-周日)</p>
        <h5>联系</h5>
        <p>
          电话:029-87210764 票 务:029-87253331 讲 解:029-87213868
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        "/jingqu/jq-1.jpg",
        "/jingqu/jq-2.jpg",
        "/jingqu/jq-3.jpg",
        "/jingqu/jq-4.png",
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