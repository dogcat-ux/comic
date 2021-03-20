<template>
  <div class="comic">
    <el-backtop></el-backtop>
    <div class="comic-detail">
      <div class="topRemind">
        <span>作品：</span>
        <a href="#">{{comicName}}</a>
        <span>--第{{chapter.num}}话:{{chapter.name}}</span>
      </div>
      <div class="topTab">
        <span><a href="#">上一话</a></span>
        <span>|</span>
        <span><a href="#">回到目录</a></span>
        <span>|</span>
        <span><a href="#">下一话</a></span>
      </div>
      <div class="bottomTab">
        <span><a href="#">上一话</a></span>
        <span>|</span>
        <span><a href="#">回到目录</a></span>
        <span>|</span>
        <span><a href="#">下一话</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comic",
    components:{
    },
    data(){
      return {
        comicName:"comicName",
        chapter: {
            num:"1",
            name:"世界之最"
          }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comic{
    width: 100vw;
    height: 500vh;
    position: relative;
    text-align: center;
    .comic-detail{
      position: relative;
      width: 1140px;
      height: 100%;
      border: 1px solid var(--color-tint);
      border-radius: 10px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 10px auto 50px;
      text-align: center;
      .topRemind{
        position: absolute;
        left: 20px;
        top: 10px;
        span:first-child{
          border-left: 5px solid var(--color-tint);
          padding-left: 10px;
        }
      }
      .topTab{
        position: absolute;
        top: 30px;
        left: 50%;
        margin-left: -50px;
        span{
          margin-left: 5px;
          margin-right: 5px;
        }
      }
      .bottomTab{
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin-left: -50px;
        span{
          margin-left: 5px;
          margin-right: 5px;
        }
      }
    }
  }
</style>
