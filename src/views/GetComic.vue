<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="密语名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密语描述" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="图片上传" prop="img_path">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:80/imgs/imgUpload"
        :show-file-list="false"
        name="picture"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-dialog  :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-form-item>
    <el-form-item label="仅自己" prop="delivery">
      <el-switch v-model="ruleForm.delivery" @change="PrivacyRights"></el-switch>
    </el-form-item>
    <el-form-item label="密语类别" prop="type">
      <el-checkbox v-for="(item,index) in ruleForm.type" :key="index" :label="item.id" @change="checked=>handleChange(checked,index)">{{item.class_name}}</el-checkbox>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "GetComic",
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("名称"+this.ruleForm.name);
            console.log("描述"+this.ruleForm.desc);
            console.log("隐私级别："+ this.result_data.secrecy_level);
            console.log("谜语类型："+ this.result_data.con_type);
            this.result_data.con_name = this.ruleForm.name;
            this.result_data.con_desc = this.ruleForm.desc;
            this.result_data.user_id = JSON.parse(localStorage.getItem("user")).id;
            this.result_data.con_type = this.result_data.con_type;
            this.result_data.secrecy_level = this.ruleForm.delivery;
            this.result_data.img_path = this.ruleForm.img_path;

            console.log(this.result_data)

            var api = this.GLOBAL.host+"saywords/saveSaywords";
            this.$axios.post(api,this.result_data).then((response)=>{
              // console.log(response.data)
              if(response.data.code == '200'){
                this.$alert("发布成功","提示",{
                  confirmButtonText:'确定',
                  callback:action=>{
                    this.$refs[formName].resetFields();
                    this.getSaywords();
                    this.result_data.con_type = [];
                  }
                })
              }
            },(error)=>{
              console.log(error)
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
