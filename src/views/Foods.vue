<template>
  <div class="food">
    <!-- 天气预报 -->
    <!-- <a href="https://weathernew.pae.baidu.com/weathernew/pc?query=%E9%99%95%E8%A5%BF%E8%A5%BF%E5%AE%89%E5%A4%A9%E6%B0%94&srcid=4982">123</a> -->
    <div class="food-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <div class="fd-1">
      <p>吃在西安</p>
    </div>
    <!-- 单品美食介绍 -->
    <ul class="fdu-1">
      <router-link to="/fdetail">
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-1.jpg" alt="" />
          </div>
          <b> 西安美食||水盆羊肉 </b>
          <p>
            以大碗装盛的水盆羊肉是陕西人喜爱的传统小吃，精心烹制的羊肉汤始终是人们离不开的美味。
          </p>
        </li>
      </router-link>
      <router-link to="/fdetailpaomo">
         <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-2.jpg" alt="" />
          </div>
          <b> 西安美食||羊肉泡馍 </b>
          <p>
           羊肉泡馍简称羊肉泡、泡馍，制作原料主要有羊肉、葱末、粉丝、糖蒜等，古称"羊羹"，西北美馔，尤以陕西西安最享牛羊肉泡馍盛名，它烹制精细，料重味醇，肉烂汤浓，肥而不腻，营养丰富，香气四溢，诱人食欲，食后回味无穷。
          </p>
        </li>
      </router-link>
      <router-link to="/fdetaillp">
         <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-3.jpg" alt="" />
          </div>
          <b> 西安美食||凉皮 </b>
          <p>
            陕西凉皮为传统特色小吃之一，多使用小麦面粉制作，也有米粉或其他淀粉制作。一般凉拌食用（但在汉中地区，热食更为广泛），种类繁多，制作方法各异，调拌也各具特色，口味不同。
          </p>
        </li>
      </router-link>
      <router-link to="/fdetailrjm">
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-4.jpg" alt="" />
          </div>
          <b> 西安美食||肉夹馍 </b>
          <p>
           肉夹馍是古汉语“肉夹于馍”的简称，中国陕西省传统特色食物之一。
          </p>
        </li>
      </router-link>
      <router-link to="/fdetailhltpm">
         <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-5.jpg" alt="" />
          </div>
          <b> 西安美食||葫芦头泡馍 </b>
          <p>
           陕西西安传统特色小吃。源于北宋街市食品中的“煎白肠”。
          </p>
        </li>
      </router-link>
      <router-link to="/fdetailzg">
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-6.jpg" alt="" />
          </div>
          <b> 西安美食||甑糕 </b>
          <p>
            “甑糕”就是以红枣和糯米为原料，用“甑”蒸制成的“糕”，故名。甑糕米枣交融，老幼咸宜，营养丰富，滋补性强，色泽鲜润，绵软粘甜，浓香扑鼻，久食不厌，风味独特。
          </p>
        </li>
      </router-link>
      <router-link to="/fdetailszb">
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-7.jpg" alt="" />
          </div>
          <b> 西安美食||黄桂柿子饼 </b>
          <p>
            黄桂柿子饼是只有西安才有的特产，它是临潼火晶柿子与面的完美结合。经一代又一代厨师的不断改进，目前已经成为驰名的风味小吃，被誉为“关中名点”。
          </p>
        </li>
      </router-link>
      <router-link to="/fdetailsjb">
        <li class="fdi-1">
          <div class="fdi-div-1">
            <img src="/food/food-8.jpg" alt="" />
          </div>
          <b> 西安美食||水晶饼 </b>
          <p>
           水晶饼因其饼馅晶莹透亮，犹如水晶，故名。以德懋恭水晶饼最为著名，是古城西安名特风味食品。130年来，德懋恭人依据“德、懋、恭”三个字的语意去做人、经商，使德懋恭的名气越来越大，德懋恭水晶饼信誉越来越高，成为是秦式糕点的代表。
          </p>
        </li>
      </router-link>
       
        
       
        
        
        
    </ul>
  </div>
</template>
<style scoped>
.food {
  width: 100%;
}
.food-img {
  width: 100%;
  margin-bottom: 50px;
}
.food-img img {
  width: 100%;
  height: 400px;
}

.fd-1 {
  width: 10%;
  margin-left: 44%;
  font-size: 30px;
  font-weight: 700;
}
.fdu-1 {
  width: 70%;
  margin-left: 15%;
}
.fdi-1 {
  width: 38%;
  height: 400px;
  margin-left: 6%;
  float: left;
  background: #e1efff;
  margin-top: 20px;
  color: black;
}
.fdi-1:hover {
  color: #500024;
}
.fdi-1 b {
  display: inline-block;
  margin-top: 10px;
}
.fdi-1 p {
  margin-top: 10px;
  /* 让文字超出部分变省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 2行后超出部分变省略号 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 14px;
}
.fdi-div-1 {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.fdi-1 img {
  width: 100%;
  height: 300px;
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
}
.fdi-1 img:hover {
  transform: scale3d(1.2, 1.2, 1);
}
</style>
<script>
export default {
  data() {
    return {
      food: [],
    };
  },
  mounted() {
    // this.axios.get("/food").then((res) => {
    //   console.log(res);
    //   this.food = res.data.result;
    //   console.log(this.food);
    // });
  },
};
</script>
    
