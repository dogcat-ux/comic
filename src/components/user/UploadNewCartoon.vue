<template>
  <div class="new-cartoon">
    <!--       上传新漫画-->
    <!--       漫画封面-->
    <p>漫画封面</p>
    <el-upload
      class="upload-demo"
      ref="upload"
      accept=".jpg, .jpeg, .png"
      :http-request="uploadComicLink"
      action=""
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :limit="1"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
<!--    <label class="ui_button" for="xFile"><span>上传文件</span></label>-->
<!--    <form><input type="file" id="xFile" accept="image/png, image/jpe0g, image/gif, image/jpg" style="position:absolute;clip:rect(0 0 0 0);"></form>-->
<!--    漫画名-->
    <p>漫画名</p>
    <input type="text" placeholder="请输入漫画名" class="cartoon-name" name="comicName" ref="comicName">
    <!--       漫画标签-->
    <p>漫画标签</p>
    <el-select v-model="value1" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
<!--    保存按钮-->
    <br>

    <!--FIXME    上传服务器按钮-->
    <el-button class="uploadBtn" style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
<!--    <input type="button" value="保存"  class="cartoon-upload">-->

  </div>
</template>

<script>
  export default {
    name: "UploadNewCartoon",
    data() {
      return {
        //下拉菜单
        options: [{
          value: '恋爱',
          label: '恋爱'
        }, {
          value: '悬疑',
          label: '悬疑'
        }, {
          value: '校园',
          label: '校园'
        }, {
          value: '都市',
          label: '都市'
        }, {
          value: '古风',
          label: '古风'
        },{
          value: '奇幻',
          label: '奇幻'
        }, {
          value: '热血',
          label: '热血'
        }, {
          value: '穿越',
          label: '穿越'
        }, {
          value: '搞笑',
          label: '搞笑'
        },],
        value1: [],
        value2: [],
        //漫画列表
        fileList: [],
        //ref
        comicName:"comicName",
      };
    },
    methods: {
      submitUpload() {
        this.comicName = this.$refs.comicName.value;
        console.log(this.value1);
        console.log(this.comicName)
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      uploadComicLink(val){
        this.comicName = this.$refs.comicName.value;
        console.log(val.file)
        var uploadParams = new FormData();
        uploadParams.append('file', val.file);
        uploadParams.append('tag', this.value1);
        uploadParams.append('comicName', this.comicName);
        this.$http({
          method: 'post',
          url: '/user/uploadComic',
          data: uploadParams
        })
          .then(res => {
            console.log(res)
            if (res.status == 200) {
              alert('上传成功');
            }
          })
          .catch(err => {
            console.log(err)
            if (err.status == 406) {
              console.log(1)
              alert('上传失败')
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .new-cartoon{
    width: 100%;
    height: 100%;
    padding: 50px;
    .ui_button{
      width: 100px;
      height: 30px;
      background-color:var(--color-tint);
      span{
        width: 100px;
        height: 30px;
      }
    }
    .cartoon-name{
      margin-top: 20px;
      width: 500px;
      height: 40px;
      outline: 0;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      color: #606060;
      padding: 0 15px;
      display: inline-block;
    }
    .cartoon-upload{
      cursor: pointer;
      width: 100px;
      height: 30px;
      outline: none;
      border: 0;
      color: var(--color-background);
      background-color: var(--color-tint);
      margin-top: 20px;
    }
    .cartoon-upload:hover{
      background-color: var(--color-high-text);
    }
    input::-webkit-input-placeholder{
      color:#C0C4CC;
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
      color:#C0C4CC;
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
      color:#C0C4CC;
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
      color:#C0C4CC;
    }
    p{
      margin-top: 20px;
      margin-bottom: 10px;
      color: var(--color-high-text);
    }
    .tag{
      margin-top: 20px;
    }
    .uploadBtn{
      margin-top: 20px;
      width: 100px;
      margin-left: 0;
    }
  };
  button{
    background-color: var(--color-high-text);
    border: none;
  }
  button:link{
    background-color: var(--color-hover);
  }
  button:visited{
      background-color: var(--color-hover);
    }
  button:hover{
    background-color: var(--color-hover);
  }
  button:active{
    background-color: var(--color-hover);
  }

</style>
