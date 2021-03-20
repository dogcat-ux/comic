<template>
  <div>
    <div class="user-item"
         :class="{active: currentIndex === index}"
         @click="itemClick(index)"
         v-for="(item, index) in titles">
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserItem",
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

<style scoped>
  .user-item{
    cursor: pointer;
    width: 212px;
    height: 56px;
    margin-bottom: 10px;
    line-height: 56px;
    margin-left: 8px;
    text-align: center;
    color: #565656;
  }
  .active{
    color: var(--color-high-text);
  }
</style>

