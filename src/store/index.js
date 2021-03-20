import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  //1用户 2管理员
  isLogin: 0,
  username:"",
  email:"",
  password:"",
})

export default store
