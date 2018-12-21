/* global describe, it, expect */

import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ComponentWithGetters from '@/components/ComponentWithGetters.vue'
import getters from '@/store/getters.js'
import { state } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters
})

describe('ComponentWithGetters no mocking', () => {
  it('renders a username using a real Vuex getter', () => {
    const wrapper = shallowMount(ComponentWithGetters, { store, localVue })

    expect(wrapper.find('.fullname').text()).toBe('Alberto Eyo')
  })
})
