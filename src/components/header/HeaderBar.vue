<template>
  <div>
    <div class="header-bar">
    <div class="header-box">
      <div class="logo">
        <img src="../../assets/img/logo.png" alt="">
      </div>
      <div class="nav">
        <ul>
          <li><slot name="home"></slot></li>
          <li><slot name="classify"></slot></li>
          <li><slot name="rank"></slot></li>
          <li><slot name="update"></slot></li>
<!--          <li><router-link to='/' class="navItem">首页</router-link></li>-->
<!--          <li><router-link to='/classify' class="navItem">分类</router-link></li>-->
<!--          <li><router-link to='/rank' class="navItem">排行榜</router-link></li>-->
<!--          <li><router-link to='/update' class="navItem">更新</router-link></li>-->
        </ul>
      </div>
      <div class="left-box">
        <Search></Search>
        <div class="submission"><a href="">我要投稿！</a></div>
        <div class="login">
          <a href="#" @click="loginBtn()" v-if="headerLoginType=='登录 | 注册'">{{headerLoginType}}</a>
          <a href="#" @click="userBtn()" v-else-if="this.$store.state.isLogin==1">{{headerLoginType}}</a>
          <a href="#" @click="adminBtn()" v-else-if="this.$store.state.isLogin==2">{{headerLoginType}}</a>
        </div>
      </div>
    </div>
  </div>
    <login id="login-com" @loginLink="headerLoginLink" @adminLoginLink="adminLoginLink"></login>
  </div>
</template>

<script>
  import Login from "../Login";
  import Search from "./Search";
  export default {
    data(){
      return {
        headerLoginType:"登录 | 注册",
        //0用户  1管理员
        whoLogin: "user"
      }
    },
    name: "HeaderBar",
    components: {
      Login,
      Search
    },
    methods: {
      loginBtn(){
        let loginCom = document.querySelector('#login-com');
        loginCom.style.display = 'block'
      },
      //用户
      userBtn(){
        this.$router.replace('/user-detail')
      },
      //管理员
      adminBtn(){
        this.$router.replace('/admin-detail')
      },
      //用户
      headerLoginLink(userInfo){
        this.whoLogin = "user"
        this.headerLoginType = this.$store.state.username;
      },
      //管理员
      adminLoginLink(userInf){
        this.headerLoginType = this.$store.state.username;
        this.whoLogin = "admin";
      }
    },
    //返回属性
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path)!==-1
      }
    }
  }
</script>

<style lang="scss" scoped>
  $titleFontsize: 18px;
  $textFontsize: 14px;
  $headerBarHeight: 64px;
  .active{
    color: var(--color-high-text);
  }
  .header-bar{
    box-shadow: 0 0 5px 1px rgba(158,179,193,.5);
    font-size: $titleFontsize;
    width: 100vw;
    height: $headerBarHeight;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: var(--color-background);
    .header-box{
      width: 1200px;
      height: $headerBarHeight;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo{
        width: 100px;
        height: $headerBarHeight;
        display: flex;
        img{
          width: 100px;
          height: 50px;
          margin: auto;
        }
      }
      .nav{
        flex: 1;
        height: $headerBarHeight;
        ul{
          width: 450px;
          height: $headerBarHeight;
          display: flex;
          justify-content: center;
          align-items: center;
          li{
            flex: 1;
            text-align: center;
            line-height: $headerBarHeight;
            .navItem:hover{
              color: var(--color-high-text);
            }
            .navItem:active{
              color: var(--color-high-text);
            }
          }
        }
      }
      .left-box{
        width: 900px;
        height: $headerBarHeight;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .search{
          width: 200px;
          height: 32px;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: $textFontsize;
          background-color: #eeeeee;
          input{
            width: 160px;
            outline: 0;
            height: 32px;
            margin-left: 10px;
            border-radius: 5px;
            padding: 0;
            border: 0;
            background-color: #eeeeee;
          }
          img{
            width: 25px;
            height: 25px;
            cursor: pointer;
          }
        }
        .submission{
          margin-left: 10px;
        }
        .login{
          a{
            padding-right: 5px;
          }
        }
      }
    }

  }
</style>
