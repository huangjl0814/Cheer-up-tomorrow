<template>
  <div class="shop">
    <div class="shop-img">
      <img src="shop/04-wanzhuan_02.jpg"  />
    </div>
    <div class="fd-1">
      <p>购在西安</p>
    </div>
    <ul class="spu-1">
      <router-link to="/fdetail">
        <li class="spi-1">
          <div class="spi-div-1">
            <img src="/shop/sp-1.png" alt="" />
          </div>
          <b> 复刻葡萄花鸟纹香囊 </b>
          <p>
            在《国家宝藏》中大放异彩的葡萄花鸟纹香囊，出土于何家村窖藏，凭借唐朝精湛的工艺吸粉无数，无论当作配饰还是香包，在如今都仍有用处。因为是文物的复刻版，这一文创品的价格相对其他产品较高，非常值得买来收藏或是当作赠礼。
          </p>
        </li>
      </router-link>
        <li class="spi-1">
          <div class="spi-div-1">
            <img src="/shop/sp-2.png" alt="" />
          </div>
          <b> 城墙剪影烛台 </b>
          <p>
            城墙上，凭借出色文创屡获殊荣的“城墙故事”纪念品店非常值得一逛，而他的招牌文创产品当属城墙剪影烛台了。烛台需自行拼接，组合好后即是一座迷你城墙，蜡烛点燃放进烛台后，镂空的结构可在室内映出城墙剪影，效果惊艳，动手能力强的小伙伴不要错过。
          </p>
        </li>
        <li class="spi-1">
          <div class="spi-div-1">
            <img src="/shop/sp-3.png" alt="" />
          </div>
          <b> 皮影 </b>
          <p>
           去西安旅游，看完一场皮影戏后，不妨买个皮影工艺品回家留作纪念。皮影工艺品在回民街、书院门、永兴坊等地都有出售，既有带操作杆的皮影，也有镜框装裱好的皮影，无论是摆在家里做装饰还是送给亲朋，都是很不错的
          </p>
        </li>
        <li class="spi-1">
          <div class="spi-div-1">
            <img src="/shop/sp-4.png" alt="" />
          </div>
          <b> 仿秦兵马俑 </b>
          <p>
            西安旅游，真的兵马俑带不走，不妨带两个仿秦兵马俑以留作纪念。缩小复刻版的仿秦兵马俑也是千姿百态，惟妙惟肖。随着秦兵马俑的发掘与展出，秦兵马俑复制品日渐成为中外游客理想的纪念品和礼品，使秦俑走出陕西，遍迹世界。
          </p>
        </li>
    </ul>
  
         
  </div>
</template>
<style scoped>
.shop-img {
  width: 100%;
  margin-bottom: 50px;
}
.shop-img img {
  width: 100%;
  height: 400px;
}
.fd-1 {
  width: 10%;
  margin-left: 44%;
  font-size: 30px;
  font-weight: 700;
}
.spu-1 {
  width: 70%;
  margin-left: 15%;
}
.spi-1 {
  width: 38%;
  height: 450px;
  margin-left: 6%;
  float: left;
  background: #e1efff;
  margin-top: 20px;
  color: black;
}
.spi-1:hover {
  color: #500024;
}
.spi-1 b {
  display: inline-block;
  margin-top: 10px;
}
.spi-1 p {
  margin-top: 10px;
  /* 让文字超出部分变省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 4行后超出部分变省略号 */
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  font-size: 14px;
}
.spi-div-1 {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.spi-1 img {
  width: 100%;
  height: 300px;
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
}
.spi-1 img:hover {
  transform: scale3d(1.2, 1.2, 1);
}

</style>
<script>
export default {
  data() {
    return {
      shops: [],
    };
  },
  mounted() {
    this.axios.get("/shop").then((res) => {
      //   console.log(res.data);
      this.shops = res.data.result;
      console.log(this.shops);
    });
  },
};
</script>