<template>
  <div class="qanda">
    <div class="qa-img">
      <img src="/qanda/qa-top.jpg" alt="" />
    </div>
    <div class="qa-tree">
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick"
      >
      </el-tree>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "西安文创旅游商品发展",
          children: [
            {
              label:
                "咨询内容： 您好，我想咨询一下西安近几年文创旅游商品的发展数据，及西安旅游业的收入，西安文创旅游商品收入在旅游业收入中的占据比例",
            },
            {
              label:
                "回复内容： 您好！您可以登陆西安市文化和旅游局官网http://wlj.xa.gov.cn/，详细了解相关旅游数据资讯。希望可以帮助到您! 祝您生活愉快！",
            },
          ],
        },
        {
          label: "大西安城市新中心CBD",
          children: [
            {
              label:
                "咨询内容： 大西安城市新中心CBD建设范围具体地址多少平方公里",
            },
            {
              label:
                "回复内容： 您好，您可咨询西安市西咸新区管委会，地址位于：陕西省西咸新区能源金融贸易区能源路西咸大厦。也可咨询西咸新区官网",
            },
            {
              label:
                "http://www.xixianxinqu.gov.cn/希望可以帮助到您。祝生活愉快！",
            }
          ],
        },
        {
          label: "导游证异地调转",
          children: [
            {
              label: "咨询内容： 您好，请问导游证异地转证期间app资料空白可以再次期间带团吗",
            },
            {
              label: "回复内容： 您好，导游证异地转证期间app资料空白没有转好期间不能带团，具体您可以打西安市导游服务中心的电话:87618215进行",
            },
            {
              label: "具体咨询，希望可以帮助到您！祝您生活愉快！",
            }
          ],
        },
      ],
      defaultProps: {
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
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