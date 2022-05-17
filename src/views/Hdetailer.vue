<template>
  <div class="htl-img">
    <div class="htl-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <ul class="htl-ul1">
      <li class="htl-li1 htl-li2">
        <b>住在西安||西蓝岛主题客栈</b>
      </li>
      <li class="htl-li1 htl-li3">
        <span
          ><b>文章摘要：</b
          > 一间森林青年旅舍(大雁塔师大店)是建设在经济繁华区的旅舍。满足了年轻旅游者的热情以及探索的热度。选择一间森林青年旅舍(大雁塔师大店)相信会是你此次旅行的最佳选择。</span
        >
      </li>
      <li class="htl-li1">
        <img src="/hotel/hotels-2.jpg" alt="" />
        <h5>酒店简介</h5>
        <p>
          一间森林青年旅舍(大雁塔师大店)周围有陕师大，西安外国语，政法大学，财经大学等。距离大雁塔直线距离不到1.5公里，步行五分钟即到达大唐不夜城。楼下就有公交直达小寨，300米处公交车可直达火车站，距离地铁2号线1公里，机场大巴900米，交通方便。店内有中央空调，所有房间配备新风空气净化系统，店内空气pm2.5接近于0。公区面积超大，每晚放映巨幕投影电影，有书吧，桌游区等，满足社交娱乐各种需求。标准房大床房都配备巨幕投影仪。
        </p>
        <h5>酒店基本信息</h5>
        <p class="hd-p1">建成于: 20014年  </p>
        <p class="hd-p1">酒店规模: 68间客房</p>
        <p class="hd-p1">入住时间: 12:00 离店时间: 14:00之前</p>
        <p class="hd-p1">主要设施： 免费wifi 免费停车场 电梯 餐厅 行李寄存 24小时服务 热水壶 吹风机 一次用用具等</p>
        <p class="hd-p1">价格：标间：265元~425元 大床房：375元~525元 6人上下铺（男生）：78元 4人上下铺（女生）：98元</p>
        <p class="hd-p1">联系电话： 028-568915</p>
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
        "/hotel/hotels-1-4.jpg",
        "/hotel/hotels-1-2.jpg",
        "/hotel/hotels-1-5.jpg",
        "/hotel/hotels-1-6.jpg",
        "/hotel/hotels-1-3.jpg",
        "/hotel/hotels-1-7.jpg"
      ],
    };
  },
};
</script>
<style scoped>
.htl-img {
  width: 100%;
}
.htl-img img {
  width: 100%;
  height: 400px;
}
.htl-ul1 {
  width: 70%;
  margin-left: 15%;
  background: white;
  padding-top: 40px;
}
.htl-li1 {
  width: 80%;
  margin-left: 10%;
}
.htl-li1 h5 {
  padding: 20px 0;
}
.htl-li1 img {
  width: 76%;
  margin-left: 12%;
  margin-bottom: 20px;
}
.htl-li2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
}
.htl-li3 {
  background: #e1efff;
  padding: 20px;
  margin-bottom: 20px;
}
.hd-p1 {
  margin-top: 10px;
}
</style>