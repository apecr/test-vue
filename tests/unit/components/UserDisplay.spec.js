/* global describe, it, expect */

import { mount } from '@vue/test-utils'
import UserDisplay from '@/components/UserDisplay.vue'
import flushPromises from 'flush-promises'

describe('ParentWithAPICallChild.vue', () => {
  it('renders with shallowMount and does not initialize API call', async () => {
    const wrapper = mount(UserDisplay)

    await flushPromises()

    expect(wrapper.find('span').text()).toEqual('Hello')
  })
})
