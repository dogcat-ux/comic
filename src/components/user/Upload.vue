<template>
  <el-upload
    class="upload-demo"
    drag
    :http-request="uploadLink"
    action="http://cimonhe.free.idcfengye.com/user/upload"
    multiple
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>并且请按照你的漫画顺序用1.jpg，2.jpg......命名你的图片</div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
  export default {
    name: 'upload',
    props:["comicName","chapter"],
    components: {},
    data () {
      return {
        // cartoonLink:"cartoonLink",
      }
    },
    methods: {
      uploadLink(val) {
        var uploadParams = new FormData();
        uploadParams.append('file', val.file);
        uploadParams.append('comicName', this.comicName);
        uploadParams.append('chapter', this.chapter);
        console.log(this.comicName)
        console.log(this.chapter)
        console.log(uploadParams)
        this.$http({
          method: 'post',
          url: '/user/uploadComicChapter',
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
        //   this.$http.post("/user/upload", uploadParams)
        //     // {userInf: this.userInf,
        //     //   password: this.password})
        //     .then(res=>{
        //       console.log(res)
        //       if(res.status==200){
        //         alert('上传成功');
        //       }
        //     })
        //     .catch(err => {
        //       console.log(err)
        //       if(err.status==406){
        //         console.log(1)
        //         alert('上传失败')
        //       }
        //     })
        // }
      }
    },
  }
</script>


<style lang="scss" scope>
  .upload_warp_img_div_del {
    position: absolute;
    top: 6px;
    width: 16px;
    right: 4px;
  }

  .upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
  }

  .upload_warp_img_div_text {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }

  .upload_warp_img_div {
    position: relative;
    height: 100px;
    width: 120px;
    border: 1px solid #ccc;
    margin: 0px 5px 5px 0px;
    float: left;
    line-height: 100px;
    display: table-cell;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
  }

  .upload_warp_img {
    border-top: 1px solid #D2D2D2;
    padding: 5px 0 0 5px;
    overflow: hidden
  }

  .upload_warp_text {
    text-align: left;
    margin-bottom: 5px;
    padding-top: 5px;
    text-indent: 14px;
    border-top: 1px solid #ccc;
    font-size: 14px;
  }

  .upload_warp_right {
    float: left;
    width: 57%;
    margin-left: 2%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    line-height: 130px;
    color: #999;
  }

  .upload_warp_left button {

    margin: 8px 5px 0px 5px;
    cursor:pointer;


  }

  .upload_warp_left {
    float: left;

  }

  .upload_warp {
    margin: 5px;

  }

  .upload {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    background-color: #fff;
    width: 770px;
    box-shadow: 0px 1px 0px #ccc;
    border-radius: 4px;
  }

  .hello {
    width: 770px;
    text-align: center;
  }
</style>
