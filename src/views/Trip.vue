<template>
  <div class="trips">
    <div class="trip-img">
      <img src="/trip/trip-top.jpg" alt="" />
    </div>
    <div class="trip-center">
      <div class="tc-1">
        <h4>自主一日游推荐行程</h4>
        <div class="tc-11">
          <h5>1.茂陵景区</h5>
          <img src="/trip/trip-one-1.png" alt="" />
          <p>
            茂陵景区实际参观的是霍去病墓和茂陵博物馆（茂陵在旁边，但似乎没办法参观）。霍去病名声在外，墓地最主要参观的就是墓葬外的石雕，有“马踏匈奴”等共18个，有的写意有的写实，还蛮有意思。另外有免费的编钟表演，演奏3首歌，准确的说应该是汉代打击乐表演，有编钟、编磬和建鼓，现场听到编钟和编磬的声音，震撼、激动。表演开始的时候，专业的主持人，气质拿捏的死死的。表演结束之后，也许还会有更多的小表演哟！
          </p>
          <h5>2.法门寺</h5>
          <img src="/trip/trip-one-2.png" alt="" />
          <p>
            这座唐代的“皇家寺庙”，因安置了佛教界至高圣物——佛祖释迦牟尼的“指骨舍利”，而成为举国仰望的佛教圣地。如今的法门寺分为两部分：唐代风格的旧址建筑群（法门寺院和珍宝馆）与令人争议的新建文化景区。你可以从旧址买票入内，也可以在新建的文化景区西侧的山门广场买票进入。你能够观赏到唐皇室供佛的上百件珍宝，件件都让人为之惊叹。其中有：安放舍利的八重宝函、十二环锡杖、纯金塔、汉白玉灵帐、秘色瓷、皇帝使用的茶具等等。
          </p>
        </div>
      </div>
      <div class="tc-2">
        <h4>自主三日游推荐行程</h4>
        <div class="tc-21">
          <img src="/trip/trip-t-1.png" alt="" class="tc-3d" />
          <ul>
            <li>
              <h5>D1</h5>
              <p>
                每周四周日的西仓巷，有西安市有名的花鸟鱼虫市场，是体验老西安生活的开门之景。
                中午去回民街，这里是西安特色小吃最集中的街区，若是想体验最地道的西安味道，巷子里的的一些“苍蝇馆”才是最佳的选择，那里也常常是西安本地人扎堆的地方。高家大院是西安市保护得最为完整的汉族民居院落，充满了深厚的文化底蕴，不定期还有皮影戏或者秦腔演出。待傍晚时分，来钟鼓楼上眺长安，特别是夜晚时的钟楼，景致甚是好看。鼓楼与钟楼相对，每天下午六点准时，鼓楼上的24节气鼓骑响，声音洪亮，气势如虹。
              </p>
              <img src="/trip/trip-t-11.png" alt="" class="tc-3d-1" />
              <img src="/trip/trip-t-12.png" alt="" class="tc-3d-1" />
              <img src="/trip/trip-t-13.png" alt="" class="tc-3d-1" />
            </li>
          </ul>
        </div>
      </div>
      <h4>当地导游预约服务：</h4>
      <ul class="tp-ul-1">
        <li class="tp-li-1">
          <div class="tpv-1">
            <img src="/trip/trip-1.jpg" alt="" />
          </div>
          <div class="tpv-2">
            <p>
              西安一日游，避免排队拥挤，本地人带游，带您体验传统的西安文化，品尝绝美的西安美食。
            </p>
            <p>一天0晚</p>
          </div>
          <div class="tpv-3">
            <p>￥358.00</p>
            <router-link to="/orders">
              <input type="submit" value="查看详情" class="ckxq" />
            </router-link>
          </div>
        </li>
      </ul>
    </div>  
  </div>
</template>
<script>
export default {};
</script>
<style>
.trips {
  background-color: aliceblue;
}
.trip-img {
  width: 100%;
  /* margin-bottom: 50px; */
}
.trip-img img {
  width: 100%;
  height: 400px;
}
.trip-center {
  width: 70%;
  margin-left: 15%;
  background-color: white;
  padding-top: 50px;
}
.tc-11 {
  width: 80%;
  margin-left: 10%;
}
.tc-11 img {
  width: 80%;
  margin-left: 10%;
  height: 500px;
}
.tc-21 {
  width: 80%;
  margin-left: 10%;
}

.tc-3d {
  width: 700px;
  height: 280px;
}
.tc-3d-1 {
  width: 30%;
  height: 180px;
  margin-right: 3%;
}
.trip-center h4 {
  color: orange;
}
.tp-ul-1 {
  width: 80%;
  margin-left: 10%;
}
.tp-li-1 {
  display: flex;
  height: 140px;
}
.tpv-1 {
  flex: 2;
  overflow: hidden;
}
.tpv-1 img {
  width: 100%;
  height: 140px;
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.tpv-1 img:hover {
  transform: scale3d(1.2, 1.2, 1);
}
.tpv-2 {
  flex: 5;
}
.tpv-2 p {
  padding: 0 10px;
}
.tpv-3 {
  flex: 2;
  text-align: center;
}
.tpv-3 p {
  font-size: 20px;
}
.tpv-3 input {
  cursor: pointer;
}
.ckxq {
  background: orange;
  /* border: 1px solid orangered; */
  padding: 10px;
}
</style>