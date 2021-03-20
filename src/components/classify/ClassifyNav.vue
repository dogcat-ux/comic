<template>
  <div class="classifyNav">
    <div class="classify-item"
         :class="{active: currentIndex === index}"
         @click="itemClick(index)"
         v-for="(item, index) in titles">
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClassifyNav",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data: function () {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick: function (index) {
        // 1.改变currentIndex
        this.currentIndex = index;
        // 2.发出事件
        this.$emit('itemClick', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $headerBarHeight: 64px;
  .classifyNav{
    width: 450px;
    height: $headerBarHeight;
    display: flex;
    justify-content: center;
    align-items: center;
    .classify-item{
      flex: 1;
      cursor: pointer;
      text-align: center;
      line-height: $headerBarHeight;
      .navItem:hover{
        color: var(--color-high-text);
      }
      .navItem:active{
        color: var(--color-high-text);
      }
    }
  }
  .active{
    color: var(--color-high-text);
  }
</style>
