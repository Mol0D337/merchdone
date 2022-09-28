import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLocale: localStorage.getItem("locale"),
  },
  mutations: {
    GET_CHANGE_LOCALE(state, payload) {
      Vue.set(state, "isLocale", payload);
    },
  },
  actions: {
    SET_CHANGE_LOCALE({ commit }, payload) {
      commit("GET_CHANGE_LOCALE", payload);
    },
  },
  getters: {
    isLocale: (state) => state.isLocale,
  },
  modules: {
  }
})
