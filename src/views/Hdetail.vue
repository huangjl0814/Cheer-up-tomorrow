<template>
  <div class="htl-img">
    <div class="htl-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <ul class="htl-ul1">
      <li class="htl-li1 htl-li2">
        <b>住在西安||西安志诚丽柏酒店</b>
      </li>
      <li class="htl-li1 htl-li3">
        <span
          ><b>文章摘要：</b
          >秦龙温泉酒店是由陕西秦龙石油集团有限公司投资兴建，委派陕西秦龙餐饮娱乐管理有限公司管理，按国际星级标准设计营建的集温泉洗浴、住宿、餐饮、娱乐等为一体的综合性温泉度假酒店。</span
        >
      </li>
      <li class="htl-li1">
        <img src="/hotel/hot-1.jpg" alt="" />
        <h5>酒店简介</h5>
        <p>
          西安志诚丽柏酒店位于高新区高新，距离购物中心、光华路夜市数分钟即达，创业咖啡街区是酒店的后花园；距地铁科技路站约50米。酒店拥有多种舒适房间，房内配有wifi、欢迎水果、矿泉水等配套设施。另外，酒店设有机场大巴接送机、健身房、楼层小吃、旅游资讯等贴心服务。典雅舒适的环境，定会让您尽享惬意。
        </p>
        <h5>酒店基本信息</h5>
        <ul>
          <li v-for="(item, index) in imgs" :key="index">
            <img :src="item" alt="" />
          </li>
        </ul>
        <p class="hd-p1">建成于: 2006年  </p>
        <p class="hd-p1">翻修于: 2019年</p>
        <p class="hd-p1">酒店规模: 206间客房</p>
        <p class="hd-p1">入住时间: 12:00 离店时间: 14:00之前</p>
        <p class="hd-p1">主要设施： 免费wifi 免费停车场 电梯 餐厅 行李寄存 24小时服务 热水壶 吹风机 一次用用具等</p>
        <p class="hd-p1">价格：标间：265元~425元 大床房：375元~525元</p>
      </li>
      <li class="htl-li1"></li>
      <li class="htl-li1"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        "/hotel/hot-1-1.jpg",
        "/hotel/hot-1-2.jpg",
        "/hotel/hot-1-3.jpg",
        "/hotel/hot-1-4.jpg",
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