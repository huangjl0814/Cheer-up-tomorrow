<template>
  <div class="fdetail">
    <div class="fde-img">
      <img src="/food/foodtop.jpg" alt="" />
    </div>
    <ul class="fde-ul1">
      <li class="fde-li1 fde-li2">
        <b>西安美食||肉夹馍</b>
      </li>
      <li class="fde-li1 fde-li3">
        <span
          ><b>文章摘要：</b
          >肉夹馍是古汉语“肉夹于馍”的简称，中国陕西省传统特色食物之一。</span
        >
      </li>
      <li class="fde-li1">
        <img src="/food/food-4.jpg" alt="" />
        <br />
        <b>美食简介</b>
        <p>
        陕西地区有使用白吉馍的“腊汁肉夹馍”、宝鸡西府的肉臊子夹馍(肉臊子中放食醋)、潼关的潼关肉夹馍（与白吉馍不同，其馍外观焦黄，条纹清晰，内部呈层状，饼体发胀，皮酥里嫩，火功到家，食用时温度以烫手为佳，且老潼关肉夹馍是热馍夹凉肉，饼酥肉香，爽而不腻）。肉夹馍是陕西著名小吃。
        </p>
      </li>
      <li class="fde-li1">
        <b>美食推荐地址</b>
        <p>
          后宰门与北新街交叉口向西20路南（筑梦幼儿园对面）
        </p>
      </li>
      <li class="fde-li1">
        <b>美食消费情况</b>
        <p>
          人均花费29元
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.fdetail {
  width: 100%;
  background-color: aliceblue;
}
.fde-img img {
  width: 100%;
  height: 400px;
}
.fde-ul1 {
  width: 70%;
  margin-left: 15%;
  background: white;
  padding-top: 40px;
}
.fde-li1 {
  width: 80%;
  margin-left: 10%;
}
.fde-li1 img {
  width: 76%;
  margin-left: 12%;
}
.fde-li1 p{
  text-indent: 30px;
}
.fde-li2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
}
.fde-li3 {
  background: #e1efff;
  padding: 20px;
  margin-bottom: 20px;
}
</style>