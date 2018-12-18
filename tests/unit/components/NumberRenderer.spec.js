
/*global describe, it */

import NumberRenderer from '@/components/NumberRenderer.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('NumberRenderer', () => {
  it('Should render even numbers', () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: { even: true }
    })
    expect(wrapper.text()).to.be.equal([2, 4, 6, 8].join(', '))
  })
  it('Should render odd numbers', () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: { even: false }
    })
    expect(wrapper.text()).to.be.equal([1, 3, 5, 7, 9].join(', '))

    // const localThis = {even: false}
    // expect(NumberRenderer.computed.numbers.call(localThis)).to.be.equal([1, 3, 5, 7, 9].join(', '))
  })
})

