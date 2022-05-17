<template>
  <div class="sdetail">
    <div class="sdt-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <ul class="sdt-ul1">
      <li class="sdt-li1 sdt-li2">
        <b>游在西安||西安城墙</b>
      </li>
      <li class="sdt-li1 sdt-li3">
        <span
          ><b>文章摘要：</b> 西安城墙，这座世界上历史最悠久、保存最完整的古代城垣建筑，延续了整个古都长安的历史文脉，并以其独特的魅力向世人绽放着她的恢弘、壮丽和博大，向世界展示着古都的深邃、智慧和兼容并蓄。</span
        >
      </li>
      <li class="sdt-li1">
        <img src="/jingqu/jq1.png" alt="" />
        <h5>景点介绍</h5>
        <p>
          西安城墙，这座世界上历史最悠久、保存最完整的古代城垣建筑，延续了整个古都长安的历史文脉，并以其独特的魅力向世人绽放着她的恢弘、壮丽和博大，向世界展示着古都的深邃、智慧和兼容并蓄。
        </p>
        <p>
          西安城墙周长13.74千米，包括护城河、吊桥、闸楼、箭楼、城楼、角楼、敌楼、女儿墙、垛口等一系列军事设施。“墙林河路巷”五位一体，有机地成为西安这座具有历史文化特色的国际化大都市重要的地标符号和精神家园。现为国家首批重点保护文物和AAAA级旅游景区。
        </p>
        <h5>基本信息</h5>
        <h5>游览用时参考</h5>
        <p>建议1-3小时</p>
        <h5>交通</h5>
        <p>公交:市区乘坐14路、23路、40路118路、208路、214 路、221 路、223路、 232
          路、706路、402路、512路、619路、704路、800路、游6路、258路公交车到“文昌门”站下,步行5分钟可达</p>
        <h5>门票</h5>
        <p>登城54元。目前西安城墙和西安碑林博物馆发售联合套票，游客购买套票后，可以游玩以上两个景点，套票面值100元。</p>
        <h5>tips:</h5>
        <p>本馆全面执行“线上购票、分时预约、错峰限流”政策，每日接待人数不超过最大承载量75%。请您通过官方微信公众号“西安碑林博物馆”提前预约购票。</p>
        <h5>时间</h5>
        <p> 南门（永宁门）：夏季（4月-10月）8:00-22:00。冬季（11月-次年3月底）8:00-20:00。（城墙城门众多，其余各城门开放时间，以届时电话咨询或当日公告为准）</p>
        <h5>联系</h5>
        <p>
          电话:029-87210764 票 务:029-87253331 讲 解:029-87213868
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
        "/jingqu/jq1-1.png",
        "/jingqu/jq1-2.png",
        "/jingqu/jq1-3.png",
        "/jingqu/jq1-4.png",
        "/jingqu/jq1-5.png"
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