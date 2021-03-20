<template>
    <div>
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="用户" value="1"></el-option>
          <el-option label="漫画" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        select: ''
      }
    }
  }
</script>

<style scoped>
  .el-select .el-input {
    width: 100px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
