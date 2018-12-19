/* global describe, it */

import { shallowMount } from '@vue/test-utils'
import Bilingual from '@/components/Bilingual.vue'
import { expect } from 'chai'

describe('Bilingual', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(Bilingual)

    console.log(wrapper.html())
    expect(wrapper.find('.hello').text()).to.be.equal('Hello world!')
  })
})
