<template>
  <div class="register-part">
    <!--    空白格-->
    <div class="blank"></div>
<!--    输入手机号-->
    <div class="register-phone">
      <input type="text" placeholder="请输入邮箱地址" name="email" ref="email">
    </div>
<!--    空白格-->
    <div class="blank"></div>
<!--    邮箱验证码-->
    <div class="verification">
      <div class="verification-input">
        <input type="text" placeholder="邮箱验证码" name="verifyCode" ref="verifyCode"/>
      </div>
      <div class="verification-btn">
        <input type="button" value="获取验证码" @click="getVerifyCode" />
      </div>

    </div>

    <!--    空白格-->
    <div class="blank"></div>

<!---->
    <div class="username">
      <input type="text" placeholder="昵称" name="username" ref="username"/>
    </div>

    <!--    空白格-->
    <div class="blank"></div>
<!--密码-->
    <div class="userPassword">
      <input type="password" placeholder="密码（6-16位字符组成，区分大小写）" name="password" ref="password"/>
    </div>
    <!--    空白格-->
    <div class="blank"></div>
<!--隐私政策-->
    <div class="register-footer">
      <input type="checkbox" checked/>
      <span>我已同意 《西漫用户使用协议》和《西漫隐私政策》</span>
    </div>
<!--    btn-->
    <!--    空白格-->
    <div class="blank"></div>
    <div class="register-btn">
      <input type="button" value="注册" @click="registerRef"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data(){
      return {
        email: "email",
        verifyCode: "verifyCode",
        username:"username",
        password:"password",
      }
    },
    methods: {
      getVerifyCode(){
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
      registerRef(){
        this.email = this.$refs.email.value;
        this.username = this.$refs.username.value;
        this.password = this.$refs.password.value;
        this.verifyCode = this.$refs.verifyCode.value;
        var params = new URLSearchParams();
        params.append('email',this.email);
        params.append('verifyCode ',this.verifyCode);
        params.append('username',this.username);
        params.append('password',this.password);
        // 密码验证
        var pattern = /^[\w_-]{6,16}$/;
        if(!this.email||!this.verifyCode){
          alert("请输入邮箱和验证码")
        }else {
          if(!this.password||!this.username){
            alert("请输入密码和用户名");
          }else if(!pattern.test(this.password)){
            alert("密码格式不正确");
          }else{
            this.$http.post("/user/register", params)
              .then(res=>{
                if(res.status==200){
                  alert('注册成功');
                  let mask = document.querySelector('.mask');
                  mask.style.display = 'none';
                  // this.$emit('loginLink',this.username)
                }
              })
              .catch(err => {
                if(err.status==406){
                  console.log(1)
                  alert('注册失败')
                }
              })
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $titleFontsize: 18px;
  $textFontsize: 14px;
  $minLoginBox: 330px;

  input{
    width: 100%;
    height: 40px;
    outline: 0;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    color: #606060;
    padding: 0 15px;
    display: inline-block;
  }
  /*  真正的注册框*/
  .register-part{
    display: flex;
    flex-direction: column;
    width: $minLoginBox;
    height: 40px;
    /*输入手机号*/
    .register-phone{
      width: $minLoginBox;
      height: 40px;
      /*background-color: #fff;*/
      font-size: $textFontsize;
      display: inline-block;
    }
    /*输入验证码*/
    .verification{
      width: $minLoginBox;
      height: 40px;
      display: flex;
      position: relative;
      .verification-input{
        width: 200px;
        position: absolute;
        left: 0;
        input{
          width: 200px;
        }
      }
      .verification-btn{
        width: 120px;
        height: 40px;
        position: absolute;
        right: 0;
        input{
          cursor: pointer;
          text-align: center;
          color: var(--color-background);
          background-color: var(--login-color);
        }
      }
    }
    /*  输入框*/
    .register-content{
      @extend .register-phone;
    }
    /*空白格*/
    .blank{
      width: $minLoginBox;
      height: 20px;
    }
    /*  验证*/
    .register-footer{
      font-size: 12px;
      input{
        width: 15px;
        height: 15px;
      }
    }
    //  登录按钮
    .register-btn{
      cursor: pointer;
      input{
        border: 1px solid #dcdfe6;
        background-color: var(--login-color);
        color: var(--color-background);
        cursor: pointer;
      }
      span{
        margin-left: 50px;
      }
    }
  }




</style>
