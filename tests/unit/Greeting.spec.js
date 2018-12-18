/*global describe, it */

import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'
import { expect } from 'chai'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapperGreetingComponents = mount(Greeting)
    expect(wrapperGreetingComponents.html().includes('Vue and TDD')).to.be.equal(true)
  })
})