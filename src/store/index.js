import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'

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
  state, getters
})

export { state }
