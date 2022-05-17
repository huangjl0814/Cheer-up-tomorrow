<template>
  <div class="hotel">
    <div class="hot-img">
      <img src="hotel/hot-top.jpg" class="w-100" />
    </div>
    <div class="hot-1">
      <p>住在西安</p>
    </div>
    <ul class="hot-ul-1">
      <li class="hot-li-1">
        <router-link to="/Hdetail">
          <div class="hot-1-1">
            <img src="/hotel/hotels-1.jpg" alt="" />
          </div>
          <div>
            <p class="hot-list-1">住在西安||西蓝岛主题客栈</p>
            <p class="hot-list-2">
              西蓝岛主题客栈（西安北大街地铁站店）位于西安市大莲花池街莲湖巷5号，莲湖区历史文化街内，步行约5分钟可达北大街地铁站B出口
            </p>
          </div>
        </router-link>
      </li>
      <li class="hot-li-1">
        <router-link to="/Hdetailer">
          <div class="hot-1-1">
            <img src="/hotel/hotels-2.jpg" alt="" />
          </div>
          <div>
            <p class="hot-list-1">住在西安||一间森林青年旅舍</p>
            <p class="hot-list-2">
              一间森林青年旅舍中国，陕西，西安，雁塔区，翠华路1819号。
            </p>
          </div>
        </router-link>
      </li>
      <li class="hot-li-1">
        <router-link to="/Hdetailsan">
          <div class="hot-1-1">
            <img src="/hotel/hotels-3.jpg" alt="" />
          </div>
          <div>
            <p class="hot-list-1">住在西安||古城驿家客栈</p>
            <p class="hot-list-2">
              西安市南门里顺城西巷甲6号
            </p>
          </div>
        </router-link>
      </li>
      <li class="hot-li-1">
        <router-link to="/Hdetailsi">
          <div class="hot-1-1">
            <img src="/hotel/hotels-4.jpg" alt="" />
          </div>
          <div>
            <p class="hot-list-1">住在西安||西安中建馨乐庭高新公寓酒店</p>
            <p class="hot-list-2">
              西安市团结南路200号
            </p>
          </div>
        </router-link>
      </li>
      <li class="hot-li-1">
        <router-link to="/Hdetailwu">
          <div class="hot-1-1">
            <img src="/hotel/hotels-5.jpg" alt="" />
          </div>
          <div>
            <p class="hot-list-1">住在西安||西安未圆民宿</p>
            <p class="hot-list-2">
              陕西省西安市德福巷路大剑路324号工商银行对面。
            </p>
          </div>
        </router-link>
      </li>
      <li class="hot-li-1">
        <router-link to="/Hdetailliu">
          <div class="hot-1-1">
            <img src="/hotel/hotels-6.jpg" alt="" />
          </div>
          <div>
            <p class="hot-list-1">住在西安||西安忆宿民宿</p>
            <p class="hot-list-2">
              西安市碑林区马坊门7号
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.hotel {
  width: 100%;
}
.hot-img img {
  width: 100%;
  height: 400px;
}
.hot-1 {
  width: 10%;
  margin-left: 44%;
  font-size: 30px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 50px;
}
.hot-ul-1 {
  width: 70%;
  margin-left: 15%;
}
.hot-li-1 {
  width: 40%;
  height: 350px;
  margin-left: 6%;
  float: left;
  background: #e1efff;
  margin-top: 10px;
  
}
.hot-li-1:hover p {
  color: #500024;
}
.hot-1-1 {
  width: 100%;
  height: 70%;
  overflow: hidden;
}
.hot-li-1 img {
  width: 100%;
  height: 100%;
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.hot-li-1 img:hover {
  transform: scale3d(1.2, 1.2, 1);
}
.hot-list-1 {
  font-size: 20px;
  font-weight: 600;
  padding: 8px 0;
  color:black;
  
}
.hot-list-2 {
  font-size: 14px;
  /* 让文字超出部分变省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 2行后超出部分变省略号 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color:black;
}
</style>
<script>
export default {
  data() {
    return {
      hotels: [],
    };
  },
  mounted() {
    this.axios.get("/hotel").then((res) => {
      //   console.log(res.data);
      this.hotels = res.data.result;
      // console.log(this.hotels);
    });
  },
};
</script>