/* global describe, it, expect, jest */
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import ComponentWithButtons from '@/components/ComponentWithButtons.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  testMutation: jest.fn()
}

const store = new Vuex.Store({ mutations })

describe('ComponentWithButtons', () => {
  it('commits a mutation when a button is clicked', () => {
    const wrapper = shallowMount(ComponentWithButtons, {
      store, localVue
    })

    wrapper.find('.commit').trigger('click')

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: 'Test Commit' }
    )
  })
})
