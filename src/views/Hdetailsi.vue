<template>
  <div class="htl-img">
    <div class="htl-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <ul class="htl-ul1">
      <li class="htl-li1 htl-li2">
        <b>住在西安||西安中建馨乐庭高新公寓酒店</b>
      </li>
      <li class="htl-li1 htl-li3">
        <span
          ><b>文章摘要：</b
          >坐落在高新技术开发区，公寓在西安占尽地理之宜。酒店地处便捷区域，距离咸阳国际机场仅34km，距离西安火车站仅12km。只需步行至延平门站地铁站，可以很便捷的到达城市的各个角落。对于入住酒店的旅客来说，闲暇时间去附近的西安牡丹苑和大唐西市博物馆游玩是一个不错的选择。</span
        >
      </li>
      <li class="htl-li1">
        <img src="/hotel/hotels-4.jpg" alt="" />
        <h5>酒店简介</h5>
        <p>
          坐落在高新技术开发区，公寓在西安占尽地理之宜。酒店地处便捷区域，距离咸阳国际机场仅34km，距离西安火车站仅12km。只需步行至延平门站地铁站，可以很便捷的到达城市的各个角落。对于入住酒店的旅客来说，闲暇时间去附近的西安牡丹苑和大唐西市博物馆游玩是一个不错的选择。旅客可以在闲暇时间去酒店的休闲区，提升健康幸福感。
        </p>
        <h5>酒店基本信息</h5>
        <p class="hd-p1">建成于: 2006年  </p>
        <p class="hd-p1">翻修于: 2019年</p>
        <p class="hd-p1">酒店规模: 206间客房</p>
        <p class="hd-p1">入住时间: 12:00 离店时间: 14:00之前</p>
        <p class="hd-p1">主要设施： 免费wifi 免费停车场 电梯 餐厅 行李寄存 24小时服务 热水壶 吹风机 一次用用具等</p>
        <p class="hd-p1">价格：标间：425元 大床房：525元</p>
        <p class="hd-p1">联系电话：028-556848</p>
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
        "/hotel/hotels-3-1.jpg",
        "/hotel/hotels-3-2.jpg",
        "/hotel/hotels-3-3.jpg",
        "/hotel/hotels-3-4.jpg",
        "/hotel/hotels-3-5.jpg",
        "/hotel/hotels-3-6.jpg",
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