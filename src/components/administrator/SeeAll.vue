<template>
  <div>
<!--    所有漫画-->
    <div class="allCartoon">

    </div>
<!--    分页-->
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  export default {
    name: "SeeAll"
  }
</script>

<style lang="scss" scoped>
  .allCartoon{
    width: 100%;
    height: 80vh;
  }
  .block{
    height: 20vh;
  }
  /deep/ .el-pager li.active {
    color: var(--color-high-text);
  }
  /deep/ .el-pager li:hover {
    color: var(--color-high-text);
  }
</style>
