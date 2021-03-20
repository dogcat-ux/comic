<template>
  <div class="mask">
    <div class="login-mask">
      <div class="login-box">
      <div class="close">
        <img src="../assets/img/icon/close.png" alt=""  @click="loginClose()">
      </div>
<!--      标题（登录/注册）-->
      <div class="login-title">
        <div class="title-item">
          <li @click="tabSwitch()">登录</li>
        </div>
        <div class="title-item">
          <li @click="tabSwitch2()">注册</li>
        </div>
      </div>
<!--      登录框部分-->
      <div class="login-part">
        <!--      登录方式-->
        <div class="login-type">
          <li @click="loginType()" id="type-word">验证码登录</li>
        </div>
        <!--    密码登录输入框    -->
        <div class="input-content">
          <input type="text" placeholder="请输入用户名/邮箱" name="userInf" ref="userInf"/>
        </div>
        <!--      短信登录部分-->
        <!--    输入邮箱-->
        <div class="login-phone">
          <input type="text" placeholder="请输入邮箱地址" name="email" ref="email"/>
        </div>
        <div class="blank"></div>

<!--        输入密码-->
        <div class="input-content">
          <input type="password" placeholder="请输入密码" name="password" ref="password"/>
        </div>
        <!--    手机验证码-->
        <div class="login-verification">
          <div class="verification-input2">
            <input type="text" placeholder="邮箱验证码" name="verifyCode" ref="verifyCode">
          </div>
          <div class="verification-btn2">
            <input type="button" value="获取验证码" @click="sendVerifyCode"/>
          </div>
        </div>
        <div class="blank"></div>
        <!--      忘记密码  -->
        <div class="login-footer">
          <div class="left">
            <input type="checkbox" checked/>
            <span>记住我</span>
          </div>
          <div class="right">
            <a href="">忘记密码?</a>
          </div>
        </div>
<!--    登录    -->
        <div class="login-button">
          <input type="button" value="登录" @click="inputRef"/>
        </div>
<!--        空白格-->
        <div class="blank"></div>
        <!--    管理员登录    -->
        <div class="login-button">
          <input type="button" value="管理员登录"  @click="adminInputRef"/>
        </div>
      </div>
<!--      注册部分-->
      <register id="register-com"></register>
    </div>
    </div>
  </div>
</template>

<script>
  import Register from "./Register";
  export default {
    name: "Login",
    data(){
      return {
        userInf:"userInf",
        loginEmail: "loginEmail",
        password:"password",
        email:"email",
        verifyCode:"verifyCode",
        //处于密码登录
        type: 0,
      //  管理员登录(1)和用户登录(0)的不同反应
      }
    },
    components: {
      Register,
    },
    methods: {
      loginClose(){
        let mask = document.querySelector('.mask');
        mask.style.display = 'none';
      },
      //登录和注册的切换
      tabSwitch(){
        let titleItems = document.querySelectorAll('.title-item');
        let loginBox = document.querySelector('.login-box');
        let loginPart = document.querySelector('.login-part');
        let registerCom = document.querySelector('#register-com');
        loginPart.style.display = 'block';
        registerCom.style.display = 'none';
        loginBox.style.height = '380px';
        titleItems[0].style.borderBottom = '3px solid var(--color-text)'
        titleItems[1].style.borderBottom = 'none'
      },
      tabSwitch2(){
        let titleItems = document.querySelectorAll('.title-item');
        let loginPart = document.querySelector('.login-part');
        let loginBox = document.querySelector('.login-box');
        let registerCom = document.querySelector('#register-com');
        loginPart.style.display = 'none';
        registerCom.style.display = 'block';
        loginBox.style.height = '450px';
        titleItems[1].style.borderBottom = '3px solid var(--color-text)'
        titleItems[0].style.borderBottom = 'none'
      },
    //  登录方式的转换
      loginType(){
        //密码
        let inputContents = document.querySelectorAll('.input-content');
        //短信
        let loginPhone = document.querySelector('.login-phone');
        let loginVerification = document.querySelector('.login-verification');
        //
        let typeWord = document.querySelector('#type-word');

        if(typeWord.innerHTML === "验证码登录"){
          typeWord.innerHTML = "密码登录";
          inputContents[0].style.display = 'none';
          inputContents[1].style.display = 'none';
          loginPhone.style.display = 'flex';
          loginVerification.style.display = 'flex';
          this.type = 1;
        }else{
          typeWord.innerHTML = '验证码登录';
          this.type = 0;
          inputContents[0].style.display = 'inline-block';
          inputContents[1].style.display = 'inline-block';
          loginPhone.style.display = 'none';
          loginVerification.style.display = 'none';
        }
      },
      //用户登录
      inputRef() {
        this.$store.state.isLogin = 1
        this.email = this.$refs.email.value;
        this.password = this.$refs.password.value;
        this.userInf = this.$refs.userInf.value;

        this.$store.state.password = this.password;

        var params = new URLSearchParams();
        params.append('userInf',this.userInf);
        params.append('password',this.password);
        // 密码验证
        if (this.type==0){
          var pattern = /^[\w_-]{6,16}$/;
          if(!this.userInf){
            alert("邮箱或用户名不能为空");
          }else if(!this.password||!pattern.test(this.password)) {
            alert("请输入正确的密码格式")
          }else {
            this.$http.post("/user/loginByPwd", params)
              .then(res=>{
                if(res.status==200){
                  alert('登录成功');
                  this.$store.state.username = res.data.username;
                  this.$store.state.email = res.data.email;
                  let mask = document.querySelector('.mask');
                  mask.style.display = 'none';
                  this.$emit('loginLink',this.userInf);
                }
              })
              .catch(err => {
                console.log(err)
                if(err.status==406){
                  console.log(1)
                  alert('登录失败')
                }
              })
          }
        }else
          {
          //  验证码验证
          var regEmail=  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
          if(!this.email||!regEmail.test(this.email)){
            alert("请输入正确的邮箱格式")
          }else if(!this.verifyCode) {
            alert("验证码不能为空")
          }else {
            this.$http.post("/user/loginByPwd", params)
              .then(res=>{
                console.log(res)
                if(res.status==200){
                  this.$store.state.username = res.data.username;
                  this.$store.state.email = res.data.email;
                  alert('登录成功');
                  let mask = document.querySelector('.mask');
                  mask.style.display = 'none';
                  this.$emit('loginLink',this.email)
                }
              })
              .catch(err => {
                console.log(err)
                if(err.status==406){
                  console.log(1)
                  alert('登录失败')
                }
              })
          }
        }
      },
      sendVerifyCode(){
        this.email = this.$refs.email.value;
        var code = new FormData();
        code.append('email',this.email);
        //邮箱验证
        var regEmail=  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(!this.email){
          alert("请输入邮箱");
        }else if(!regEmail.test(this.email)){
          alert("邮箱格式不正确");
        }else{
          // post方法
          this.$http.post("/user/sendVerifyCode?receiver="+this.email,code).then(res=>{
            if(res.status==200){
              alert('成功发送验证码');
            }
          })
            .catch(err => {
              console.log(err)
              if(err.status==406){
                console.log(1)
                alert('发送失败')
              }
            })
        }
      },
      // 管理员登录
      adminInputRef(){
      //   this.$store.state.password = this.password;
      //   this.$store.state.isLogin = 2
      //   this.email = this.$refs.email.value;
      //   this.password = this.$refs.password.value;
      //   this.userInf = this.$refs.userInf.value;
      //   var params = new URLSearchParams();
      //   params.append('adminInf',this.userInf);
      //   params.append('password',this.password);
      //   // 密码验证
      //   if (this.type==0){
      //     var pattern = /^[\w_-]{6,16}$/;
      //     if(!this.userInf){
      //       alert("邮箱或用户名不能为空");
      //     }else if(!this.password||!pattern.test(this.password)) {
      //       alert("请输入正确的密码格式")
      //     }else {
      //       this.$http.post("/user/loginByPwd", params)
      //         .then(res=>{
      //           console.log(res)
      //           if(res.status==200){
      //             this.$store.state.username = res.data.username;
      //             this.$store.state.email = res.data.email;
      //             alert('登录成功');
      //             let mask = document.querySelector('.mask');
      //             mask.style.display = 'none';
      //             this.$emit('adminLoginLink',this.userInf);
      //           }
      //         })
      //         .catch(err => {
      //           console.log(err)
      //           if(err.status==406){
      //             console.log(1)
      //             alert('登录失败')
      //           }
      //         })
      //     }
      //   }else
      //   {
      //     var regEmail=  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
      //     if(!this.email||!regEmail.test(this.email)){
      //       alert("请输入正确的邮箱格式")
      //     }else if(!this.verifyCode) {
      //       alert("验证码不能为空")
      //     }else {
      //       this.$http.post("/admin/loginByPwd", params)
      //         .then(res=>{
      //           console.log(res)
      //           if(res.status==200){
      //             alert('登录成功');
      //             this.$store.state.username = res.data.username;
      //             this.$store.state.email = res.data.email;
      //             let mask = document.querySelector('.mask');
      //             mask.style.display = 'none';
      //             this.$emit('loginLink',this.userInf)
      //           }
      //         })
      //         .catch(err => {
      //           console.log(err)
      //           if(err.status==406){
      //             console.log(1)
      //             alert('登录失败')
      //           }
      //         })
      //     }
      //   }
        this.$store.state.isLogin = 2
        this.email = this.$refs.email.value;
        this.password = this.$refs.password.value;
        this.userInf = this.$refs.userInf.value;

        this.$store.state.password = this.password;

        var params = new URLSearchParams();
        params.append('adminInf',this.userInf);
        params.append('password',this.password);
        // 密码验证
        if (this.type==0){
          var pattern = /^[\w_-]{6,16}$/;
          if(!this.userInf){
            alert("邮箱或用户名不能为空");
          }else if(!this.password||!pattern.test(this.password)) {
            alert("请输入正确的密码格式")
          }else {
            this.$http.post("/admin/loginByPwd", params)
              .then(res=>{
                if(res.status==200){
                  alert('登录成功');
                  console.log(res)
                  this.$store.state.username = res.data.adminName;
                  this.$store.state.email = res.data.email;
                  let mask = document.querySelector('.mask');
                  mask.style.display = 'none';
                  this.$emit('loginLink',this.userInf);
                }
              })
              .catch(err => {
                console.log(err)
                if(err.status==406){
                  console.log(1)
                  alert('登录失败')
                }
              })
          }
        }else
        {
          //  验证码验证
          var regEmail=  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
          if(!this.email||!regEmail.test(this.email)){
            alert("请输入正确的邮箱格式")
          }else if(!this.verifyCode) {
            alert("验证码不能为空")
          }else {
            this.$http.post("/admin/loginByPwd", params)
              .then(res=>{
                console.log(res)
                if(res.status==200){
                  this.$store.state.username = res.data.adminName;
                  this.$store.state.email = res.data.email;
                  alert('登录成功');
                  let mask = document.querySelector('.mask');
                  mask.style.display = 'none';
                  this.$emit('loginLink',this.email)
                }
              })
              .catch(err => {
                console.log(err)
                if(err.status==406){
                  console.log(1)
                  alert('登录失败')
                }
              })
          }
        }
      },
    }
  }
</script>

<style  lang="scss" scoped>
  @import "../assets/css/login.scss";
  #register-com{
    display: none;
  }
</style>
