<template>
  <div class="cartoon-library">
    <!--    我的漫画库-->
    <div class="classify-content">
      <div class="classify-img">
        <!--        漫画封面-->
        <img :src="imgUrl" alt="">
        <!--        漫画名-->
        <p v-for="item in publishedCartoon">{{item.cartoonName}}</p>
        <input type="button" value="通过" class="cartoon-del" @click="succeed">
        <input type="button" value="不通过" class="cartoon-del" @click="fail">
      </div>
    </div>
<!--    分页-->
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="6"
        layout="prev, pager, next, jumper"
        :total="total"
        :pager-count="5"
        >
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ToAudit",
    // props: ["num", "page"], //传入的总条数，和页码
    data() {
      return {
        //漫画
        publishedCartoon:[
          {
            cartoonName:"shijie",
            username:"username",
            chapter:"chapter",
            imgUrl:""
          }
          ],
        //分页
        //当前页
        pageNum:1,
        //当前总页数
        num:100
      }
    },
    computed: {
      currentPage: function() {
        return this.pageNum;
      },
      total: function() {
        return this.num;
      }
    },
    methods: {
      //element-ui
      handleSizeChange(val) {
        // console.log(val)
        // this.$emit("size-change", val);
      },
      handleCurrentChange(val) {
        this.$emit("currentChange", val);
        var toAuditParams = new FormData();
        toAuditParams.append('pageNum', this.pageNum);
        toAuditParams.append('pageSize', this.pageSize);
        this.$http({
          method: 'post',
          url: '/admin/checkPendingComic',
          data: toAuditParams
        })
          .then(res => {
            console.log(res)
            console.log(res.data)
            /*拿到后端返回的待审核漫画信息*/
            this.publishedCartoon.cartoonName=res.data.cartoonName;
            this.publishedCartoon.username=res.data.username;
            this.publishedCartoon.chapter=res.data.chapter;

            if (res.status == 200) {
              alert('申请成功');
            }
          })
          .catch(err => {
            console.log(err)
            if (err.status == 406) {
              console.log(1)
              alert('上传失败')
            }
          })
      },

    //  按钮
      succeed(){
        var passParams = new FormData();
        passParams.append('pageNum', this.pageNum);
        passParams.append('pageSize', this.pageSize);
        this.$http({
          method: 'post',
          url: '/admin/checkedPass',
          data: passParams
        })
          .then(res => {
            console.log(res)
            if (res.status == 200) {
              alert('通过ok');
            }
          })
          .catch(err => {
            console.log(err)
            if (err.status == 406) {
              console.log(1)
              alert('失败')
            }
          })
      },
      fail(){
        var notpassParams = new FormData();
        notpassParams.append('pageNum', this.pageNum);
        notpassParams.append('pageSize', this.pageSize);
        this.$http({
          method: 'post',
          url: '/admin/checkedNotPass',
          data: notpassParams
        })
          .then(res => {
            console.log(res)
            console.log(res.data)
            console.log(res.message)
            if (res.status == 200) {
              alert('不通过OK');
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
  $titleFontsize: 18px;
  $textFontsize: 14px;
  $minLoginBox: 330px;
  .cartoon-library{
    width: 880px;
    height: 100vh;
    position: relative;
    .classify-content{
      display: flex;
      height: 75vh;
      flex-direction: row;
      flex-wrap: wrap;
      /*align-items: center;*/
      .classify-img{
        width: 290px;
        height: 200px;
        display: inline-block;
        text-align: center;
        img{
          margin-top: 20px;
          width: 200px;
          height: 100px;
        }
        input{
          cursor: pointer;
          width: 100px;
          height: 30px;
          outline: none;
          border: 0;
          color: var(--color-background);
          background-color: var(--color-tint);
        }
        input:hover{
          background-color: var(--color-high-text);
        }
      }
    }
  }
  /deep/ .el-pager li.active {
    color: var(--color-high-text);
  }
  /deep/ .el-pager li:hover {
    color: var(--color-high-text);
  }
</style>
