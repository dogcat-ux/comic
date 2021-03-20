<template>
  <div id="CartoonDetail">
    <el-backtop></el-backtop>
    <div class="contentBox">
      <div class="topicBox">
<!--        第一栏 漫画图片和简介-->
        <div class="topicTitle">
<!--          封面图片-->
          <img src="https://f2.kkmh.com/image/200819/IHjveqwW6.webp-t.w360.webp.h" alt="">
<!--          具体-->
          <div class="cartoon-detail">
<!--            漫画名-->
            <div class="cartoon-title">
              <h2>{{cartoonTitle}}</h2>
            </div>
<!--            作者-->
            <div class="author">
              <a href="#">{{author}}</a>
<!--              点赞作者-->
<!--              点攒前-->
              <img src="../assets/img/icon/good.png" alt="" @click="like" v-if="this.isLike==0">
<!--              点赞后-->
              <img src="../assets/img/icon/like.png" alt="" @click="like" v-else>
            </div>
<!--            介绍-->
            <div class="introduction">
              {{introduction}}
            </div>
<!--            对漫画的点赞和下载-->
            <div class="footer-oper">
              <img src="../assets/img/icon/good.png" alt="" @click="cartoonLike" v-if="this.isCartoonLike==0">
              <!--         点赞后-->
              <img src="../assets/img/icon/like.png" alt="" @click="cartoonLike" v-else>
<!--            下载-->
              <img src="../assets/img/icon/download.png" @click="toDownload()" alt="">
            </div>
          </div>
        </div>
<!--        漫画具体的章节-->
        <div class="topicList">
          <li class="listItem" v-for="item in section">
            {{item}}
            <input type="checkbox" class="downloadItem" id="downloadItem" checked>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartoonDetail",
    data(){
      return {
        cartoonTitle:"jusada",
        author:"sadsadas",
        introduction:"sadlsads;al",
        section:["第一章","第二章"],
      //  点赞
        isLike: 0,
        isCartoonLike:0,
        isDowload: 0
      }
    },
    methods:{
      like(){
        this.isLike = 1
      },
      cartoonLike(){
        this.isCartoonLike = 1
      },
      toDownload(){
        let downloadItems = document.querySelectorAll('#downloadItem');
        downloadItems[0].style.display = 'block';
        downloadItems[1].style.display = 'block';
      }
    },

  }
</script>

<style lang="scss" scoped>
  $cartoonBox: 1090px;
  .contentBox{
    width: 100vw;
    height: 100vh;
    position: relative;
    text-align: center;
    margin-top: 10px;
    .topicBox{
      position: absolute;
      border-radius: 10px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 1140px;
      height: 100vh;
      border: 1px solid var(--color-tint);
      display: flex;
      flex-direction: column;
      align-items: center;
      /*标题*/
      .topicTitle{
        width: $cartoonBox;
        height: 291px;
        display: flex;
        padding: 10px;
        border-bottom: 1px solid var(--color-tint);
        position: relative;
        /*封面*/
        /*简介*/
        .cartoon-detail{
          flex: 1;
          height: 291px;
        };
        /*作者*/
        .author{
          /*display: flex;*/
          height: 50px;
          width: 100%;
          img{
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        };
        .footer-oper{
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 100px;
          height: 30px;
          img{
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
        }
      }
      .topicList{
        width: $cartoonBox;
        height: 100%;
        vertical-align: center;
        .listItem{
          width: $cartoonBox;
          height: 100px;
          padding: 10px;
          margin-top: 35px;
          border-bottom: 1px solid var(--color-tint);
          position: relative;
          .downloadItem{
            display: none;
          }
          input[type="checkbox"] {
            position: absolute;
            right: 50px;
            width: 30px;
            height: 30px;
            cursor: pointer;
            background-color: #fff;
            -webkit-appearance: none;
            border: 1px solid #c9c9c9;
            border-radius: 2px;
            outline: none;
          }
          input[type="checkbox"]:checked {
            background: url("../assets/img/icon/yes.png") no-repeat center;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
</style>
