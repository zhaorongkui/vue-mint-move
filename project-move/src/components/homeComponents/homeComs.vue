<template>
    <div>
        <mt-header fixed title="固定在顶部"></mt-header>
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../assets/imgs/lunbo/gundong2.png" ></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/imgs/lunbo/gundong3.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/imgs/lunbo/gundong4.png"></mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
// import { swipe, SwipeItem } from "mint-ui";
// Vue.component(Swip.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: "homeCom",
  data() {
    return {};
  },
  created() {
    //获取轮播图片方法
    //   this.$axios.get('getlunbo').then(res => {
    //   })
  }
};
</script>
<style>
.mint-swipe {
    width:100%;
    height:200px;
}
.mint-swipe img {
    width:100%;
    height:200px;
}
</style>

