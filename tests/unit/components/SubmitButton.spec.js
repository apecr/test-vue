/*global describe, it */

import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import SubmitButton from '@/components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  it('displays a non authorized message', () => {
    const msg = 'submit'
    const wrapper = shallowMount(SubmitButton, {
      propsData: { msg }
    })
    expect(wrapper.find('span').text()).to.be.equal('Not Authorized')
    expect(wrapper.find('button').text()).to.be.equal(msg)
  })
  it('displays an admin privilege message', () => {
    const msg = 'submit'
    const wrapper = shallowMount(SubmitButton, {
      propsData: { msg, isAdmin: true }
    })
    expect(wrapper.find('span').text()).to.be.equal('Admin Privileges')
    expect(wrapper.find('button').text()).to.be.equal(msg)
  })
})

