/*global describe, it */

import { mount, shallowMount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'
import { expect } from 'chai'
import Vue from 'vue'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapperGreetingComponents = mount(Greeting)
    expect(wrapperGreetingComponents.text().includes('Vue and TDD')).to.be.equal(true)
  })
  describe('mount and shallowMount', () => {
    const Child = Vue.component('Child', {
      name: 'Child',
      template: '<div>Child component</div>'
    })
    const Parent = Vue.component('Parent', {
      name: 'Parent',
      template: '<div><Child /></div>'
    })
    it('Should shallowMount the components', () => {
      let shallowWrapper = shallowMount(Child)
      expect(shallowWrapper.text()).to.be.equal('Child component')
      shallowWrapper = shallowMount(Parent)
      expect(shallowWrapper.text()).to.not.be.equal('<child-stub></child-stub>')
    })
    it('Should mount the components', () => {
      let wrapper = mount(Child)
      expect(wrapper.text()).to.be.equal('Child component')
      wrapper = shallowMount(Parent)
      expect(wrapper.text()).to.not.be.equal('Child component')
    })
  })
})