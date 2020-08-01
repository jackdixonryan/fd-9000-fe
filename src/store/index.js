import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  mutations: {
    changeAuthState(state) {
      state.loggedIn ? state.loggedIn = false : state.loggedIn = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
