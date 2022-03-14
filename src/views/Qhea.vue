<template>
  <div class="qanda">
    <div class="qa-img">
      <img src="/qanda/qa-top.jpg" alt="" />
    </div>
    <div class="qa-tree">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="西安旅游景区" name="1">
          <div>
            咨询内容： 西安都有哪些大型超市 、西安有哪些医院
          </div>
          <div>
            回复内容： 您好，西安大型综合超市有永辉超市、华润万家、沃尔玛(Walmart）、卜蜂莲花（LOTUS）、宜品生活、人人乐、盒马生鲜等。 西安的医院有西京医院、唐都医院、西安交通大学第一附属医院、西安交通大学第二附属医院、西安市第四人民医院等。 希望可以帮助到您！祝生活愉快！
          </div>
        </el-collapse-item>
        <el-collapse-item title="西安图书馆" name="2">
          <div>
            咨询内容： 西安都有哪些图书馆
          </div>
          <div>回复内容： 您好！西安图书馆有：西安市图书馆、陕西省图书馆、钱学森图书馆、西安工业大学图书馆、西安欧亚学院图书馆等。希望可以帮助到您！</div>
        </el-collapse-item>
        <el-collapse-item title="西安高新区简介" name="3">
          <div>咨询内容： 西安高新区简介</div>
          <div>
            回复内容： 您好！西安高新区是1991年3月国务院首批批准成立的国家级高新区之一，2006年被科技部确定为要建成世界一流科技园区的六个试点园区之一，2015年8月，国务院正式批复同意西安高新区建设国家自主创新示范区。2017年4月，陕西自贸区正式挂牌，高新功能区作为陕西自贸区面积最大、以特殊监管区区外保税等通关模式创新为特色的核心片区正式启动建设。2020年6月，科技部批复同意全国首个“硬科技创新示范区”在西安高新区启动建设。西安高新区位于西安市西南部。希望可以帮助到您！
          </div>
        </el-collapse-item>
        <el-collapse-item title="长安简介" name="4">
          <div>
            咨询内容： 长安简介
          </div>
          <div>
            回复内容： 您好！西安高新区是1991年3月国务院首批批准成立的国家级高新区之一，2006年被科技部确定为要建成世界一流科技园区的六个试点园区之一，2015年8月，国务院正式批复同意西安高新区建设国家自主创新示范区。2017年4月，陕西自贸区正式挂牌，高新功能区作为陕西自贸区面积最大、以特殊监管区区外保税等通关模式创新为特色的核心片区正式启动建设。2020年6月，科技部批复同意全国首个“硬科技创新示范区”在西安高新区启动建设。西安高新区位于西安市西南部。希望可以帮助到您！
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
<style>
.qa-img img {
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
}
.qa-tree {
  width: 60%;
  margin-left: 20%;
}
</style>