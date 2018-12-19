/* global describe, it */
import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'
import ParentWithManyChildren from '@/components/ParentWithManyChildren.vue'
import { expect } from 'chai'
import Child from '@/components/Child.vue'

describe('Parent', () => {
  it('does not render a span', () => {
    const wrapper = shallowMount(Parent)

    expect(wrapper.find('span').isVisible()).to.be.equal(false)
  })
  it('does render a span', () => {
    const wrapper = shallowMount(Parent, {
      data () {
        return { showSpan: true }
      }
    })

    expect(wrapper.find('span').isVisible()).to.be.equal(true)
  })
  it('does not render a Child component', () => {
    const wrapper = shallowMount(Parent)

    expect(wrapper.find(Child).exists()).to.be.equal(false)
    expect(wrapper.find({ name: 'Child' }).exists()).to.be.equal(false)
  })
  it('renders many children', () => {
    const wrapper = shallowMount(ParentWithManyChildren)

    expect(wrapper.findAll(Child).length).to.be.equal(3)
  })
})
