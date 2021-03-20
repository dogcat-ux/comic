<template>
  <div class="cartoon-library">
<!--    我的漫画库-->
    <div class="classify-content">
      <div class="classify-img">
<!--        漫画封面-->
        <img src="../../assets/img/01.jpg" alt="">
<!--        漫画名-->
        <p v-for="item in publishedCartoon">{{item.cartoonName}}</p>
        <input type="button" value="删除" class="cartoon-del">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "CartoonLibrary",
    data(){
      return{
        publishedCartoon:"dsfsd"
      }
    }
  }
</script>

<style lang="scss" scoped>
  $titleFontsize: 18px;
  $textFontsize: 14px;
  $minLoginBox: 330px;
  .cartoon-library{
    width: 880px;
    height: 100vh;
    position: relative;
    .classify-content{
      display: flex;
      height: 75vh;
      flex-direction: row;
      flex-wrap: wrap;
      /*align-items: center;*/
      .classify-img{
        width: 290px;
        height: 200px;
        display: inline-block;
        text-align: center;
        img{
          margin-top: 20px;
          width: 200px;
          height: 100px;
        }
        input{
          cursor: pointer;
          width: 100px;
          height: 30px;
          outline: none;
          border: 0;
          color: var(--color-background);
          background-color: var(--btn-sad-color);
        }
      }
    }
    /*.uploading{*/
    /*  margin-bottom: 10px;*/
    /*  width:100%;*/
    /*  height: 25vh;*/
    /*  text-align: center;*/
    /*}*/
  }
</style>
