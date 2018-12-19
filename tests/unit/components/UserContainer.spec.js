/* global describe, it */

import { mount, shallowMount } from '@vue/test-utils'
import UserContainer from '@/components/UserContainer.vue'
import UserDisplay from '@/components/UserDisplay.vue'
import { expect } from 'chai'

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialize API call', () => {
    const wrapper = mount(UserContainer, {
      stubs: {
        UserDisplay: true
      }
    })

    expect(wrapper.find(UserDisplay).exists()).to.be.equal(true)
  })
  it('renders with shallowMount and does not initialize API call', () => {
    const wrapper = shallowMount(UserContainer)

    expect(wrapper.find(UserDisplay).exists()).to.be.equal(true)
  })
})
