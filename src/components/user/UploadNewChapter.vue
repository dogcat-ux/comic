<template>
  <div class="new-chapter">
    <div class="upload-part">
      <div class="close">
        <img src="../../assets/img/icon/close2.png" alt=""  @click="uploadClose()">
      </div>
      <upload id="upload" :chapter="this.$refs.chapter.value" :comic-name="this.$refs.comicName.value"></upload>
    </div>
    <!--        漫画名字-->
    <div class="inputUpload">
      <input type="text" placeholder="请输入漫画名" name="comicName" ref="comicName">
      <!--        第几话-->
      <input type="text" placeholder="请输入章节名" name="chapter" ref="chapter">
    </div>
  <!--        上传-->
    <input type="button" value="上传" @click="cartoonUpload" slot="uploadBtn" class="cartoon-upload">
  </div>
</template>

<script>
  import Upload from "./Upload";
  export default {
    name: "UploadNewChapter",
    data(){
      return {
        comicName:"comicName",
        chapter:"chapter"
      }
    },
    components:{
      Upload
    },
    methods: {
      cartoonUpload(){
        let uploadPart = document.querySelector('.upload-part');
        uploadPart.style.display = 'block';
      },
      uploadClose(){
        let uploadPart = document.querySelector('.upload-part');
        uploadPart.style.display = 'none';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .new-chapter{
    display: flex;
    flex-direction: column;
    .upload-part{
      display: none;
      width: 100%;
      height: 150vh;
      background-color: rgba(9, 9, 9, 0.5);
      text-align: center;
      position: absolute;
      z-index: 200;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      .close{
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        top: 200px;
        right: 50px;
        width: 50px;
        height: 50px;
        img{
          width: 40px;
          height: 40px;
        }
      }
      #upload{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
      .linkBtn{
        position: absolute;
        bottom: 50px;
        left: 0;
        right: 0;
        margin: auto;
        input{
          cursor: pointer;
          width: 100px;
          height: 30px;
          outline: none;
          border: 0;
          color: var(--color-background);
          background-color: var(--color-tint);
        }
      }
    }
    .inputUpload{
      display: flex;
      flex-direction: column;
      width: 500px;
      input{
        margin-top: 10px;
        width: 500px;
        height: 40px;
        outline: 0;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        color: #606060;
        padding: 0 15px;
        display: inline-block;
      }
    }
    .cartoon-upload{
      margin-top: 10px;
      cursor: pointer;
      width: 100px;
      height: 30px;
      outline: none;
      border: 0;
      background-color: var(--color-tint);
      color: var(--color-background);
    }
  }
</style>
