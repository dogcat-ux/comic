  <template>
  <div class="user-info">
    <div class="basic-info">
      <div class="username item">
        <h4>昵称</h4>
        <input type="text" v-model:username = "username" id="username" disabled="disabled">
      </div>
      <div class="phone item">
        <h4>密码</h4>
        <input type="password" v-model:password = "password" id="phone" disabled="disabled" class="passwordInput">
      </div>
      <div class="mailbox item">
        <h4>邮箱</h4>
        <input type="text" v-model:mailbox = "mailbox" id="mailbox" disabled="disabled"/>
      </div>
    </div>
    <div class="btn item">
      <input type="button" value="修改"  @click="modification()" v-if="this.isModified==1"/>
      <input type="button" value="保存"  @click="preserve()" v-else/>
      <input type="button" value="注销"  @click="cancel()"/>
    </div>
    <div class="mask" id="info-mask">
      <div class="info-mask">
        <div class="info-form">
          <p>为了信息安全请进行验证</p>
          <div class="close">
            <img src="../../assets/img/icon/close.png" alt=""  @click="verifyClose()">
          </div>
          <input type="text" placeholder="请输入账号所存的邮箱" class="info-line1">
          <div class="info-line2">
            <input type="text" placeholder="请输入邮箱验证码">
            <button @click="sendVerifyCode">获取验证码</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        //数据
        username:this.$store.state.username,
        mailbox:this.$store.state.email,
        password:this.$store.state.password,
        isModified:1,
      }
    },
    methods: {
      sendVerifyCode(){
        this.email = this.$refs.mailbox.value;
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
      modification: function(){
        this.isModified = 0;
        let username = document.querySelector('#username');
        let phone = document.querySelector('#phone');
        let mailbox = document.querySelector('#mailbox');
        username.disabled="";
        phone.disabled="";
        mailbox.disabled=""
      },
      preserve: function () {
        this.isModified = 1;
        let username = document.querySelector('#username');
        let phone = document.querySelector('#phone');
        let mailbox = document.querySelector('#mailbox');
        //验证
        let infoMask = document.querySelector('#info-mask');
        username.disabled="true";
        phone.disabled="true";
        mailbox.disabled="true"

        mailbox.setAttribute("contenteditable", "false");
        // 弹出验证
        infoMask.style.display = 'block'
      },
      cancel(){

      },
      verifyClose(){
        let mask = document.querySelector('#info-mask');
        mask.style.display = 'none';
      },
    }
  }
</script>

<style lang="scss" scoped>
  $titleFontsize: 18px;
  $textFontsize: 14px;
  $minLoginBox: 330px;
  .user-info{
    width: 750px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    .basic-info{
      flex: 1;
      width: 100%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      .item{
        flex: 1;
        width: 100%;
        height: 50px;
        h4{
          display: inline-block;
        }
        input{
          border: 0;
          margin-left: 100px;
          outline: none;
          display: inline-block;
          border-radius: 10px;
          width: 500px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background-color: var(--color-tint);
        }
      }
    }
    .btn{
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      input{
        cursor: pointer;
        width: 100px;
        height: 30px;
        outline: none;
        border: 0;
        color: var(--color-background);
        background-color: var(--color-high-text);
      }
      input:last-child{
        background-color: var(--btn-sad-color);
      }
    }
  }
  .mask{
    display: none;
    .info-mask{
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);
      position: fixed;
      top: 0;
      left: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      .info-form{
        position: relative;
        background-color: #fff;
        width: 400px;
        height: 200px;
        padding: 20px;
        .close{
          border-radius: 3px;
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 10px;
          width: 29px;
          height: 29px;
        }
        img{
          width: 20px;
          height: 20px;
        }
        .info-line1{
          width: $minLoginBox;
          height: 40px;
          outline: 0;
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          color: #606060;
          padding: 0 15px;
          margin-top: 20px;
          display: inline-block;
        }
        .info-line2{
          margin-top: 20px;
          width: $minLoginBox;
          input{
            width: 200px;
            height: 40px;
            outline: 0;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            color: #606060;
            padding: 0 15px;
            display: inline-block;
          }
          button{
            width: 120px;
            height: 40px;
            outline: 0;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            padding: 0 15px;
            display: inline-block;
            cursor: pointer;
            text-align: center;
            color: var(--color-background);
            background-color: var(--login-color);
          }
        }
      }
    }
  }

</style>
