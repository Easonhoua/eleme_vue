import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // list:[]
    user:'登陆/注册',
    title: '发现',
    isactive:0,
    shopName:'',
    shopImg:''
  },
  mutations: {
    'ISHIGHTLIGHT': function (state, val) {
      state.isHighLight = val
    },
    'CHAGEUSER':function(state,data){
      state.user = data;
    },
    'TOGGLE':function(state,data){
      state.isactive = data;
    },
    'CHANGTITLE':function(state,data){
      state.title = data;
    },
    'SHOPIMG':function(state,data){
      state.shopImg = data;
    },
    'SHOPNAME':function(state,data){
      state.shopName = data;
    },



    // 'GETHOMELIST':function(state,data){
    //     state.list = data
    // }
  },
  getters: {
    // select: function (state) {
    //   return state.list.filter(function (item) {
    //     return item.isTrue
    //   }).length
    // }
  },
  actions: {
  }
})