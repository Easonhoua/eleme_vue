import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHighLight: 1
  },
  mutations: {
    'ISHIGHTLIGHT': function (state, val) {
      state.isHighLight = val
    }
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
