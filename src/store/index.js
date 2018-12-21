import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
  dogs: [
    { name: 'lucky', breed: 'poodle', age: 1 },
    { name: 'pochy', breed: 'dalmatian', age: 2 },
    { name: 'blackie', breed: 'poodle', age: 4 }
  ],
  firstName: 'Alberto',
  lastName: 'Eyo'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export { state }
