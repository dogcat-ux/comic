<template>
  <div class="home">
<!--    <header-bar>-->
<!--      <a href="#home" slot="home">首页</a>-->
<!--      <a href="#classify" slot="classify">分类</a>-->
<!--      <a href="#rank" slot="rank">排行榜</a>-->
<!--      <a href="#update" slot="update">更新</a>-->
<!--&lt;!&ndash;      <span slot="loginslot">登录 | 注册</span>&ndash;&gt;-->
<!--    </header-bar>-->
    <swiper id="home"></swiper>
<!--    分类-->
    <Classify id="classify"></Classify>
<!--    排行榜-->
    <Rank id="rank"></Rank>
<!--    更新-->
    <Update id="update"></Update>
  </div>
</template>

<script>
  import HeaderBar from "../components/header/HeaderBar";
  import Swiper from "../components/Swiper";
  import Classify from "./Classify";
  import Rank from "./Rank";
  import Update from "./Update";
  export default {
    name: "Home",
    components: {
      Swiper,
      HeaderBar,
      Classify,
      Rank,
      Update
    }
  }
</script>

<style scoped>

</style>
