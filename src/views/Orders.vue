<template>
  <div class="orders">
    <!-- 弹框 -->
    <div class="order-son" v-if="showModal">
      <div class="son-1">
        <!-- <p>{{ this.value1 }}</p> -->
          <h4 class="son-1-1">预约服务</h4>
        <h5 class="son-1-3">请输入联系电话：</h5>
        <input class="son-1-2" type="text" placeholder="请输入手机号" v-model="phoneNum" />
      
      <!-- <button @click="wancheng">完成</button> -->
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

        <el-button slot="reference" class="son-refer">提交</el-button>
      </el-popover>
      </div>
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
            <li>
              <p>请选择游玩时间</p>
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
      <li class=" yr-all">
        <h4>行程安排</h4>
        <img src="/order/order-1.png" alt="" />
      </li>
      <li class=" yr-all">
        <h4>雁园皮影</h4>
        <h5>介绍</h5>
        <p>
          关中皮影发祥在华山脚下世界皮影源于中国，中国皮影源于西汉时期的关中，而东府华州（华县）的灯影。为了使更多的老百姓感受到皮影戏的精彩，西安博物院在小雁塔北门内的雁园设立了传统文化传承基地，并在园内搭设一座戏台，专门聘请了表演大师为观众表演碗碗腔、老腔、眉户等剧种的皮影戏。除了皮影戏表演，还展示了手工剪纸、木板年画、泥塑面塑、篆刻、陶埙演奏、手工油纸伞等非物质文化艺术，参观者还可以亲手体验拓印碑文，感受传统文化的魅力。
        </p>
        <img src="/order/order-py1.png" alt="">
      </li>
      <li class=" yr-all">
        <h4>小雁塔</h4>
        <h5>介绍</h5>
        <p>
          小雁塔，位于唐长安城安仁坊（今陕西省西安市南郊）荐福寺内，又称“荐福寺塔”，建于唐景龙年间，与大雁塔同为唐长安城保留至今的重要标志。小雁塔和荐福寺钟楼内的古钟合称为“关中八景”之一的“雁塔晨钟”，是西安博物院的组成部分，为国家AAAA级旅游景区。小雁塔是中国早期方形密檐式砖塔的典型作品，原有15层，现存13层，高43.4米，塔形秀丽，是唐代佛教建筑艺术遗产，佛教传入中原地区并融入汉族文化的标志性建筑。
        </p>
        <img src="/order/order-xyt1.png" alt="">
      </li>
      <li class=" yr-all">
        <h4>西安博物馆</h4>
        <h5>介绍</h5>
        <p>
          西安博物院是陕西省西安市的一座集博物馆、名胜古迹、城市园林为一体的博物馆。2007年对外开放。以展示的珍贵文物，唐代千年古塔、悠扬的雁塔晨钟、秀丽的园林景观而闻名。2020年12月，被授予“陕西省文明单位标兵”称号。
        </p>
        <img src="/order/order-bwg1.png" alt="">
      </li>
      <li class=" yr-all">
        <h4>西安都城隍庙</h4>
        <h5>介绍</h5>
        <p>
          西安都城隍庙 道教宫观，正式名称为“都城隍庙”。在西安市西大街大学习巷东侧，占地约 11024平方米，建筑面积约4466平方米。 西安城隍庙是天下三大“都城隍庙”之一，与北京、南京城隍庙齐名。 明洪武二十年(1387)创建于西安东城门内九曜街，明宣德八年(1432)移建于今址。 清雍正元年(1723)毁于大火，川陕总督年羹尧于同年重修。 据史志记载，西安都城隍庙建筑规模宏大，全国各地城隍庙罕有其比。 城隍庙分为庙院和道院两大部分；城隍庙山门口有座五间大牌坊，牌坊之上，斗拱重叠，牌坊之下，有铁狮一对。山门内有一条数百米长的青石甬道直达二门，其间有文昌阁一座。进入二门有一座精巧绮丽的戏楼，戏楼与大殿南北相对，中间场地上是一座气势宏伟的木质牌楼，楼檐有精美彩绘及阴阳太极八卦图案。大殿面阔七间，进深五间，正中供奉西安都城隍，两侧配祀判官、牛头马面和黑白无常等鬼卒。 原主要建筑有大门、玉皇阁、乐舞楼、牌楼、大殿、道舍、厢房等，后大多被毁，现存有清雍正元年(1723)重修大殿一座，斗拱出檐，雄伟状观，顶覆琉璃瓦，前檐格扇门窗浮雕各种图案花纹，雕工精细，图案精美，殿内原塑立有城隍、判官、小鬼等像。庙外牌坊前原置立铜狮一对，均为明嘉靖三十八年(1559)所铸造。 此庙为西安著名的古道教庙宇和商贾百工技艺云集之地。 2001年06月25日，西安城隍庙作为明清时期古建筑，被国务院批准列入第五批全国重点文物保护单位名单。
        </p>
        <img src="/order/order-qzs1.png" alt="">
      </li>
      <li class=" yr-all">
        <h4>西安钟鼓楼</h4>
        <h5>介绍</h5>
        <p>
          西安鼓楼，位于古都西安市中心，明城墙内东西南北四条大街交汇处的西安钟楼西北方约200米处。建于明太祖朱元璋洪武十三年（1380年），是中国古代遗留下来众多鼓楼中形制最大、保存最完整鼓楼之一。西安鼓楼建在方型基座之上，为砖木结构，顶部为重檐形式，总高36米，占地面积1377平方米，内有楼梯可盘旋而上。在檐上覆盖有深绿色琉璃瓦，楼内贴金彩绘，画栋雕梁，顶部有鎏金宝顶，是西安的标志性建筑。1956年8月6日，陕西省人民委员会公布鼓楼为省级重点文物保护单位。1996年11月20日，国务院公布鼓楼为全国重点文物保护单位。
        </p>
        <img src="/order/order-zgl1.png" alt="">
      </li>
      <li class=" yr-all">
        <h4>西安城墙</h4>
        <h5>介绍</h5>
        <p>
          西安城墙，是中国现存规模最大、保存最完整的古代城垣，是第一批全国重点文物保护单位、国家AAAAA级旅游景区。广义的西安城墙包括西安唐城墙和西安明城墙，但一般特指狭义上的西安明城墙。西安明城墙位于陕西省西安市中心区，墙高12米，顶宽12—14米，底宽15—18米，轮廓呈封闭的长方形，周长13.74千米。城墙内人们习惯称为古城区，面积11.32平方千米，著名的西安钟鼓楼就位于古城区中心。西安城墙主城门有四座：长乐门（东门），永宁门（南门），安定门（西门），安远门（北门），这四座城门也是古城墙的原有城门。从民国开始为方便出入古城区，先后新辟了多座城门，至今西安城墙已有城门18座。1961年3月4日，西安城墙被国务院公布为第一批全国重点文物保护单位 [56]  。2018中国西北旅游营销大会暨旅游装备展上，西安城墙入围“神奇西北100景”榜单。
        </p>
        <img src="/order/order-cq1.png" alt="">
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
        this.value1 = '';
        this.showModal = false;
        this.phoneNum = ''
        alert("您已经成功预约"+this.value1+"的行程，祝您旅途愉快")
      }
    },
    kaolv() {
      this.value1 = '';
      this.showModal = false;
    },
  },
};
</script>
<style>
.orders {
  background-color: aliceblue;
}
.order-son {
  position: absolute;
  top: 79.6%;
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
.yr-all {
   padding: 55px 0 0 50px;
   margin-bottom: 20px;
}
.yr-all img {
  width: 80%;
  height: 600px;
  margin-left: 10%;
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
.son-1 {
  width: 60%;
  height: 100%;
  margin-left: 20%;
  border: 3px solid orange;
}
.son-1-1 {
  text-align: center;
  color: orange;
  padding: 30px 0;
}
.son-1-2 {
  margin-left: 34%;
  margin-bottom: 100px;
}
.son-refer {
  margin-left: 45%;
}
.son-1-3 {
  margin-left: 15%;
  padding-bottom: 20px;
}
</style>