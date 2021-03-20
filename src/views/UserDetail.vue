<template>
  <div class="user">
    <user-frame id="user-frame">
      <user-item :titles="['用户信息','我的漫画库','上传新漫画','上传新章节']" slot="userItem" @itemClick="itemClick"></user-item>
<!--      用户信息-->
      <user-info slot="userContent" id="userInfo"></user-info>
<!--      漫画库-->
      <cartoon-library slot="userContent" id="cartoonLibrary"></cartoon-library>
<!--    上传新漫画-->
      <UploadNewCartoon slot="userContent" id="UploadNewCartoon"></UploadNewCartoon>
<!--    上传新章节-->
      <UploadNewChapter slot="userContent" id="UploadNewChapter"></UploadNewChapter>
    </user-frame>
  </div>
</template>

<script>
// <!--  整个框架-->
  import UserFrame from "../components/user/UserFrame";
  //左边栏
  import UserItem from "../components/user/UserItem"
  //右边栏
  import UserInfo from "../components/user/UserInfo";
  import CartoonLibrary from "../components/user/CartoonLibrary";
  import UploadNewCartoon from "../components/user/UploadNewCartoon";
  import UploadNewChapter from "../components/user/UploadNewChapter";

  export default {
    name: "UserDetail",
    components: {
      UserFrame,
      UserItem,
      UserInfo,
      CartoonLibrary,
      UploadNewCartoon,
      UploadNewChapter
    },
    methods: {
      itemClick (index){
        let cartoonLibrary = document.querySelector('#cartoonLibrary');
        let userInfo = document.querySelector('#userInfo');
        let UploadNewCartoon = document.querySelector('#UploadNewCartoon');
        let UploadNewChapter = document.querySelector('#UploadNewChapter');
        switch (index) {
          case 0:
            userInfo.style.display = 'block';
            cartoonLibrary.style.display = 'none';
            UploadNewCartoon.style.display = 'none';
            UploadNewChapter.style.display = 'none';
            break
          case 1:
            userInfo.style.display = 'none';
            cartoonLibrary.style.display = 'block';
            UploadNewCartoon.style.display = 'none';
            UploadNewChapter.style.display = 'none';
            break
          case 2:
            userInfo.style.display = 'none';
            cartoonLibrary.style.display = 'none';
            UploadNewCartoon.style.display = 'block';
            UploadNewChapter.style.display = 'none';
            break
          case 3:
            userInfo.style.display = 'none';
            cartoonLibrary.style.display = 'none';
            UploadNewCartoon.style.display = 'none';
            UploadNewChapter.style.display = 'block';
            break
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  #cartoonLibrary{
    display: none;
    text-align: center;
    align-items: center;
  }
  #user-frame{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #UploadNewCartoon{
    display: none;
  }
  #UploadNewChapter{
    display: none;
    text-align: center;
    align-items: center;
  }
</style>
