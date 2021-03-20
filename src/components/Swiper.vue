<template>
  <div class="backgroundImg">
    <swiper :options="swiperOption">
      <swiper-slide><img src="https://f2.kkmh.com/image/210312/WeDpWqJOA.webp-t.w750.webp.h" alt=""></swiper-slide>
      <swiper-slide><img src="https://f2.kkmh.com/image/210312/WeDpWqJOA.webp-t.w750.webp.h" alt=""></swiper-slide>
      <swiper-slide><img src="https://f2.kkmh.com/image/210312/WeDpWqJOA.webp-t.w750.webp.h" alt=""></swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>  <!-- 箭头左 -->
    <div class="swiper-button-next" slot="button-next"></div>  <!-- 箭头右 -->
  </div>
</template>

<script>
  /*组件方式引用*/
  import '../assets/css/swiper/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "Swiper",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {//swiper3
          autoplay: 3000,
          speed: 1000,
          // //显示分页
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true //允许分页点击跳转
          // },
          //设置点击箭头
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          //自动轮播
          autoplay: {
            delay: 4000
          },
          //开启循环模式
          loop: true,
        }
      }
    }
  }
</script>
<style lang="scss" scoped >
  .swiper-container {
    background:rgba(255,255,255,0.3);
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-image: url(https://i0.hdslb.com/bfs/manga-static/0f2fc74….jpg@760w.jpg);
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 100%;
  }
  .swiper-button-prev,.swiper-button-next{
    color: var(--color-tint);
  }
  @media (max-width: 760px) {
    .swiper-button-next {
      right: 20px;
      transform: rotate(90deg);
    }

    .swiper-button-prev {
      left: 20px;
      transform: rotate(90deg);
    }
  }
</style>
