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
            <img src="/hotel/hot-1.jpg" alt="" />
          </div>
          <div>
            <p class="hot-list-1">住在西安||西安志诚丽柏酒店</p>
            <p class="hot-list-2">
              秦龙温泉酒店是由陕西秦龙石油集团有限公司投资兴建，委派陕西秦龙餐饮娱乐管理有限公司管理，按国际星级标准设计营建的集温泉洗浴、住宿、餐饮、娱乐等为一体的综合性温泉度假酒店。
            </p>
          </div>
        </router-link>
      </li>
      <li class="hot-li-1"></li>
      <li class="hot-li-1"></li>
      <li class="hot-li-1"></li>
      <li class="hot-li-1"></li>
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