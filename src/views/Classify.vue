<template>
  <div class="classify">
    <div class="classify-nav">
      <classify-nav :titles="['恋爱','少年','古风']" @itemClick="itemClick"></classify-nav>
    </div>
    <div class="classify-content">
      <div id="item1Love">
        <classify-content></classify-content>
      </div>
      <div id="item2Young">5453215</div>
      <div id="item3Ancient">cgfvghjkmnbhvcx</div>
    </div>
  </div>
</template>

<script>
  import ClassifyNav from "../components/classify/ClassifyNav";
  import ClassifyContent from "../components/classify/ClassifyContent";
  export default {
    name: "Classify",
    components: {
      ClassifyNav,
      ClassifyContent
    },
    methods: {
      itemClick (index){
        let item1Love = document.querySelector('#item1Love');
        let item2Young = document.querySelector('#item2Young');
        let item3Ancient = document.querySelector('#item3Ancient');
        switch (index) {
          case 0:
            item1Love.style.display = 'block';
            item2Young.style.display = 'none';
            item3Ancient.style.display = 'none';
            break
          case 1:
            item1Love.style.display = 'none';
            item2Young.style.display = 'block';
            item3Ancient.style.display = 'none';
            break
          case 2:
            item1Love.style.display = 'none';
            item2Young.style.display = 'none';
            item3Ancient.style.display = 'block';
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $headerBarHeight: 64px;
  .classify{
    width: 100vw;
    height: $headerBarHeight;
    .classify-nav{
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 1px 1px rgba(158,179,193,.5);
    }
    .classify-content{
      #item2Young,#item3Ancient{
        display: none;
      }
      #item1Love{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
