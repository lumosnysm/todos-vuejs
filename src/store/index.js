import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    auth_token: '',
    todos: [],
  },
  getters: {
    todos: (state) => {
      return localStorage('todos')
    },
    auth_token: (state) => {
      return localStorage('auth_token')
    },
  },
  mutations: {
    addAuthToken(state, token) {
      state.auth_token = token
    },

    saveTodos(state, todos) {
      state.todos = todos
    }
  },
});
