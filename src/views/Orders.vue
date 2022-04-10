<template>
  <div class="orders">
    <!-- 弹框 -->
    <div class="order-son" v-if="showModal">
      <div class="son-1">
        <p>{{ this.value1 }}</p>
        <input type="text" placeholder="请输入手机号" v-model="phoneNum" />
      </div>
      <button @click="wancheng">完成</button>
      <br />
      <el-popover placement="top" width="160" v-model="visible">
        <p>您确定要预约{{ this.value1 }}当天的行程吗</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="kaolv"
            >再考虑一下</el-button
          >
          <el-button type="primary" size="mini" @click="wancheng"
            >是的，我确认</el-button
          >
        </div>

        <el-button slot="reference">提交</el-button>
      </el-popover>
    </div>
    <div class="or-img">
      <img src="/trip/trip-top.jpg" alt="" />
    </div>
    <ul class="or-ul-1">
      <li class="or-li-1 yr-1">
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
              <!-- 时间选择器存在问题：在确认界面点击隐藏后 日期选择器的默认时间会跳到1970年  -->
              <el-date-picker
                v-model="value1"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
              <br />
              <button class="ormit-1" @click="show">立即预定</button>
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
      visible: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
      },
      value1: "",
      phoneNum: "",
    };
  },
  methods: {
    show() {
      console.log(this.value1);
      if (this.value1 == 0) {
        alert("请选择预约日期");
      } else {
        this.showModal = true;
      }
    },
    wancheng() {
      console.log(this.phoneNum)
      if (this.phoneNum.length == 0) {
        alert("请先输入电话号码");
      } else {
        this.value1 = 0;
        this.showModal = false;
        this.phoneNum = ''
      }
    },
    kaolv() {
      this.value1 = 0;
      this.showModal = false;
    },
  },
};
</script>
<style>
.orders {
  position: relative;
  background-color: aliceblue;
}
.order-son {
  position: absolute;
  top: 21.6%;
  left: 15%;
  width: 70%;
  height: 411px;
  z-index: 2;
  background: white;
}
.or-img {
  width: 100%;
}
.or-img img {
  width: 100%;
  height: 400px;
}
.or-ul-1 {
  width: 70%;
  padding-top: 50px;
  margin-left: 15%;
  background-color: white;
}
.yr-1 {
  padding: 55px 0 0 50px;
  border: 3px solid orange;
  margin-bottom: 20px;
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
  /* margin-left: 130px; */
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