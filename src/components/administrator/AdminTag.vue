<template>
  <div claas="admin-tag">
<!--    下拉标签-->
    <div class="line1">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-select v-model="value" placeholder="请选择待修改的标签">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-form-item label="修改为">
          <el-input v-model="formInline.user" placeholder="请输入新标签名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
<!--    -->
    <div class="line2">
      <input type="text" placeholder="请输入想要新添加的标签">
      <button>添加</button>
    </div>
    <div class="line3">
      <input type="text" placeholder="请输入想要删除的标签">
      <button>删除</button>
    </div>
<!--    -->

  </div>
</template>

<script>
  export default {
    name: "AdminTag",
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        options: [{
          value: '选项1',
          label: '少年'
        }, {
          value: '选项2',
          label: '恋爱'
        }, {
          value: '选项3',
          label: '古风'
        }],
        value: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin-tag{
    display: flex;
    width: 100%;
    height: 100%;
  }
  input{
    margin-top: 10px;
    width: 510px;
    height: 40px;
    outline: 0;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    color: #8b8a8a;
    padding: 0 15px;
    display: inline-block;
  }
  button{
    cursor: pointer;
    width: 100px;
    height: 30px;
    outline: none;
    border: 0;
    border-radius: 10px;
    color: var(--color-background);
    background-color: var(--color-tint);
  }
  button:hover{
    background-color: var(--color-high-text);
  }
  input::-webkit-input-placeholder{
    color:#dcdfe6;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color: #dcdfe6;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color: #dcdfe6;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#dcdfe6;
  }
</style>
