/* global describe, it */

import Emitter from '@/components/Emitter.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Emitter', () => {
  it('emits an event with two arguments', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()

    expect(wrapper.emitted().myEvent[0]).to.be.deep.equal(['name', 'password'])
  })
  it('emits an event without mounting the component', () => {
    const events = {}
    const $emit = (event, ...args) => { events[event] = [...args] }

    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).to.be.deep.equal(['name', 'password'])
  })
})
