<template>
  <div id="app">
    <header-bar>
      <a href="/" slot="home">首页</a>
      <a href="#classify" slot="classify">分类</a>
      <a href="#rank" slot="rank">排行榜</a>
      <a href="#update" slot="update">更新</a>
    </header-bar>
<!--    <Comic></Comic>-->
<!--    <GetComic></GetComic>-->
<!--    <cartoon-detail></cartoon-detail>-->
<!--        <admin-detail></admin-detail>-->
<!--        <user-detail></user-detail>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import AdminDetail from "./views/AdminDetail";
  import UserDetail from "./views/UserDetail";
  import Home from "./views/Home";
  import CartoonDetail from "./views/CartoonDetail";
  import HeaderBar from "./components/header/HeaderBar";
  import Comic from "./views/Comic";
  import GetComic from "./views/GetComic";
  export default {
    name: 'App',
    components: {
      Home,
      UserDetail,
      AdminDetail,
      CartoonDetail,
      HeaderBar,
      Comic,
      GetComic,
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
  /*@import "./assets/css/media.css";*/
</style>
