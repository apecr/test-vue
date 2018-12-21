/* global describe, it, expect */

import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ComponentWithVuex from '@/components/ComponentWithVuex.vue'

describe('ComponentWithVuex', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const store = new Vuex.Store({
    state: {
      username: 'alice'
    }
  })
  it('renders a username using a real Vuex store', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      store,
      localVue
    })

    expect(wrapper.find('.username').text()).toBe('alice')
  })
})
