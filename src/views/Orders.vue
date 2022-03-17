<template>
  <div class="orders">
      <!-- 弹框 -->
    <div class="order-son" v-if="showModal">
        <div class="son-1">
            <input type="text" placeholder="请输入手机号">
        </div>
        <button @click="showModal=false" >完成</button>
    </div>
    <div class="or-img">
      <img src="/trip/trip-top.jpg" alt="" />
    </div>
    <ul class="or-ul-1">
      <li class="or-li-1">
        <div>
          <img src="/trip/trip-1.jpg" alt="" />
        </div>
        <div class="orv-2">
          <h4>精品西安一日游</h4>
          <p>避免排队拥挤,带您体验传统的西安文化，品尝绝美的西安美食。</p>
          <ul class="or-ul-2">
            <li class="or-li-2">
              <img src="/order/order-2.jpg" alt="" class="ormg-1" />
            </li>
            <li>
              <p>请选择游玩时间</p>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
              <br />
              <button class="ormit-1" @click="showModal=true">立即预定</button>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <h4>行程安排</h4>
        <img src="/order/order-1.png" alt="" />
        <h4>雁园皮影</h4>
        <p>
          【长恨歌·零食盲盒】西安兵马俑华清宫一日游纯玩/16人精品团（三环内接·无线耳麦·人工讲解·自助餐·夜游大唐不夜城·2人专享团·接送机服务）【长恨歌·零食盲盒】西安兵马俑华清宫一日游纯玩/16人精品团（三环内接·无线耳麦·人工讲解·自助餐·夜游大唐不夜城·2人专享团·接送机服务）【长恨歌·零食盲盒】西安兵马俑华清宫一日游纯玩/16人精品团（三环内接·无线耳麦·人工讲解·自助餐·夜游大唐不夜城·2人专享团·接送机服务）【长恨歌·零食盲盒】西安兵马俑华清宫一日游纯玩/16人精品团（三环内接·无线耳麦·人工讲解·自助餐·夜游大唐不夜城·2人专享团·接送机服务）【长恨歌·零食盲盒】西安兵马俑华清宫一日游纯玩/16人精品团（三环内接·无线耳麦·人工讲解·自助餐·夜游大唐不夜城·2人专享团·接送机服务）【长恨歌·零食盲盒】西安兵马俑华清宫一日游纯玩/16人精品团（三环内接·无线耳麦·人工讲解·自助餐·夜游大唐不夜城·2人专享团·接送机服务）
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
      },
      value1: "",
    };
  },
};
</script>
<style>
.orders {
  position: relative;
}
.order-son {
  position: absolute;
  top: 20%;
  left: 14%;
  width: 65%;
  height: 350px;
  z-index: 2;
  background: white;
}
.or-img {
  width: 100%;
  margin-bottom: 50px;
}
.or-img img {
  width: 100%;
  height: 400px;
}
.or-ul-1 {
  width: 70%;
  margin-left: 15%;
}
.or-li-1 {
  display: flex;
  height: 400px;
}
.or-ul-2 {
  display: flex;
}
.orv-2 {
  padding: 0 10px;
  color: orange;
}
.ormg-1 {
  width: 300px;
  height: 211px;
}
.ormit-1 {
  margin-left: 130px;
  margin-top: 90px;
  border: none;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background: orange;
}
.or-li-2 {
  padding: 0 5px;
}
</style>