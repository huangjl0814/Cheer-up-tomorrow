<template>
  <div class="htl-img">
    <div class="htl-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <ul class="htl-ul1">
      <li class="htl-li1 htl-li2">
        <b>住在西安||古城驿家客栈</b>
      </li>
      <li class="htl-li1 htl-li3">
        <span
          ><b>文章摘要：</b
          >我们全心全意致力于为您打造舒适、干净家一般的住宿环境。客栈的老板之一，是一位女性穷游背包客，在北京从事互联网5年后，辞职独身穷游，一场说走就走的旅行历时7个多月，从东南亚-非洲，游历12个国家，国外的旅行，使她爱上了沙发客、和home stay的风格，回到自己的故乡后，她希望有个落脚的地方，所以创立的驿家客栈，亲如一家，亦如您家，希望为远方朋友找到家的感觉。</span
        >
      </li>
      <li class="htl-li1">
        <img src="/hotel/hotels-3.jpg" alt="" />
        <h5>酒店简介</h5>
        <p class="hd-p1">建成于: 2016年  </p>
        <p class="hd-p1">酒店规模: 76间客房</p>
        <p class="hd-p1">入住时间: 12:00 离店时间: 14:00之前</p>
        <p class="hd-p1">主要设施： 免费wifi 免费停车场 电梯 餐厅 行李寄存 24小时服务 热水壶 吹风机 一次用用具等</p>
        <p class="hd-p1">价格：标间：225元 大床房：285元</p>
        <p class="hd-p1">联系电话： 028-568915</p>
        <p>
          客栈坐落在古城西安南门内城墙边，悠悠的顺城巷，闹中取静，推开窗户就能看见拥有百年历史的城墙及墩楼，清晨也许您会被鸟儿叽叽喳喳叫醒，拉开窗帘，或许它就站在您的窗外。客栈位置可谓是闹中取静。幽静的客栈距离热闹的市中心、钟楼、鼓楼广场、回民街步行仅需5分钟；步行至碑林仅需3分钟，您可以沉浸在书画的海洋；享受了浓郁文化气息的古城西安，也不要错过热闹的夜生活，西安市的酒吧一条街-德福巷与我们仅是一街之隔，步行3分钟即可到达。同时距离火车站、机场大巴、公交车站、地铁站都非常方便。依附于浓厚的城墙文化与西安百年历史，铸就驿家客栈古朴舒适温馨的风格，客栈的每位成员如同家人一般相亲相爱。我们全心全意致力于为您打造舒适、干净家一般的住宿环境。客栈的老板之一，是一位女性穷游背包客，在北京从事互联网5年后，辞职独身穷游，一场说走就走的旅行历时7个多月，从东南亚-非洲，游历12个国家，国外的旅行，使她爱上了沙发客、和home stay的风格，回到自己的故乡后，她希望有个落脚的地方，所以创立的驿家客栈，亲如一家，亦如您家，希望为远方朋友找到家的感觉。客栈内展示了近百张老板在外穷游及无数世界文化遗产的珍贵照片，供您欣赏。旅游小攻略：以客栈为圆点，距离西安市中心、钟楼、鼓楼广场，回民街，步行十多分钟；距离碑林博物馆步行五分钟；距离火车站乘坐603十多分钟车程；距离地铁步行五分钟（永宁门站A2出口）；距离机场大巴（西安宾馆站）乘坐603两站路抵达南门站下车；距离大小雁塔、大唐芙蓉园、寒窑遗址坐车十五分钟可抵达。古城驿家客栈我们在这儿，等您回家。
        </p>
        <h5>酒店基本信息</h5>
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
        "/hotel/hotels-2-1.png",
        "/hotel/hotels-2-2.png",
        "/hotel/hotels-2-3.png",
        "/hotel/hotels-2-4.png",
        "/hotel/hotels-2-5.png",
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