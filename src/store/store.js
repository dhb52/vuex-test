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
  INCREMENT: (state) => state.count++,
  DECREMENT: (state) => state.count--,
  DISABLE_BTN: (state) => { state.btnDisabled = true },
  ENABLE_BTN: (state) => { state.btnDisabled = false },
}

const actions = {
  increment({ commit }) { commit('INCREMENT') },
  decrement({ commit }) { commit('DECREMENT') },
  incrementIfOdd({ commit, state }) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((respose, reject) => {
      commit('DISABLE_BTN')
      setTimeout(() => {
        commit('INCREMENT')
        commit('ENABLE_BTN')
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
