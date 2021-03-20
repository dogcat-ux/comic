<template>
  <div class="admin">
    <user-frame>
      <user-item :titles="['管理员信息','待审核漫画','管理漫画标签','查看所有漫画']" slot="userItem" @itemClick="itemClick"></user-item>
      <ToAudit slot="userContent" id="toAudit" @currentChange="currentPage"></ToAudit>
      <SeeAll slot="userContent" id="seeAll"></SeeAll>
      <AdminTag slot="userContent" id="adminTag"></AdminTag>
      <AdminInfo slot="userContent" id="adminInfo"></AdminInfo>
    </user-frame>
  </div>
</template>

<script>
// <!--  父组件-->
// <!--  总框架-->
  import UserFrame from "../components/user/UserFrame";
  //左边栏
  import UserItem from "../components/user/UserItem"
  //右边
  import ToAudit from "../components/administrator/ToAudit";
  import SeeAll from "../components/administrator/SeeAll";
  import AdminTag from "../components/administrator/AdminTag";
  import AdminInfo from "../components/administrator/AdminInfo";

  export default {
    name: "AdminDetail",
    data(){
      return{
        pageNum:"pageNum",
        pageSize: 6
      }
    },
    components: {
      UserFrame,
      UserItem,
      ToAudit,
      AdminInfo,
      SeeAll,
      AdminTag
    },
    methods: {
      //currentPage
      currentPage(pageNum){
        console.log(pageNum);
        this.pageNum = pageNum;
      },
      //tab切换
      itemClick (index){
        let toAudit = document.querySelector('#toAudit');
        let seeAll = document.querySelector('#seeAll');
        let adminTag = document.querySelector('#adminTag');
        let adminInfo = document.querySelector('#adminInfo');
        switch (index) {
          case 0:
            adminInfo.style.display = 'block';
            toAudit.style.display = 'none';
            adminTag.style.display = 'none';
            seeAll.style.display = 'none';
            break
          case 1:
            adminInfo.style.display = 'none';
            toAudit.style.display = 'block';
            adminTag.style.display = 'none';
            seeAll.style.display = 'none';
            //申请第一页
            //1.申请总页码


            //2.申请待审核漫画及其信息


            // var toAuditParams = new FormData();
            // toAuditParams.append('pageNum', this.pageNum);
            // toAuditParams.append('pageSize', this.pageSize);
            // this.$http({
            //   method: 'post',
            //   url: '/admin/checkPendingComic',
            //   data: toAuditParams
            // })
            // .then(res => {
            //   console.log(res)
            //   if (res.status == 200) {
            //     alert('申请成功');
            //   }
            // })
            // .catch(err => {
            //   console.log(err)
            //   if (err.status == 406) {
            //     console.log(1)
            //     alert('上传失败')
            //   }
            // })
            break
          case 2:
            adminInfo.style.display = 'none';
            toAudit.style.display = 'none';
            adminTag.style.display = 'block';
            seeAll.style.display = 'none';
            break
          case 3:
            adminInfo.style.display = 'none';
            toAudit.style.display = 'none';
            adminTag.style.display = 'none';
            seeAll.style.display = 'block';
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #toAudit{
    display: none;
    text-align: center;
    align-items: center;
  }
  #seeAll{
    display: none;
    text-align: center;
    align-items: center;
  }
  #adminTag{
    display: none;
    text-align: center;
    align-items: center;
  }
  #adminInfo{
    display: flex;
    text-align: center;
    align-items: center;
  }
</style>
