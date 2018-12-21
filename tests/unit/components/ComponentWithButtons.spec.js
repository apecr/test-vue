/* global describe, it, expect, jest */
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import ComponentWithButtons from '@/components/ComponentWithButtons.vue'
import realStore, { state } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  testMutation: jest.fn()
}

const store = new Vuex.Store({ mutations })

describe('ComponentWithButtons', () => {
  it('commits a mutation when a button is clicked. mutations are mocked', () => {
    const wrapper = shallowMount(ComponentWithButtons, {
      store, localVue
    })

    wrapper.find('.commit').trigger('click')

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: 'Test Commit' }
    )
  })
  it('dispatches an action when a button is clicked. store is mocked', () => {
    const mockStore = { dispatch: jest.fn() }
    const wrapper = shallowMount(ComponentWithButtons, {
      mocks: {
        $store: mockStore
      }
    })

    wrapper.find('.dispatch').trigger('click')

    expect(mockStore.dispatch).toHaveBeenCalledWith(
      'testAction', { msg: { id: 1, body: 'Test Dispatch' } })
  })

  it('dispatches an action when a button is clicked using a real Vuex getter', () => {
    const wrapper = shallowMount(ComponentWithButtons, { store: realStore, localVue })

    wrapper.find('.dispatch').trigger('click')
    wrapper.find('.dispatch').trigger('click')

    expect(state.msgs).toEqual([{ id: 1, body: 'Test Dispatch' }, { id: 1, body: 'Test Dispatch' }])
  })
  it('commits a mutation when a button is clicked using a real Vuex getter', () => {
    const wrapper = shallowMount(ComponentWithButtons, { store: realStore, localVue })

    wrapper.find('.commit').trigger('click')
    wrapper.find('.commit').trigger('click')

    expect(state.msgsMutated).toEqual([{ 'msg': 'Test Commit' }, { 'msg': 'Test Commit' }])
  })
})
