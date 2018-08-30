import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  btnDisabled: false
}

const getters = {
  evenOrOdd: (state) => state.count % 2 === 0 ? 'even' : 'odd',
  btnDisabled: (state) => state.btnDisabled
}

const mutations = {
  increment: (state) => state.count++,
  decrement: (state) => state.count--,
  disable_btn: (state) => { state.btnDisabled = true },
  enable_btn: (state) => { state.btnDisabled = false },
}

const actions = {
  increment({ commit }) { commit('increment') },
  decrement({ commit }) { commit('decrement') },
  incrementIfOdd({ commit, state }) {
    if (state.count % 2 === 1) {
      commit('increment')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((respose, reject) => {
      commit('disable_btn')
      setTimeout(() => {
        commit('increment')
        commit('enable_btn')
      }, 3000)
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
