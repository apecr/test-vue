/*global describe, it */

import FormSubmitter from '@/components/FormSubmitter.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('FormSubmitter.vue', () => {
  it('Should reveal a notification when submitted', () => {
    const wrapper = shallowMount(FormSubmitter)
    const name = 'alice'
    wrapper.find('[data-username]').setValue(name)
    wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.message').text()).to.be.equal(`Thank you for your submission, ${name}.`)
  })
})