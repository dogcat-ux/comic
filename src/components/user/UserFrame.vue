<template>
  <div class="background">
    <div class="user-box">
      <div class="sidebar">
        <div class="user-bar">
          <ul>
            <slot name="userItem"></slot>
          </ul>
        </div>
      </div>
      <div class="details">
        <slot name="userContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserFrame",
    components: {
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{Color:"#ffffff"}:{}
      }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/userDetail.css";
</style>
