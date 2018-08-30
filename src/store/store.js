import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  evenOrOdd: (state) => state.count % 2 === 0 ? 'even' : 'odd'
}

const mutations = {
  increment: (state) => state.count++,
  decrement: (state) => state.count--
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
      setTimeout(() => {
        commit('increment')
      }, 1000)
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
